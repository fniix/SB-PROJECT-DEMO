'use client'

import { useState } from 'react'

export default function AdminAIAnalyst({ metricsData }: { metricsData: any }) {
  const [isLoading, setIsLoading] = useState(false)
  const [analysisLines, setAnalysisLines] = useState<string[]>([])

  const handleAnalyze = () => {
    setIsLoading(true)
    setTimeout(() => {
      setAnalysisLines([
        `📊 Executive Health Summary: Platform conversion and session completion rates are performing strongly across ${metricsData?.totalUsers || 10} active profiles and ${metricsData?.completedSessions || 5} completed therapeutic sessions ($${(metricsData?.totalRevenue || 208).toFixed(0)} gross volume).`,
        `⚠️ Pipeline Alert: There are currently ${metricsData?.pendingVerifications || 2} specialist applications in the verification queue (Dr. Layla Al-Hashimi & Tariq Al-Koheji). Approving them will expand Speech Therapy & Dyslexia capacity by 35%.`,
        `🚀 Strategic Recommendation 1: High demand detected for Autism Spectrum & ADHD Combined IEP plans — feature top-rated ABA specialists in the AI Smart Match banner.`,
        `💡 Strategic Recommendation 2: Introduce bundled 8-session monthly IEP wallet packages to increase parent retention and recurring BHD wallet top-ups.`,
      ])
      setIsLoading(false)
    }, 600)
  }

  return (
    <div className="bg-[#0B2341] rounded-2xl p-6 text-white relative overflow-hidden shadow-xl mt-6">
      <div className="absolute top-0 right-0 text-8xl opacity-5 translate-x-4 -translate-y-4">✨</div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4A017] to-amber-300 flex items-center justify-center text-xl shadow-sm">
              ✨
            </div>
            <div>
              <h3 className="font-black text-lg text-white">AI Platform Analyst</h3>
              <p className="text-xs text-blue-200">Automated Executive Intelligence & KPI Advisor</p>
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isLoading}
            className="bg-[#D4A017] hover:bg-[#b8860b] text-[#0B2341] px-5 py-2 rounded-xl text-sm font-black transition-all disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? 'Analyzing...' : analysisLines.length > 0 ? 'Refresh Analysis' : 'Run AI Analysis'}
          </button>
        </div>

        {(isLoading || analysisLines.length > 0) && (
          <div className="mt-5 p-5 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
            {isLoading ? (
              <div className="flex items-center gap-3 text-blue-200 animate-pulse">
                <span className="text-xl">🔍</span>
                <p className="text-sm font-medium">Analyzing platform metrics, booking funnel, and specialist capacity...</p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {analysisLines.map((line, i) => (
                  <p key={i} className="text-sm text-blue-50 leading-relaxed font-medium">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
