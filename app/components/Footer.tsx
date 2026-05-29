const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.sentinelai.one'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-text-main text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to build what users actually need?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Start synthesizing your customer evidence today. Free forever for individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${APP_URL}/sign-up`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold bg-primary hover:bg-primary-hover text-white rounded-xl transition-all shadow-sm"
            >
              Get started free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:hello@sentinelai.one"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-xl transition-all"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/reallogo.png" alt="Sentinel" className="h-7 mb-4 brightness-0 invert" />
            <p className="text-white/50 text-sm leading-relaxed">
              Product discovery, powered by evidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href={`${APP_URL}/sign-up`} className="hover:text-white transition-colors">Sign up</a></li>
            </ul>
          </div>

          {/* Use cases */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Use cases</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="#features" className="hover:text-white transition-colors">User research synthesis</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Support ticket analysis</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Roadmap prioritization</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Sprint planning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><a href="mailto:hello@sentinelai.one" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="mailto:hello@sentinelai.one" className="hover:text-white transition-colors">Request a demo</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {year} Sentinel. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
