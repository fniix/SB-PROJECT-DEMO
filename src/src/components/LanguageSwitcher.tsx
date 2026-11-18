'use client'

import { useState, useEffect } from 'react'

export default function LanguageSwitcher() {
  const [lang, setLang] = useState<'en' | 'ar'>('en')

  useEffect(() => {
    const checkLang = () => {
      const htmlLang = document.documentElement.lang
      if (htmlLang === 'ar' || document.cookie.includes('googtrans=/en/ar')) {
        setLang('ar')
        document.documentElement.dir = 'rtl'
        document.body.classList.add('font-arabic')
      }
    }
    checkLang()
  }, [])

  useEffect(() => {
    // Observe changes to the html lang attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
          const newLang = document.documentElement.lang
          if (newLang === 'ar') {
            document.documentElement.dir = 'rtl'
            document.body.classList.add('font-arabic')
            setLang('ar')
          } else if (newLang === 'en') {
            document.documentElement.dir = 'ltr'
            document.body.classList.remove('font-arabic')
            setLang('en')
          }
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => observer.disconnect()
  }, [])

  const toggleLanguage = () => {
    const targetLang = lang === 'en' ? 'ar' : 'en'
    
    // Google Translate injects a select element with class goog-te-combo
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement
    
    if (selectElement) {
      selectElement.value = targetLang
      selectElement.dispatchEvent(new Event('change'))
    } else {
      // If the combo is not there yet, fallback to cookie and reload
      document.cookie = `googtrans=/en/${targetLang}; path=/`
      window.location.reload()
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 left-24 z-[9999] px-4 h-14 bg-white text-[#0B2341] rounded-full shadow-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#D4A017]/50 font-bold"
      aria-label="Toggle Language"
    >
      <span className="text-xl">🌐</span>
      <span className="text-sm">{lang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  )
}
