export default function UseCases() {
  const useCases = [
    {
      title: 'Email Organization',
      points: [
        'Automatically categorize and organize email communications',
        'Extract key information from email threads',
        'Flag important compliance and audit-related messages',
      ],
    },
    {
      title: 'Employee Access Management',
      points: [
        'Monitor and audit employee access permissions',
        'Detect unauthorized access and policy violations',
        'Automate access reviews and compliance reporting',
      ],
    },
    {
      title: 'Vendor Procurement',
      points: [
        'Automate vendor contract analysis and review',
        'Detect duplicate payments and procurement fraud',
        'Monitor vendor relationships and compliance',
      ],
    },
    {
      title: 'Internal Audit Automation',
      points: [
        'Automate the internal audit process end-to-end',
        'Review financial statements and identify anomalies',
        'Generate compliance reports with explainable findings',
      ],
    },
    {
      title: 'Legacy System Integration',
      points: [
        'Plug into existing systems and spreadsheets',
        'Automate data extraction and processing',
        'Eliminate manual data entry across systems',
      ],
    },
    {
      title: 'Compliance Monitoring',
      points: [
        'Continuous monitoring of compliance requirements',
        'Automated alerts for policy violations',
        'LLM powered analysis of financial and audit data',
      ],
    },
  ]

  return (
    <section id="use-cases" className="max-w-7xl mx-auto px-6 py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Automations for back office, compliance, and auditing
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <div key={index} className="bg-white rounded-2xl border border-border-subtle shadow-sm p-6 hover:shadow-md transition-shadow">
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
