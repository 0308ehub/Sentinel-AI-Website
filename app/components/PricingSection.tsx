'use client'

import { openCalendlyPopup } from '../utils/calendly'

export default function PricingSection() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-lg text-text-muted max-w-2xl mx-auto">
          Choose the plan that fits your team size and needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white rounded-2xl border border-border-subtle shadow-sm p-8 hover:shadow-lg transition-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-main mb-2">Free</h3>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-4xl font-bold text-text-main">$0</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-text-muted text-sm">
              For individuals who are interested in Sentinel's AI features and convenient automations for personal use
            </p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Simple spreadsheet automations</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Limited automations and automation complexity</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Limited daily use of the internal audit LLM</span>
            </li>
          </ul>
          <button className="w-full border-2 border-border-subtle hover:border-accent-yellow/50 hover:text-accent-yellow-dark px-6 py-3 rounded-lg font-medium text-text-main transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Small Teams Plan */}
        <div className="bg-white rounded-2xl border-2 border-accent-yellow shadow-lg p-8 hover:shadow-xl transition-shadow relative">
          <div className="absolute top-0 right-0 bg-accent-yellow text-text-main px-3 py-1 rounded-bl-lg rounded-tr-2xl text-xs font-semibold">
            Popular
          </div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-main mb-2">Small Teams</h3>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-4xl font-bold text-text-main">$50</span>
              <span className="text-text-muted">/month</span>
            </div>
            <p className="text-text-muted text-sm">
              Teams of 5-10 that need larger automations, utilize Sentinel's AI features across various back office functions, helping small back office teams automate workflows
            </p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Access AI features across various back office functions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No limit automations for complex and simple tasks</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Limited use of the internal audit LLM</span>
            </li>
          </ul>
          <button 
            onClick={() => openCalendlyPopup()}
            className="w-full bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-3 rounded-lg font-medium text-text-main transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-yellow/30"
          >
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-2xl border border-border-subtle shadow-sm p-8 hover:shadow-lg transition-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-main mb-2">Enterprise</h3>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-4xl font-bold text-text-main">Custom</span>
            </div>
            <p className="text-text-muted text-sm">
              For large teams that need advanced AI capabilities, complex automations across various functions and our premier internal audit services
            </p>
          </div>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited AI capabilities</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited automations across all functions</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Unlimited use of the internal audit LLM</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premier internal audit services</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-text-muted">
              <svg className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Dedicated support</span>
            </li>
          </ul>
          <button 
            onClick={() => openCalendlyPopup()}
            className="w-full bg-accent-yellow hover:bg-accent-yellow-dark px-6 py-3 rounded-lg font-medium text-text-main transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-yellow/30"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
