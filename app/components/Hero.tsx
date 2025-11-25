'use client'

import { openCalendlyPopup } from '../utils/calendly'

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
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
            <button 
              onClick={() => openCalendlyPopup()}
              className="bg-accent-yellow hover:bg-accent-yellow-dark px-8 py-3 rounded-lg font-medium text-text-main transition-colors"
            >
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
          </div>

          {/* Upload Controls */}
          <div className="mb-4 flex gap-3 items-center">
            <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Upload All Files
            </button>
            <input 
              type="text" 
              placeholder="Specify any specific details or things to focus on"
              className="flex-1 px-4 py-2 border border-border-subtle rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
            <button className="bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-2 rounded-lg text-sm font-medium text-text-main transition-colors">
              Audit
            </button>
          </div>

          {/* File Upload Section */}
          <div className="mb-4 pb-4 border-b border-border-subtle">
            <div className="mb-2">
              <label className="text-sm font-medium text-text-main">File</label>
            </div>
            <div className="bg-white border border-border-subtle rounded-lg p-3 flex items-center justify-between">
              <span className="text-sm text-text-main truncate flex-1">
                ConsolidatedBalanceSheetEnronCorp 2000 (1).pdf
              </span>
              <div className="flex-shrink-0 ml-2">
                <svg className="w-3 h-3 text-text-muted animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
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
