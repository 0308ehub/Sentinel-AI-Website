export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          How Sentinel Works
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white rounded-xl border-l-4 border-accent-yellow border border-border-subtle shadow-sm p-6">
          <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center mb-4">
            <span className="text-text-main font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Upload your data</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Upload PDFs, spreadsheets, and exports from ERP systems. Sentinel supports multiple file formats and can process bulk uploads simultaneously.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-xl border-l-4 border-accent-yellow border border-border-subtle shadow-sm p-6">
          <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center mb-4">
            <span className="text-text-main font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Run targeted audit checks</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Choose from pre-built templates (SOX, internal audit, fraud detection) or type custom instructions to focus on specific areas of concern.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-xl border-l-4 border-accent-yellow border border-border-subtle shadow-sm p-6">
          <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center mb-4">
            <span className="text-text-main font-bold">3</span>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Review explainable findings</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            See severity ratings, confidence scores, and linked citations back to exact pages and line numbers. Every finding is traceable and auditable.
          </p>
        </div>
      </div>
    </section>
  )
}
