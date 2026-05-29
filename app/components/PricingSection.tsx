const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.sentinelai.one'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'For individual PMs exploring AI-powered discovery.',
    cta: 'Get started free',
    ctaHref: `${APP_URL}/sign-up`,
    ctaVariant: 'outline' as const,
    features: [
      '1 workspace',
      'Up to 50 evidence files',
      '5 syntheses per month',
      'Pain point extraction',
      'Opportunity scoring',
      'CSV export',
    ],
  },
  {
    name: 'Pro',
    price: '$49',
    period: '/month',
    description: 'For product teams shipping fast with evidence-driven decisions.',
    cta: 'Start Pro free for 14 days',
    ctaHref: `${APP_URL}/sign-up`,
    ctaVariant: 'primary' as const,
    popular: true,
    features: [
      '10 workspaces',
      'Up to 500 evidence files',
      'Unlimited syntheses',
      'Everything in Free',
      'Slack integration',
      'Jira & Linear export',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For larger orgs with advanced security and collaboration needs.',
    cta: 'Contact us',
    ctaHref: 'mailto:hello@sentinelai.one',
    ctaVariant: 'outline' as const,
    features: [
      'Unlimited workspaces',
      'Unlimited evidence files',
      'Unlimited syntheses',
      'Everything in Pro',
      'SSO / SAML',
      'Custom integrations',
      'Dedicated onboarding',
      'SLA & dedicated support',
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-primary/40" />
            Pricing
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-main tracking-tight mb-5">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-text-muted">
            Start free. Upgrade when your team is ready to ship faster.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'bg-primary text-white shadow-primary border-0 scale-[1.02]'
                  : 'bg-white border border-border-subtle hover:border-primary/30 hover:shadow-card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.popular ? 'text-white' : 'text-text-main'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-text-main'}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-text-muted'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${plan.popular ? 'text-white/80' : 'text-text-muted'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-white/80' : 'text-primary'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-text-muted'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.ctaHref}
                className={`block w-full text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-white/90'
                    : plan.ctaVariant === 'primary'
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-primary'
                    : 'border-2 border-border-strong text-text-main hover:border-primary hover:text-primary'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-text-subtle mt-10">
          All plans include unlimited team members. Prices in USD. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
