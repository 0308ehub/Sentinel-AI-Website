const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Upload any evidence',
    description:
      'Drop in support tickets, interview transcripts, survey exports, or raw CSVs. Sentinel parses PDFs, spreadsheets, and structured data automatically — no formatting required.',
    chips: ['CSV / Excel', 'PDF', 'Interviews', 'Support logs'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI-powered synthesis',
    description:
      'Sentinel clusters pain points, surfaces recurring themes, and extracts structured insights across thousands of data points — in seconds, not days.',
    chips: ['Pain point clustering', 'Theme extraction', 'Segment analysis'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Prioritized opportunities',
    description:
      'Every opportunity is scored across five dimensions — impact, urgency, confidence, effort, and risk — with evidence citations and target segments identified.',
    chips: ['5-dimension scoring', 'Evidence-linked', 'Segment targeting'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
      </svg>
    ),
    title: 'Ship to your workflow',
    description:
      'Export opportunities as Jira tickets, Linear issues, or Slack summaries. Keep your team in their existing tools while benefiting from AI-driven discovery.',
    chips: ['Jira', 'Linear', 'Slack', 'Export to CSV'],
  },
]

export default function ProductOverview() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/40" />
            Features
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-5">
            Everything your PM team needs
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            From raw customer data to actionable product strategy — Sentinel handles the synthesis
            so you can focus on the decisions.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-border-subtle p-8 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-light text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-main mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.chips.map((chip) => (
                      <span
                        key={chip}
                        className="text-[11px] font-medium text-text-muted bg-surface border border-border-subtle px-2.5 py-1 rounded-full"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
