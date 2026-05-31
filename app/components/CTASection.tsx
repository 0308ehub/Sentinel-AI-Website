'use client'

import { useState } from 'react'

export default function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
    } finally {
      setSubmitted(true)
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-950 rounded-3xl px-8 py-14 md:px-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 0%, rgba(124,58,237,0.15) 0%, transparent 60%)' }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/25 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-light">Accepting early teams now</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Be the team that ships faster
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              We&apos;re opening Sentinel to a small cohort of early teams. Get personal onboarding
              and lock in founding-member pricing.
            </p>

            {submitted ? (
              <div className="flex items-center justify-center gap-2.5 max-w-sm mx-auto p-3.5 bg-emerald-900/30 border border-emerald-500/30 rounded-xl">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-400 font-medium text-sm">You&apos;re on the list — expect a note from us soon.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 px-4 py-3 text-sm rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 text-sm font-semibold bg-primary hover:bg-primary-hover text-white rounded-xl transition-all shadow-sm hover:shadow-primary disabled:opacity-50 whitespace-nowrap"
                >
                  {loading ? 'Joining…' : 'Join Waitlist'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
