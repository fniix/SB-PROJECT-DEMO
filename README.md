# 🌟 SB Project — Interactive Demo Edition (Special Needs & Educational Support)

This is the **Standalone Interactive Demo Edition** of **SB Project (Student Batch)** — a comprehensive educational and therapeutic ecosystem in Bahrain connecting parents and beneficiaries with verified specialists.

## ✨ Demo Mode Highlights (Zero Setup / No Login Required)

- **100% Standalone (No Database or API Keys Needed):** Powered by an in-memory mock Supabase engine ([src/lib/supabase/mock-db.ts](src/lib/supabase/mock-db.ts)) pre-loaded with realistic beneficiaries, IEPs, specialists, session bookings, progress reports, educational games, video library, wallet transactions, and admin analytics.
- **Floating Live Demo Portal Switcher ([src/components/DemoSwitcherBar.tsx](src/components/DemoSwitcherBar.tsx)):** Switch at any time with 1 click between:
  1. 🌐 **Public Website** (`/`, `/about`, `/how-it-works`, `/special-needs`, `/school-students`, `/pricing`, `/faq`)
  2. 👨‍👩‍👧 **Parent Portal** (`/dashboard/parent` — Heroes, AI Smart Match, IEP Plans, Specialists, Games, Video Library, Rewards, Reports, Assignments, Wallet)
  3. 🦊 **Kid World (Gamified Mode)** (`/dashboard/parent` in Student Theme — Animated Fox Mascot, Quest Map & Treasure Badges)
  4. 🩺 **Specialist Portal** (`/dashboard/specialist` — Sessions, Beneficiaries & Case Files, IEP Clinical Management, Availability, Earnings)
  5. 🎓 **Beneficiary Portal** (`/dashboard/beneficiary` — Student Dashboard, Sessions, Skill Mastery Progress)
  6. 🎥 **Live Session Classroom** (`/dashboard/session/booking-upcoming-1` — Visual Timer, Attendance & Live Gold Star Reward System)
  7. 🛡️ **Admin Control Center** (`/dashboard/admin` — Revenue & Growth Charts, AI Platform Analyst, User Management, Tutor Verifications, Global Ledger, Support Desk)

## 🚀 Deploying to Vercel

1. Push this repository to a **new GitHub repository** (e.g., `SB-PROJECT-DEMO`).
2. Import the new repository on [Vercel](https://vercel.com/new).
3. Click **Deploy** (No environment variables are required!).
