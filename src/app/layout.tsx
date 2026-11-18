import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatbotWidgetWrapper from "@/components/chatbot/ChatbotWidgetWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DemoSwitcherBar from "@/components/DemoSwitcherBar";
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SB Project | Special Needs Support",
  description: "A comprehensive educational and therapeutic ecosystem connecting beneficiaries with verified specialists. Built on trust, quality, and measurable progress.",
  keywords: "special needs, therapy, autism, ADHD, speech therapy, IEP, education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} data-theme="parent" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans relative">
        <ThemeProvider>
          {children}
          <DemoSwitcherBar />
        </ThemeProvider>
        <ChatbotWidgetWrapper />
        <AccessibilityToolbar />
        <LanguageSwitcher />
        
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new window.google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'ar,en',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
      </body>
    </html>
  );
}
