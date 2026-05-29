const steps = [
  {
    number: '01',
    title: 'Upload your evidence',
    description:
      'Drop in support tickets, user interview transcripts, survey responses, or customer emails. Sentinel accepts CSVs, PDFs, plain text, and more — from one file to thousands.',
    detail: 'Works with Zendesk exports, Intercom logs, Typeform CSVs, Notion docs, and raw PDF transcripts.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Synthesize with AI',
    description:
      "Sentinel's AI reads every piece of evidence, clusters recurring pain points, identifies affected user segments, and surfaces structured insights — in seconds.",
    detail: 'Extracts severity, frequency, and segment data. Groups related evidence automatically. Cites exact quotes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Act on opportunities',
    description:
      'Review scored, prioritized product opportunities — each with impact, urgency, confidence, effort, and risk ratings. Export directly to Jira, Linear, or Slack.',
    detail: 'Every opportunity links back to supporting evidence. Scores are explainable, not black-box.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/40" />
            How it works
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-5">
            From raw feedback to product strategy in minutes
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Three steps is all it takes to go from scattered customer data to a prioritized product roadmap.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-border to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col">
                {/* Number + icon bubble */}
                <div className="relative flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-white border-2 border-primary-border flex items-center justify-center shadow-sm z-10">
                    <div className="text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl border border-border-subtle p-6 flex-1 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="text-xs font-mono font-bold text-primary/40 mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">{step.description}</p>
                  <div className="bg-primary-light rounded-lg px-3 py-2.5">
                    <p className="text-xs text-primary leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
