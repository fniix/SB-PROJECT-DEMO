import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch {
              // ignore in server component context
            }
          },
        },
      }
    )

    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && data?.user) {
      // Determine where to redirect based on role
      const role = data.user.user_metadata?.role || 'parent'
      const rolePaths: Record<string, string> = {
        parent:      '/dashboard/parent',
        beneficiary: '/dashboard/beneficiary',
        specialist:  '/dashboard/specialist',
        admin:       '/dashboard/admin',
      }
      const destination = rolePaths[role] || '/dashboard/parent'

      // For "next" param (e.g. reset-password flow), honour it
      if (next !== '/') {
        return NextResponse.redirect(`${origin}${next}`)
      }

      return NextResponse.redirect(`${origin}${destination}`)
    }
  }

  // If something went wrong, redirect to login with an error
  return NextResponse.redirect(`${origin}/login?error=auth_callback_failed`)
}
