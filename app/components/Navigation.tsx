'use client'

import { useState, useEffect } from 'react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.sentinelai.one'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border-subtle shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/reallogo.png" alt="Sentinel" className="h-8 w-auto" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          <a href="#features" className="px-3 py-2 text-sm text-text-muted hover:text-text-main transition-colors rounded-md hover:bg-surface">
            Features
          </a>
          <a href="#how-it-works" className="px-3 py-2 text-sm text-text-muted hover:text-text-main transition-colors rounded-md hover:bg-surface">
            How it works
          </a>
          <a href="#pricing" className="px-3 py-2 text-sm text-text-muted hover:text-text-main transition-colors rounded-md hover:bg-surface">
            Pricing
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${APP_URL}/sign-in`}
            className="px-4 py-2 text-sm text-text-muted hover:text-text-main transition-colors"
          >
            Sign in
          </a>
          <a
            href={`${APP_URL}/sign-up`}
            className="px-4 py-2 text-sm font-medium bg-primary hover:bg-primary-hover text-white rounded-lg transition-all shadow-sm hover:shadow-primary"
          >
            Get started free →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-text-muted hover:text-text-main hover:bg-surface transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-subtle px-6 py-4 space-y-1">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-text-muted hover:text-text-main hover:bg-surface rounded-md transition-colors">
            Features
          </a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-text-muted hover:text-text-main hover:bg-surface rounded-md transition-colors">
            How it works
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-sm text-text-muted hover:text-text-main hover:bg-surface rounded-md transition-colors">
            Pricing
          </a>
          <div className="pt-3 border-t border-border-subtle space-y-2">
            <a href={`${APP_URL}/sign-in`} className="block px-3 py-2 text-sm text-text-muted hover:text-text-main transition-colors">
              Sign in
            </a>
            <a href={`${APP_URL}/sign-up`} className="block px-4 py-2.5 text-sm font-medium bg-primary text-white rounded-lg text-center transition-colors hover:bg-primary-hover">
              Get started free →
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
