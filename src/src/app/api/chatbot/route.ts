import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const message: string = body?.message || ''
    const isArabic = /[\u0600-\u06FF]/.test(message)

    // If GEMINI_API_KEY is present, try using GoogleGenAI; otherwise use built-in intelligent Demo AI
    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenAI } = await import('@google/genai')
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
        const res = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are SB Assistant for SB Project (Special Needs & Educational Support Platform in Bahrain). Answer concisely in the user's language:\n${message}`,
        })
        if (res.text) {
          return NextResponse.json({ reply: res.text })
        }
      } catch {
        // Fallback to demo responder below
      }
    }

    const lower = message.toLowerCase()
    let reply = ''

    if (isArabic) {
      if (lower.includes('حجز') || lower.includes('موعد') || lower.includes('جلس')) {
        reply =
          'يمكنك حجز جلسة بسهولة من خلال الدخول إلى "لوحة ولي الأمر" ثم اختيار "Specialists" أو استخدام ميزة "AI Smart Match" لترشيح أفضل أخصائي يناسب حالة طفلك، ثم الضغط على "Book Session".'
      } else if (lower.includes('سعر') || lower.includes('دفع') || lower.includes('محفظ')) {
        reply =
          'تتراوح أسعار الجلسات التخصصية بين 18 و 28 د.ب للساعة، ويمكنك الدفع بسهولة عبر شحن المحفظة (Wallet) أو عن طريق BenefitPay والبطاقات البنكية.'
      } else {
        reply =
          'أهلاً بك في منصة SB Project! 🌟 أنا المساعد الذكي (وضع العرض التجريبي Demo). يمكنك تجربة جميع لوحات النظام (ولي الأمر، واجهة الطفل التفاعلية، الأخصائي، المستفيد، ولوحة الإدارة Admin) مباشرة من الشريط الذهبي أسفل الشاشة بدون تسجيل دخول!'
      }
    } else {
      if (lower.includes('book') || lower.includes('session') || lower.includes('specialist')) {
        reply =
          'You can book a session by visiting the Parent Portal → Specialists or using AI Smart Match to find the highest-scoring specialist for your child’s IEP needs, then clicking "Book Session".'
      } else if (lower.includes('price') || lower.includes('wallet') || lower.includes('pay')) {
        reply =
          'Sessions range from 18 to 28 BHD/hour depending on the specialist. Payments are supported via SB Wallet credits, BenefitPay, and credit/debit cards.'
      } else {
        reply =
          'Welcome to SB Project Interactive Demo! 🌟 You can switch between the Parent Portal, Gamified Kid World, Specialist Portal, Beneficiary Dashboard, Live Classroom, and Admin Control Center using the Demo Switcher bar at the bottom of the screen!'
      }
    }

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({
      reply: 'Welcome to SB Project Demo! Use the bottom switcher bar to explore all platform portals.',
    })
  }
}
