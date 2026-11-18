import Link from 'next/link'

const SKILLS = [
  { name: 'Expressive Language & Storytelling', score: 92, color: 'bg-teal-500' },
  { name: 'Visual Problem Solving & Math', score: 95, color: 'bg-[#D4A017]' },
  { name: 'Focus & Self-Regulation (45-min blocks)', score: 88, color: 'bg-blue-600' },
  { name: 'Social Turn-Taking & Pragmatics', score: 90, color: 'bg-purple-600' },
]

export default function BeneficiaryProgressPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div>
          <Link href="/dashboard/beneficiary" className="text-gray-500 hover:text-[#0B2341] text-sm font-bold flex items-center gap-1 mb-2">
            &larr; Back to Dashboard
          </Link>
          <h1 className="text-3xl font-black text-[#0B2341]">📈 My Progress & Achievements</h1>
          <p className="text-gray-500 text-sm mt-1">Track your learning milestones, badges, and skill growth</p>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-[#0B2341] via-[#12325b] to-teal-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-[#D4A017] text-[#0B2341] flex items-center justify-center text-4xl font-black shadow-md">
              🏆
            </div>
            <div>
              <span className="bg-white/15 text-[#D4A017] text-xs font-black px-3 py-1 rounded-full uppercase">
                Level 3 • Rising Star
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-2">Yusuf Al-Khalifa</h2>
              <p className="text-blue-200 text-sm">350 XP Earned • 7 IEP Goals Mastered</p>
            </div>
          </div>
          <Link
            href="/dashboard/parent/games"
            className="bg-[#D4A017] text-[#0B2341] px-6 py-3 rounded-2xl font-black text-sm hover:bg-amber-400 transition-all shadow-md"
          >
            🎮 Play Learning Games
          </Link>
        </div>

        {/* Skill Mastery */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 lg:p-8 space-y-6">
          <h3 className="text-xl font-bold text-[#0B2341]">🎯 Skill Area Mastery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map(skill => (
              <div key={skill.name} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <div className="flex justify-between text-sm font-bold text-[#0B2341]">
                  <span>{skill.name}</span>
                  <span>{skill.score}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
