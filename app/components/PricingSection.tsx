'use client'

import { openCalendlyPopup } from '../utils/calendly'

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <div className="bg-white rounded-xl border border-border-subtle shadow-sm p-8 md:p-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Contact sales
        </h2>
        <p className="text-lg text-text-muted mb-8 max-w-xl mx-auto">
          We work with audit teams of all sizes. Tell us about your environment and we'll customize a plan that fits your needs and budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => openCalendlyPopup()}
            className="bg-accent-yellow hover:bg-accent-yellow-dark px-8 py-3 rounded-lg font-medium text-text-main transition-colors"
          >
            Request demo
          </button>
          <button className="border-2 border-border-subtle hover:border-text-muted px-8 py-3 rounded-lg font-medium text-text-main transition-colors">
            Talk to us
          </button>
        </div>
      </div>
    </section>
  )
}
