export default function UseCases() {
  const useCases = [
    {
      title: 'Internal audit of financial statements',
      points: [
        'Review quarterly and annual financial reports',
        'Identify accounting errors and irregularities',
        'Verify compliance with GAAP and IFRS standards',
      ],
    },
    {
      title: 'Vendor and procurement fraud screening',
      points: [
        'Analyze vendor contracts and purchase orders',
        'Detect duplicate payments and suspicious patterns',
        'Flag unusual relationships and kickback schemes',
      ],
    },
    {
      title: 'SOX and internal controls testing',
      points: [
        'Test design and operating effectiveness of controls',
        'Document control deficiencies and weaknesses',
        'Support management assessment and external audit',
      ],
    },
    {
      title: 'Investigations into whistleblower reports',
      points: [
        'Rapidly analyze relevant documents and communications',
        'Surface patterns across multiple data sources',
        'Build evidence trail for compliance investigations',
      ],
    },
    {
      title: 'Reviewing contracts and side letters',
      points: [
        'Extract key terms and obligations from contracts',
        'Compare side agreements against master contracts',
        'Identify non-standard terms and hidden risks',
      ],
    },
    {
      title: 'Transaction testing and sampling',
      points: [
        'Process large volumes of transactions efficiently',
        'Apply statistical sampling methodologies',
        'Focus manual review on highest-risk items',
      ],
    },
  ]

  return (
    <section id="use-cases" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Use Sentinel across your audit lifecycle
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white rounded-xl border border-border-subtle shadow-sm p-6">
            <h3 className="text-lg font-semibold text-text-main mb-3">{useCase.title}</h3>
            <ul className="space-y-2 text-text-muted text-sm">
              {useCase.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-2">
                  <span className="text-accent-yellow-dark mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
