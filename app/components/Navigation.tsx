'use client'

import { useState } from 'react'
import { openCalendlyPopup } from '../utils/calendly'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative z-50 pt-4">
      <nav className="max-w-7xl mx-auto px-6 pt-2 pb-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img 
            src="/realcropped.png" 
            alt="Sentinel" 
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="#product" className="text-base text-text-muted hover:text-text-main transition-colors">
            Product
          </a>
          <a href="#security" className="text-base text-text-muted hover:text-text-main transition-colors">
            Security
          </a>
          <a href="#pricing" className="text-base text-text-muted hover:text-text-main transition-colors">
            Pricing
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block flex-shrink-0">
          <button 
            onClick={() => openCalendlyPopup()}
            className="bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-2.5 rounded-lg text-base font-medium text-text-main transition-colors"
          >
            Request Demo
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border border-border-subtle rounded-lg shadow-lg mx-6 mt-2 px-4 py-4 space-y-4">
          <a href="#product" className="block text-text-muted hover:text-text-main transition-colors">
            Product
          </a>
          <a href="#security" className="block text-text-muted hover:text-text-main transition-colors">
            Security
          </a>
          <a href="#pricing" className="block text-text-muted hover:text-text-main transition-colors">
            Pricing
          </a>
          <button 
            onClick={() => openCalendlyPopup()}
            className="w-full bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-2.5 rounded-lg font-medium text-text-main transition-colors mt-4"
          >
            Request Demo
          </button>
        </div>
      )}
    </header>
  )
}
