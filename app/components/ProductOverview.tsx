export default function ProductOverview() {
  return (
    <section id="product" className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-yellow/5 to-transparent pointer-events-none" />
      
      <div className="relative text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          The future of work, tailored automation for the back office.
        </h2>
      </div>

      <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Internal Audit AI */}
        <div className="bg-white rounded-2xl border border-border-subtle shadow-sm p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-text-main mb-4">Internal Audit AI</h3>
          <p className="text-text-muted mb-6">
            LLM-powered internal audits built for accuracy and scale
          </p>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Automates evidence collection, control testing, and documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Pulls data across systems and generates complete audit trails</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Drafts reports so teams focus on decisions, not manual work</span>
            </li>
          </ul>
        </div>

        {/* Back-Office Automation */}
        <div className="bg-white rounded-2xl border border-border-subtle shadow-sm p-8 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-bold text-text-main mb-4">Back-Office Automation</h3>
          <p className="text-text-muted mb-6">
            Tailored AI agents for back-office workflows
          </p>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Automates email organization and cross-system data entry</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Handles employee access procedures and routine approvals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Runs end-to-end processes inside your existing tools with zero disruption</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
