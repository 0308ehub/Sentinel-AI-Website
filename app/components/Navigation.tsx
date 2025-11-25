'use client'

import { useState } from 'react'
import { openCalendlyPopup } from '../utils/calendly'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border-subtle">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-text-main">Sentinel</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-text-muted hover:text-text-main transition-colors">
            Product
          </a>
          <a href="#use-cases" className="text-text-muted hover:text-text-main transition-colors">
            Use Cases
          </a>
          <a href="#security" className="text-text-muted hover:text-text-main transition-colors">
            Security
          </a>
          <a href="#pricing" className="text-text-muted hover:text-text-main transition-colors">
            Pricing
          </a>
          <a href="#resources" className="text-text-muted hover:text-text-main transition-colors">
            Resources
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => openCalendlyPopup()}
            className="bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-2.5 rounded-lg font-medium text-text-main transition-colors"
          >
            Request demo
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
        <div className="md:hidden bg-white border-t border-border-subtle px-4 py-4 space-y-4">
          <a href="#product" className="block text-text-muted hover:text-text-main transition-colors">
            Product
          </a>
          <a href="#use-cases" className="block text-text-muted hover:text-text-main transition-colors">
            Use Cases
          </a>
          <a href="#security" className="block text-text-muted hover:text-text-main transition-colors">
            Security
          </a>
          <a href="#pricing" className="block text-text-muted hover:text-text-main transition-colors">
            Pricing
          </a>
          <a href="#resources" className="block text-text-muted hover:text-text-main transition-colors">
            Resources
          </a>
          <button 
            onClick={() => openCalendlyPopup()}
            className="w-full bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-2.5 rounded-lg font-medium text-text-main transition-colors mt-4"
          >
            Request demo
          </button>
        </div>
      )}
    </header>
  )
}
