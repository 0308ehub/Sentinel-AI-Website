export default function SecuritySection() {
  return (
    <section id="security" className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Enterprise-grade security and controls
        </h2>
        <p className="text-lg text-accent-yellow font-semibold mt-2">
          SOC 2 Compliant
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ul className="space-y-4 text-text-muted">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-accent-yellow-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <div>
              <h3 className="font-semibold text-text-main mb-1">End-to-end encryption</h3>
              <p className="text-sm">All data encrypted at rest and in transit using industry-standard encryption protocols.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-accent-yellow-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <div>
              <h3 className="font-semibold text-text-main mb-1">Data residency options</h3>
              <p className="text-sm">Choose where your data is stored and processed to meet regional compliance requirements.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-accent-yellow-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <div>
              <h3 className="font-semibold text-text-main mb-1">Role-based access controls</h3>
              <p className="text-sm">Granular permissions ensure only authorized users can view or modify sensitive audit data.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-accent-yellow-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <div>
              <h3 className="font-semibold text-text-main mb-1">Comprehensive audit logs</h3>
              <p className="text-sm">Track every action, access, and change with detailed logs for compliance and forensics.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-accent-yellow-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-text-main mb-1">Human-in-the-loop review</h3>
              <p className="text-sm">All AI findings require human validation before finalization. Auditors remain in control.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
