import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function SpecialistPatientsPage() {
  const supabase = await createClient()
  const { data: beneficiaries } = await supabase.from('beneficiaries').select('*')

  return (
    <div className="min-h-screen bg-[#F3F4F6] p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link href="/dashboard/specialist" className="text-gray-500 hover:text-[#0B2341] text-sm font-bold flex items-center gap-1 mb-2">
              &larr; Back to Dashboard
            </Link>
            <h1 className="text-3xl font-black text-[#0B2341]">👥 My Beneficiaries & Case Files</h1>
            <p className="text-gray-500 text-sm mt-1">Active beneficiaries assigned to your clinical & educational care</p>
          </div>
          <Link href="/dashboard/specialist/iep" className="bg-[#0B2341] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#071829] transition-all">
            📋 Manage IEP Plans
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(beneficiaries || []).map((child: any) => (
            <div key={child.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="bg-[#0B2341] p-6 text-white flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl">
                  {child.gender === 'female' ? '👧' : '👦'}
                </div>
                <div>
                  <h2 className="text-xl font-bold">{child.full_name}</h2>
                  <p className="text-blue-200 text-xs font-medium mt-0.5">
                    Communication: {child.communication_level} • {child.preferred_language}
                  </p>
                </div>
                <span className="ml-auto bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                  Active IEP
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Diagnosed Conditions</p>
                  <div className="flex flex-wrap gap-2">
                    {(child.conditions || []).map((c: string) => (
                      <span key={c} className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-xs font-bold text-[#0B2341] uppercase tracking-wider mb-1">Clinical Notes & Learning Style</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{child.notes}</p>
                </div>

                <div className="pt-2 flex gap-3">
                  <Link href="/dashboard/specialist/iep" className="flex-1 bg-[#0B2341] text-white text-center py-2.5 rounded-xl text-sm font-bold hover:bg-[#071829] transition-colors">
                    📋 Update IEP
                  </Link>
                  <Link href="/dashboard/session/booking-upcoming-1" className="flex-1 bg-[#D4A017]/15 text-[#0B2341] border border-[#D4A017] text-center py-2.5 rounded-xl text-sm font-bold hover:bg-[#D4A017] transition-colors">
                    🎥 Live Session Room
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
