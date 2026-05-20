'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navigation } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[rgba(10,10,15,0.95)] border-b border-[var(--border)]'
          : 'py-5 bg-[rgba(10,10,15,0.8)] border-b border-transparent'
      }`}
      style={{ backdropFilter: 'blur(30px) saturate(1.3)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-black gradient-text">
          {siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navigation.main.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-[13.5px] font-semibold uppercase tracking-[0.8px] text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden bg-transparent border-none text-[var(--text)] text-2xl cursor-pointer p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-[rgba(10,10,15,0.98)] z-40 overflow-y-auto">
          <ul className="flex flex-col p-8 gap-6 list-none">
            {navigation.main.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
