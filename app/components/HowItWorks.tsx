export default function HowItWorks() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          How Sentinel Works
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="group relative bg-white rounded-2xl border-l-4 border-accent-yellow border border-border-subtle shadow-sm p-8 hover:shadow-lg hover:shadow-accent-yellow/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/0 to-accent-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-10 h-10 bg-gradient-to-br from-accent-yellow to-accent-yellow-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-text-main font-bold">1</span>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Plug into existing systems</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            Connect to legacy systems and spreadsheets. Upload PDFs, spreadsheets, and exports from ERP systems. No more manual data entry.
          </p>
        </div>

        {/* Step 2 */}
        <div className="group relative bg-white rounded-2xl border-l-4 border-accent-yellow border border-border-subtle shadow-sm p-8 hover:shadow-lg hover:shadow-accent-yellow/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/0 to-accent-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-10 h-10 bg-gradient-to-br from-accent-yellow to-accent-yellow-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-text-main font-bold">2</span>
          </div>
          <h3 className="text-xl font-semibold text-text-main mb-3">Automate the boring stuff</h3>
          <p className="text-text-muted text-sm leading-relaxed">
            LLM powered financial auditing automates internal audit processes, compliance checks, and back office workflows. Choose from pre-built templates or customize your automations.
          </p>
        </div>

        {/* Step 3 */}
        <div className="group relative bg-white rounded-2xl border-l-4 border-accent-yellow border border-border-subtle shadow-sm p-8 hover:shadow-lg hover:shadow-accent-yellow/10 transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/0 to-accent-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-10 h-10 bg-gradient-to-br from-accent-yellow to-accent-yellow-dark rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
