const stats = [
  {
    value: '3 steps',
    label: 'from raw feedback to actionable opportunities',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: '10+',
    label: 'evidence formats supported (CSV, PDF, JSON, DOCX…)',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    value: '5 scores',
    label: 'per opportunity: impact, urgency, confidence, effort, risk',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'evidence-backed — every opportunity links to exact quotes',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function SecuritySection() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-4">
            Built for product teams who ship fast
          </h2>
          <p className="text-lg text-text-muted">
            Sentinel doesn&apos;t replace your PM judgment — it gives you the evidence to back it up.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border-subtle p-6 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-primary-light text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold text-text-main mb-1 gradient-text">{stat.value}</div>
              <p className="text-sm text-text-muted leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Quote / callout */}
        <div className="mt-14 bg-primary rounded-2xl p-8 md:p-10 text-white text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="relative">
            <svg className="w-8 h-8 opacity-40 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-6 opacity-95">
              &ldquo;We used to spend two weeks consolidating user research before each planning cycle.
              With Sentinel, we have a prioritized opportunity list ready in an afternoon.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">S</div>
              <div className="text-left">
                <div className="text-sm font-semibold">Sarah K.</div>
                <div className="text-xs opacity-70">Head of Product, Series B SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
