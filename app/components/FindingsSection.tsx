export default function FindingsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Explainable, citation-backed findings
          </h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Each finding shows severity, confidence, and is backed by exact references (page/line number). Review the evidence, validate the conclusions, and make informed decisions with full transparency.
          </p>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Severity ratings help prioritize your review</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Confidence scores indicate certainty level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent-yellow-dark mt-1">•</span>
              <span>Direct citations link back to source documents</span>
            </li>
          </ul>
        </div>

        {/* Right Column - Product Card */}
        <div className="bg-white rounded-2xl border border-border-subtle shadow-lg p-8">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-border-subtle -mx-4 px-4">
            <button className="text-sm font-medium px-4 py-3 border-b-2 border-accent-yellow text-text-main">
              General Audit
            </button>
            <button className="text-sm font-medium px-4 py-3 text-text-muted hover:text-text-main">
              SOX Compliance
            </button>
          </div>

          {/* Finding */}
          <div className="mb-4">
            <h4 className="font-semibold text-text-main mb-3">FINDING 2: Revenue Recognition Issue</h4>
            <div className="flex items-center gap-4 mb-3 text-sm">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-text-muted">Severity: high</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-text-muted">Confidence: 90%</span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Revenue appears to be recognized prematurely before all performance obligations are satisfied. The timing of revenue recognition does not align with the transfer of control criteria as specified in ASC 606.
            </p>
          </div>

          {/* Citations Panel */}
          <div className="border-t border-border-subtle pt-4">
            <h5 className="text-sm font-semibold text-text-main mb-3">CITATIONS</h5>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="text-xs text-text-muted">
                <div className="font-medium text-text-main mb-1">ConsolidatedBalanceSheetEnronCorp 2000 (1).pdf</div>
                <ul className="space-y-1 ml-2">
                  <li>• Revenue Recognition Issue — high severity, 90% confidence (Pg 3, Ln 125)</li>
                  <li>• Accounting Violation — high severity, 90% confidence (Pg 4, Ln 168)</li>
                  <li>• Missing Data — low severity, 70% confidence (Pg 5, Ln 224)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
