export default function ProductOverview() {
  return (
    <section id="product" className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Built for modern audit and compliance teams
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Automate manual workflows like reading PDFs, cross-checking spreadsheets, and summarizing findings.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
          <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Audit Assistant</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Upload financial statements, contracts, and workpapers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Get structured findings with severity and confidence scores</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Export reports and collaborate with your team</span>
            </li>
          </ul>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
          <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Audit Archive</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Centralized vault with searchable history of prior audits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Track cases across multiple periods and engagements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Reference past findings and maintain audit continuity</span>
            </li>
          </ul>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
          <div className="w-12 h-12 bg-accent-yellow rounded-lg flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-text-main" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Automator</h3>
          <ul className="space-y-2 text-text-muted text-sm">
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Configurable automations that run checks on new data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Flag anomalies and violations automatically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Schedule recurring audits and monitor ongoing compliance</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
