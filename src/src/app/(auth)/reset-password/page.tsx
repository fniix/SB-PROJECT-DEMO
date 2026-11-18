'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isValidSession, setIsValidSession] = useState(false)
  const [checking, setChecking] = useState(true)

  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    // Check if there's an active session from the reset link
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setIsValidSession(true)
      }
      setChecking(false)
    })
  }, [])

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    const { error: updateError } = await supabase.auth.updateUser({ password })

    if (updateError) {
      setError(updateError.message)
      setLoading(false)
    } else {
      setSuccess(true)
      // Sign out and redirect to login after 2 seconds
      setTimeout(async () => {
        await supabase.auth.signOut()
        router.push('/login?notice=Password+updated+successfully.+Please+sign+in.')
      }, 2000)
    }
  }

  // ── Checking session state
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <svg className="w-8 h-8 animate-spin text-[#D4A017]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
        </svg>
      </div>
    )
  }

  // ── Invalid / expired link
  if (!isValidSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-[#0B2341] mb-3">Link Expired</h1>
          <p className="text-gray-500 mb-6">This reset link has expired or already been used. Please request a new one.</p>
          <Link href="/forgot-password"
            className="inline-block bg-[#0B2341] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#071829] transition-all">
            Request New Link
          </Link>
        </div>
      </div>
    )
  }

  // ── Success screen
  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black text-[#0B2341] mb-3">Password Updated!</h1>
          <p className="text-gray-500">Redirecting you to sign in...</p>
        </div>
      </div>
    )
  }

  // ── Reset form
  return (
    <div className="min-h-screen flex" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0B2341] flex-col justify-center items-center p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A017]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 text-center">
          <div className="text-7xl mb-6">🔐</div>
          <h2 className="text-4xl font-black text-white leading-tight mb-4">Set a new<br/>password</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xs mx-auto">
            Choose a strong password to keep your account secure.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-left">
            {['At least 8 characters', 'Mix of letters and numbers', 'Avoid common passwords'].map(tip => (
              <div key={tip} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                <span className="text-[#D4A017]">✓</span>
                <span className="text-slate-300 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-9 h-9 bg-[#0B2341] rounded-xl flex items-center justify-center text-[#D4A017] font-black">S</div>
            <span className="font-black text-[#0B2341] text-xl">SB <span className="text-[#D4A017]">Project</span></span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-black text-[#0B2341] mb-2">Create new password</h1>
            <p className="text-gray-400 text-sm">Enter and confirm your new password below.</p>
          </div>

          {error && (
            <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleReset} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-[#0B2341] mb-2">New Password</label>
              <div className="relative">
                <input
                  id="new-password"
                  type={showPass ? 'text' : 'password'}
                  required
                  placeholder="Min. 8 characters"
                  minLength={8}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-4 pr-12 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-[#D4A017] focus:ring-4 focus:ring-[#D4A017]/10 transition-all"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#0B2341]">
                  {showPass ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  )}
                </button>
              </div>
              {/* Password strength indicator */}
              {password.length > 0 && (
                <div className="mt-2 flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-all ${
                      password.length >= (i + 1) * 2
                        ? password.length >= 12 ? 'bg-green-400' : password.length >= 8 ? 'bg-amber-400' : 'bg-red-400'
                        : 'bg-gray-100'
                    }`} />
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-[#0B2341] mb-2">Confirm New Password</label>
              <input
                id="confirm-password"
                type="password"
                required
                placeholder="Repeat your password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className={`w-full rounded-xl border bg-gray-50 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-4 transition-all ${
                  confirmPassword && confirmPassword !== password
                    ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                    : confirmPassword && confirmPassword === password
                    ? 'border-green-300 focus:border-green-400 focus:ring-green-100'
                    : 'border-gray-200 focus:border-[#D4A017] focus:ring-[#D4A017]/10'
                }`}
              />
              {confirmPassword && confirmPassword === password && (
                <p className="text-xs text-green-600 mt-1 font-medium">✓ Passwords match</p>
              )}
              {confirmPassword && confirmPassword !== password && (
                <p className="text-xs text-red-500 mt-1 font-medium">✗ Passwords do not match</p>
              )}
            </div>

            <button
              id="reset-password-btn"
              type="submit"
              disabled={loading || !password || !confirmPassword}
              className="w-full mt-2 py-4 rounded-xl font-bold text-sm text-white transition-all active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #0B2341 0%, #1a3a5c 100%)', boxShadow: '0 8px 24px rgba(11,35,65,0.3)' }}
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Updating password...
                </>
              ) : '🔐 Update Password'}
            </button>
          </form>

          <div className="text-center mt-6">
            <Link href="/login" className="text-sm text-gray-400 hover:text-[#0B2341] font-semibold transition-colors">
              ← Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
