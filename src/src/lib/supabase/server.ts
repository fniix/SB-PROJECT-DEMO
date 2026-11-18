import type { SupabaseClient } from '@supabase/supabase-js'
import { cookies, headers } from 'next/headers'
import { createMockSupabaseClient, inferRoleFromPath, type DemoRole } from './mock-db'

export async function createClient(): Promise<SupabaseClient<any, 'public', any>> {
  const cookieStore = await cookies()
  const headerStore = await headers()

  const pathname = headerStore.get('x-demo-pathname')
  const cookieRole = cookieStore.get('sb_demo_role')?.value

  return createMockSupabaseClient((): DemoRole => {
    return inferRoleFromPath(pathname, cookieRole)
  }) as unknown as SupabaseClient<any, 'public', any>
}
