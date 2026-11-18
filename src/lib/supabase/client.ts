import type { SupabaseClient } from '@supabase/supabase-js'
import { createMockSupabaseClient, inferRoleFromPath, type DemoRole } from './mock-db'

function getCookieRole(): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)sb_demo_role=([^;]*)/)
  return match ? decodeURIComponent(match[1]) : null
}

export function createClient(): SupabaseClient<any, 'public', any> {
  return createMockSupabaseClient((): DemoRole => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : null
    return inferRoleFromPath(pathname, getCookieRole())
  }) as unknown as SupabaseClient<any, 'public', any>
}
