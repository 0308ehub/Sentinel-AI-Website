export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-main leading-tight">
            Supercharge your internal audits with AI.
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Sentinel reviews financial records, contracts, and internal communications to surface accounting violations, anomalies, and compliance risks—with explainable findings and citations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-accent-yellow hover:bg-accent-yellow-dark px-8 py-3 rounded-lg font-medium text-text-main transition-colors">
              Request demo
            </button>
            <button className="border-2 border-border-subtle hover:border-text-muted px-8 py-3 rounded-lg font-medium text-text-main transition-colors">
              Watch product walkthrough
            </button>
          </div>
        </div>

        {/* Right Column - Mock Product Card */}
        <div className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
          {/* Card Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-text-main">Enron Full Test</h3>
              <p className="text-sm text-orange-600 mt-1">Internal audit case</p>
            </div>
            <button className="bg-accent-yellow hover:bg-accent-yellow-dark px-4 py-2 rounded-lg text-sm font-medium text-text-main transition-colors">
              Audit
            </button>
          </div>

          {/* Analysis Output */}
          <div className="border-t border-border-subtle pt-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-semibold text-text-main">ANALYSIS OUTPUT</h4>
              <div className="flex gap-2">
                <button className="text-xs px-3 py-1 bg-accent-yellow rounded-md font-medium">General Audit</button>
                <button className="text-xs px-3 py-1 text-text-muted hover:bg-gray-50 rounded-md">SOX Compliance</button>
              </div>
            </div>

            {/* Finding */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <h5 className="font-semibold text-text-main">FINDING 1: Accounting Violation</h5>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-text-muted">Severity: high</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-text-muted">Confidence: 90%</span>
                </div>
              </div>
              <p className="text-sm text-text-muted leading-relaxed">
                The reported net income before cumulative effect of accounting changes for the six months ended June 30, 2001, is $1,588 million, which is a substantial increase from $1,233 million for the same period in 2000. This 29% increase in net income, coupled with the significant revenue increase, may indicate aggressive accounting practices or potential manipulation.
              </p>
            </div>

            {/* Citations Panel */}
            <div className="border-l-4 border-accent-yellow pl-4">
              <h5 className="text-sm font-semibold text-text-main mb-2">CITATIONS</h5>
              <ul className="space-y-1 text-xs text-text-muted">
                <li>• Accounting Violation — high severity, 90% confidence (Pg 4, Ln 168)</li>
                <li>• Missing Data — low severity, 70% confidence (Pg 5, Ln 224)</li>
                <li>• Anomaly — medium severity, 80% confidence (Pg 6, Ln 320)</li>
                <li>• Revenue Recognition Issue — high severity, 90% confidence (Pg 3, Ln 125)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
