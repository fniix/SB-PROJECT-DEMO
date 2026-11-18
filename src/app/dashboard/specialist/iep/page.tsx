import Link from 'next/link'

const IEP_PLANS = [
  {
    id: 'iep-1',
    beneficiary: 'Yusuf Al-Khalifa',
    age: '9 yrs • Grade 4',
    conditions: ['Autism Spectrum Disorder', 'ADHD'],
    status: 'Active',
    reviewDate: '2026-12-15',
    progress: 82,
    longTermGoal: 'Achieve age-appropriate two-way conversational fluency and sustain 45-minute independent classroom focus.',
    shortTermGoals: [
      { title: 'Initiate 4-5 word spontaneous social requests', status: 'Completed', pct: 100 },
      { title: 'Sequence 5-panel narrative story cards independently', status: 'Completed', pct: 100 },
      { title: 'Complete 3 consecutive 20-minute focus blocks with visual timer', status: 'In Progress', pct: 75 },
      { title: 'Answer open-ended "Why/How" reading comprehension prompts', status: 'In Progress', pct: 60 },
    ],
  },
  {
    id: 'iep-2',
    beneficiary: 'Mariam Al-Khalifa',
    age: '6 yrs • Grade 1',
    conditions: ['Speech/Language Disorders', 'Sensory Integration'],
    status: 'Active',
    reviewDate: '2026-12-20',
    progress: 74,
    longTermGoal: 'Build a 150-word bilingual expressive vocabulary and master foundational fine-motor writing grip.',
    shortTermGoals: [
      { title: 'Articulate 20 core action verbs clearly using picture cards', status: 'Completed', pct: 100 },
      { title: 'Follow 2-step classroom routines with visual schedule', status: 'In Progress', pct: 80 },
      { title: 'Trace Arabic & English letters using ergonomic pencil grip', status: 'In Progress', pct: 55 },
    ],
  },
]

export default function SpecialistIEPPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link href="/dashboard/specialist" className="text-gray-500 hover:text-[#0B2341] text-sm font-bold flex items-center gap-1 mb-2">
              &larr; Back to Dashboard
            </Link>
            <h1 className="text-3xl font-black text-[#0B2341]">📋 IEP Clinical Management</h1>
            <p className="text-gray-500 text-sm mt-1">Individualized Education & Therapy Plans managed by Dr. Sara Al-Dosari</p>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Average Goal Mastery</p>
              <p className="text-xl font-black text-emerald-600">78% On Track</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {IEP_PLANS.map(plan => (
            <div key={plan.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-[#0B2341] to-[#1a3a5c] p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-black">{plan.beneficiary}</h2>
                    <span className="bg-[#D4A017] text-[#0B2341] text-xs font-black px-3 py-0.5 rounded-full uppercase">
                      {plan.status}
                    </span>
                  </div>
                  <p className="text-blue-200 text-sm mt-1">
                    {plan.age} • {plan.conditions.join(' • ')}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs text-blue-200 uppercase font-bold">Next Clinical Review</p>
                  <p className="text-lg font-bold text-[#D4A017]">{plan.reviewDate}</p>
                </div>
              </div>

              <div className="p-6 lg:p-8 space-y-6">
                <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-5">
                  <p className="text-xs font-black text-blue-700 uppercase tracking-wider mb-1">🎯 Long-Term Clinical Objective</p>
                  <p className="text-sm font-semibold text-[#0B2341] leading-relaxed">{plan.longTermGoal}</p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0B2341] mb-4 text-base">Short-Term Milestones & Progress</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plan.shortTermGoals.map((g, idx) => (
                      <div key={idx} className="p-4 rounded-2xl border border-gray-100 bg-gray-50/60 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-bold text-[#0B2341]">{g.title}</p>
                          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                            g.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                          }`}>
                            {g.status}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${g.pct === 100 ? 'bg-emerald-500' : 'bg-[#D4A017]'}`}
                            style={{ width: `${g.pct}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-gray-400 font-bold text-right">{g.pct}% Mastery</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
