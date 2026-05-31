const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Describe it. Sentinel plans it.',
    description:
      'Tell Sentinel your goal in plain English. It breaks projects into epics, tasks, and subtasks with effort estimates — no ticket marathons, no alignment meetings.',
    chips: ['Goal → task decomposition', 'Effort estimation', 'Critical path mapping'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Real-time awareness, zero updates.',
    description:
      "Sentinel connects to GitHub, Linear, Jira, and Slack. It knows what's done, what's blocked, and what's at risk — before your standup.",
    chips: ['GitHub · Linear · Jira', 'PR-based progress tracking', 'Blocker detection'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Plans that adapt when reality shifts.',
    description:
      "Scope creeps, someone's out, a dependency slips — Sentinel re-routes automatically and drafts the stakeholder update so you don't have to.",
    chips: ['Dynamic re-planning', 'Auto stakeholder updates', 'Timeline adjustments'],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Works with your whole stack.',
    description:
      'No migration, no disruption. Sentinel sits on top of the tools your team already uses and makes them smarter — not another tool to babysit.',
    chips: ['GitHub', 'Linear', 'Jira', 'Slack', 'Notion'],
  },
]

export default function ProductOverview() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/40" />
            How it works
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-5">
            Project management is finally autonomous
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Sentinel doesn&apos;t just help you manage — it manages for you.
          </p>
        </div>

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
