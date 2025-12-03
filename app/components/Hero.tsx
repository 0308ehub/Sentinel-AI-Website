'use client'

import { openCalendlyPopup } from '../utils/calendly'

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Decorative gradient orb behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-yellow/5 via-accent-yellow-dark/5 to-accent-yellow/5 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-main leading-tight tracking-tight">
            Supercharge your back office with{' '}
            <span className="relative inline-block">
              <span className="relative z-10">AI automation</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-4 text-accent-yellow/30"
                viewBox="0 0 400 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,10 Q100,0 200,10 T400,10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="animate-pulse-slow"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed mx-auto max-w-3xl">
            We automate the workflows your team doesn't have time for.<br />
            AI agents that handle internal audit, back-office, and recruiting ops—end to end, across all your systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button 
              onClick={() => openCalendlyPopup()}
              className="group relative bg-accent-yellow hover:bg-accent-yellow-dark px-8 py-3 rounded-lg font-medium text-text-main transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-yellow/30"
            >
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent-yellow to-accent-yellow-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="border-2 border-border-subtle hover:border-accent-yellow/50 hover:text-accent-yellow-dark px-8 py-3 rounded-lg font-medium text-text-main transition-all duration-300 hover:scale-105">
              Learn more
            </button>
          </div>

          {/* Floating stats or features */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <div className="flex items-center gap-2 text-text-muted">
              <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
              <span className="text-sm">Setup in minutes</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <div className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
              <span className="text-sm">Enterprise ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
