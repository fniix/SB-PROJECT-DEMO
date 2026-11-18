import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function BeneficiarySessionsPage() {
  const supabase = await createClient()
  const { data: sessions } = await supabase
    .from('bookings')
    .select('*, specialist:specialist_id(full_name)')
    .eq('beneficiary_id', 'demo-beneficiary-1')
    .order('date', { ascending: false })

  return (
    <div className="min-h-screen bg-[#F3F4F6] p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/dashboard/beneficiary" className="text-gray-500 hover:text-[#0B2341] text-sm font-bold flex items-center gap-1 mb-2">
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl font-black text-[#0B2341]">📅 My Therapy & Learning Sessions</h1>
          <p className="text-gray-500 text-sm mt-1">Join your live classroom or review past sessions</p>
        </div>

        <div className="space-y-4">
          {(sessions || []).map((session: any) => (
            <div key={session.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#0B2341] text-[#D4A017] flex flex-col items-center justify-center shrink-0 font-black">
                  <span className="text-[10px] uppercase text-blue-200">{new Date(session.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className="text-xl leading-none">{new Date(session.date).getDate()}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-[#0B2341]">{session.service_type || session.subject}</h3>
                    <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                      session.status === 'accepted' ? 'bg-blue-100 text-blue-700' :
                      session.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {session.status === 'accepted' ? 'Upcoming' : session.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    🕒 {session.time} ({session.duration_minutes} mins) • 🩺 {session.specialist?.full_name || session.tutor_name}
                  </p>
                  {session.notes && (
                    <p className="text-xs text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg mt-2 border border-gray-100">
                      💡 {session.notes}
                    </p>
                  )}
                </div>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/dashboard/session/${session.id}`}
                  className="inline-flex items-center gap-2 bg-[#0B2341] hover:bg-[#D4A017] text-white hover:text-[#0B2341] px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm"
                >
                  🎥 {session.status === 'completed' ? 'View Session Room' : 'Join Live Room'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
