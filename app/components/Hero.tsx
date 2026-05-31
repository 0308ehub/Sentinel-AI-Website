'use client'

import { useState } from 'react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.sentinelai.one'

export default function Hero() {
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
    <section className="relative pt-16 pb-12 md:pt-20 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-primary-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Early Access — Limited Spots
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-text-main leading-[1.08] tracking-tight mb-6">
              The first AI that{' '}
              <span className="gradient-text">runs your projects</span>{' '}
              so your team can ship
            </h1>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Sentinel plans, assigns, tracks, and re-routes your engineering projects
              autonomously. Think Devin — but for project management.
            </p>

            {submitted ? (
              <div className="flex items-center gap-2.5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl mb-8">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-emerald-700 font-medium text-sm">You&apos;re on the list — we&apos;ll reach out soon.</span>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 px-4 py-3 text-sm rounded-xl border border-border-subtle bg-surface text-text-main placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-primary hover:bg-primary-hover text-white rounded-xl transition-all shadow-sm hover:shadow-primary disabled:opacity-50 whitespace-nowrap"
                >
                  {loading ? 'Joining…' : 'Get Early Access'}
                </button>
              </form>
            )}

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-subtle">
              {['No credit card required', 'Personal onboarding', 'Founding member pricing'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Product Mockup ── */}
          <div className="relative lg:block">
            <div
              className="absolute inset-0 -m-8 rounded-3xl blur-3xl animate-pulse-slow"
              style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
            />

            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-card overflow-hidden">
              {/* Title bar */}
              <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-300" />
                  <div className="w-3 h-3 rounded-full bg-yellow-300" />
                  <div className="w-3 h-3 rounded-full bg-green-300" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-[11px] text-gray-400 flex items-center gap-1.5">
                    sentinel — Q3 Launch Sprint
                  </div>
                </div>
                <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse inline-block" />
                  AI Active
                </span>
              </div>

              {/* Kanban board */}
              <div className="p-4 grid grid-cols-3 gap-3 h-[380px] md:h-[420px] overflow-hidden">
                {[
                  {
                    label: 'Planned by AI',
                    bg: 'bg-gray-50',
                    border: 'border-gray-100',
                    dot: 'bg-gray-300',
                    tasks: ['Auth system redesign', 'Payment integration', 'API rate limiting'],
                  },
                  {
                    label: 'In Progress',
                    bg: 'bg-primary-light',
                    border: 'border-primary-border',
                    dot: 'bg-primary animate-pulse',
                    tasks: ['Mobile push notifications', 'Dashboard analytics'],
                  },
                  {
                    label: 'Shipped',
                    bg: 'bg-emerald-50',
                    border: 'border-emerald-100',
                    dot: 'bg-emerald-400',
                    tasks: ['Onboarding flow', 'Email templates', 'CI/CD pipeline'],
                  },
                ].map((col) => (
                  <div key={col.label}>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">{col.label}</p>
                    <div className="space-y-2">
                      {col.tasks.map((task) => (
                        <div key={task} className={`flex items-center gap-2 p-2 rounded-lg border ${col.bg} ${col.border}`}>
                          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${col.dot}`} />
                          <span className="text-[11px] text-gray-700 truncate">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* AI insight strip */}
              <div className="mx-4 mb-4 p-3 bg-primary-light border border-primary-border rounded-xl flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-[9px] font-bold">✦</span>
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed">
                  <span className="font-semibold text-primary">Sentinel re-planned:</span>{' '}
                  Payment integration blocking push notifications. Auth parallelized to @sarah. ETA Oct 12 → Oct 9.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
