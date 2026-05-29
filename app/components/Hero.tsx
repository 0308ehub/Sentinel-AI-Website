const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.sentinelai.one'

function ScorePill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className={`text-base font-bold ${color}`}>{value}</span>
      <span className="text-[10px] text-gray-400 mt-0.5">{label}</span>
    </div>
  )
}

function OpportunityCard({
  title,
  preview,
  evidence,
  impact,
  urgency,
  confidence,
  effort,
  tag,
  delay,
}: {
  title: string
  preview: string
  evidence: string
  impact: string
  urgency: string
  confidence: string
  effort: string
  tag: string
  delay: string
}) {
  return (
    <div
      className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm opacity-0 animate-fade-up"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h4 className="text-xs font-semibold text-gray-900 leading-snug">{title}</h4>
        <span className="flex-shrink-0 text-[10px] font-medium bg-primary-light text-primary px-2 py-0.5 rounded-full">
          {tag}
        </span>
      </div>
      <p className="text-[11px] text-gray-500 mb-3 leading-relaxed">{preview}</p>
      <div className="flex items-center justify-between pt-2.5 border-t border-gray-50">
        <ScorePill label="Impact" value={impact} color="text-primary" />
        <ScorePill label="Urgency" value={urgency} color="text-primary" />
        <ScorePill label="Conf." value={confidence} color="text-primary" />
        <ScorePill label="Effort" value={effort} color="text-emerald-600" />
      </div>
      <div className="flex items-center gap-1.5 mt-2.5 pt-2 border-t border-gray-50">
        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
        <span className="text-[10px] text-gray-400">{evidence}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-16 pb-12 md:pt-20 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-primary-border">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI-powered product discovery
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-text-main leading-[1.08] tracking-tight mb-6">
              Turn customer feedback into{' '}
              <span className="gradient-text">product decisions</span>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Sentinel synthesizes support tickets, interviews, and user research into
              prioritized product opportunities — so your team ships what users actually need.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href={`${APP_URL}/sign-up`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-primary hover:bg-primary-hover text-white rounded-xl transition-all shadow-sm hover:shadow-primary"
              >
                Start for free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-text-main bg-surface hover:bg-surface-hover border border-border-subtle rounded-xl transition-all"
              >
                See how it works
              </a>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-text-subtle">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Setup in 2 minutes
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                5 free workspaces
              </span>
            </div>
          </div>

          {/* ── Right: Product Mockup ── */}
          <div className="relative lg:block">
            {/* Glow behind the mockup */}
            <div
              className="absolute inset-0 -m-8 rounded-3xl blur-3xl animate-pulse-slow"
              style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
            />

            {/* App window */}
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
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM5.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" />
                    </svg>
                    app.sentinelai.one
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="flex h-[380px] md:h-[420px]">
                {/* Sidebar */}
                <div className="w-44 border-r border-gray-100 bg-gray-50/50 p-3 flex flex-col gap-1 flex-shrink-0">
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">
                    Q2 Research
                  </div>
                  {[
                    { icon: '📁', label: 'Evidence', active: false },
                    { icon: '💡', label: 'Insights', active: false },
                    { icon: '🎯', label: 'Opportunities', active: true },
                    { icon: '🎫', label: 'Tickets', active: false },
                  ].map(({ icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] cursor-default ${
                        active
                          ? 'bg-primary-light text-primary font-semibold'
                          : 'text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      <span>{icon}</span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                {/* Main panel */}
                <div className="flex-1 p-4 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-gray-900">Opportunities</span>
                      <span className="text-[10px] font-medium bg-primary text-white px-1.5 py-0.5 rounded-full">3</span>
                    </div>
                    <div className="text-[10px] text-primary font-medium cursor-default">Synthesize workspace</div>
                  </div>

                  <div className="space-y-3">
                    <OpportunityCard
                      title="Onboarding abandonment at setup step 3"
                      preview="42% of trial users drop off before completing workspace setup. Affects new team leads most."
                      evidence="8 support tickets · 3 interview transcripts"
                      impact="4.2"
                      urgency="4.5"
                      confidence="4.0"
                      effort="2.0"
                      tag="High priority"
                      delay="100ms"
                    />
                    <OpportunityCard
                      title="No bulk CSV export with column filters"
                      preview="Power users manually copy data row-by-row. 14 distinct requests across channels."
                      evidence="14 feature requests · 2 user surveys"
                      impact="3.8"
                      urgency="3.2"
                      confidence="4.8"
                      effort="1.5"
                      tag="Quick win"
                      delay="300ms"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
