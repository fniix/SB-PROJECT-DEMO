'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTheme } from './ThemeProvider'

const DEMO_VIEWS = [
  {
    id: 'website',
    label: 'Website',
    sub: 'Public Pages',
    icon: '🌐',
    href: '/',
    role: 'parent',
    themeMode: 'parent' as const,
  },
  {
    id: 'parent',
    label: 'Parent Portal',
    sub: 'Heroes, IEP & AI Match',
    icon: '👨‍👩‍👧',
    href: '/dashboard/parent',
    role: 'parent',
    themeMode: 'parent' as const,
  },
  {
    id: 'kid',
    label: 'Kid World',
    sub: 'Gamified Quest Map',
    icon: '🦊',
    href: '/dashboard/parent',
    role: 'parent',
    themeMode: 'student' as const,
  },
  {
    id: 'specialist',
    label: 'Specialist',
    sub: 'Sessions & Patients',
    icon: '🩺',
    href: '/dashboard/specialist',
    role: 'specialist',
    themeMode: 'parent' as const,
  },
  {
    id: 'beneficiary',
    label: 'Beneficiary',
    sub: 'Student Progress',
    icon: '🎓',
    href: '/dashboard/beneficiary',
    role: 'beneficiary',
    themeMode: 'parent' as const,
  },
  {
    id: 'classroom',
    label: 'Live Session',
    sub: 'Timer & Rewards',
    icon: '🎥',
    href: '/dashboard/session/booking-upcoming-1',
    role: 'specialist',
    themeMode: 'parent' as const,
  },
  {
    id: 'admin',
    label: 'Admin Center',
    sub: 'KPIs, AI & Revenue',
    icon: '🛡️',
    href: '/dashboard/admin',
    role: 'admin',
    themeMode: 'parent' as const,
  },
]

export default function DemoSwitcherBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [minimized, setMinimized] = useState(false)

  const getActiveId = () => {
    if (pathname.startsWith('/dashboard/admin')) return 'admin'
    if (pathname.startsWith('/dashboard/specialist') || pathname.startsWith('/dashboard/tutor')) return 'specialist'
    if (pathname.startsWith('/dashboard/beneficiary')) return 'beneficiary'
    if (pathname.startsWith('/dashboard/session')) return 'classroom'
    if (pathname.startsWith('/dashboard/parent') || pathname.startsWith('/dashboard')) {
      if (theme === 'student' && pathname === '/dashboard/parent') return 'kid'
      return 'parent'
    }
    return 'website'
  }

  const activeId = getActiveId()

  const handleSwitch = (view: (typeof DEMO_VIEWS)[number]) => {
    if (typeof document !== 'undefined') {
      document.cookie = `sb_demo_role=${view.role}; path=/; max-age=604800`
    }
    setTheme(view.themeMode)
    router.push(view.href)
  }

  if (minimized) {
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999]">
        <button
          onClick={() => setMinimized(false)}
          className="flex items-center gap-2.5 bg-[#0B2341] hover:bg-[#12325b] text-white px-5 py-2.5 rounded-full shadow-2xl border-2 border-[#D4A017] text-xs font-black tracking-wide transition-all hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-ping" />
          <span>✨ Open Demo Portal Switcher</span>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[9999] w-[96vw] max-w-5xl pointer-events-none">
      <div
        className="pointer-events-auto rounded-2xl p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(11,35,65,0.45)] border-2 border-[#D4A017]/80 backdrop-blur-xl"
        style={{ background: 'linear-gradient(135deg, rgba(6,28,48,0.96) 0%, rgba(11,35,65,0.96) 100%)' }}
      >
        {/* Top micro header */}
        <div className="flex items-center justify-between px-2.5 pb-2 mb-1.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#D4A017] text-[#0B2341] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B2341] animate-pulse" />
              Live Demo Mode
            </span>
            <span className="text-[11px] text-blue-200 font-semibold hidden sm:inline">
              Switch instantly between all system roles & dashboards (No login required)
            </span>
          </div>
          <button
            onClick={() => setMinimized(true)}
            className="text-[11px] font-bold text-slate-300 hover:text-white px-2 py-0.5 rounded-lg hover:bg-white/10 transition-colors"
            title="Minimize Demo Bar"
          >
            Minimize ✕
          </button>
        </div>

        {/* Role buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
          {DEMO_VIEWS.map(view => {
            const isActive = activeId === view.id
            return (
              <button
                key={view.id}
                onClick={() => handleSwitch(view)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D4A017] text-[#0B2341] shadow-lg scale-[1.02] ring-2 ring-white/40'
                    : 'bg-white/5 hover:bg-white/15 text-white border border-white/10'
                }`}
              >
                <span className="text-lg shrink-0">{view.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className={`text-xs font-black truncate leading-tight ${isActive ? 'text-[#0B2341]' : 'text-white'}`}>
                    {view.label}
                  </p>
                  <p className={`text-[9px] font-semibold truncate ${isActive ? 'text-[#0B2341]/80' : 'text-blue-200/70'}`}>
                    {view.sub}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
