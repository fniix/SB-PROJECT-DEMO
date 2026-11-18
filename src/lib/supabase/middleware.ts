import { NextResponse, type NextRequest } from 'next/server'
import { inferRoleFromPath } from './mock-db'

export async function updateSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const existingCookieRole = request.cookies.get('sb_demo_role')?.value
  const activeRole = inferRoleFromPath(pathname, existingCookieRole)

  // Pass pathname and inferred role to Server Components in the current request
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-demo-pathname', pathname)
  request.cookies.set('sb_demo_role', activeRole)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.cookies.set('sb_demo_role', activeRole, {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
