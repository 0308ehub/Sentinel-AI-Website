import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Sentinel',
  description: 'How Sentinel collects, uses, and protects your information.',
}

const EFFECTIVE_DATE = 'May 31, 2026'
const COMPANY = 'Sentinel AI, Inc.'
const DOMAIN = 'sentinelai.one'
const CONTACT_EMAIL = 'privacy@sentinelai.one'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-text-main mb-4">{title}</h2>
      <div className="space-y-4 text-text-muted leading-relaxed">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-body">
      {/* Nav */}
      <header className="border-b border-border-subtle bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-text-main hover:text-primary transition-colors">
            ← Sentinel
          </Link>
          <Link href="/terms" className="text-sm text-text-muted hover:text-text-main transition-colors">
            Terms of Service
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-text-main mb-3">Privacy Policy</h1>
          <p className="text-text-muted">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose-like">
          <Section title="1. Who We Are">
            <p>
              {COMPANY} (&quot;Sentinel,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website{' '}
              <span className="font-medium">{DOMAIN}</span> and the Sentinel application (the &quot;Service&quot;). This Privacy
              Policy explains how we collect, use, share, and protect information about you when you use our Service.
            </p>
            <p>
              By using the Service, you agree to the collection and use of information in accordance with this policy. If you
              do not agree, please do not use the Service.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>
              <span className="font-semibold text-text-main">Information you provide directly:</span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Account registration information such as your name and email address</li>
              <li>Project data, task descriptions, and workflow information you enter into the Service</li>
              <li>Communications you send to us (support, feedback, etc.)</li>
              <li>Payment information processed by our third-party payment processor (we do not store card numbers)</li>
            </ul>

            <p className="mt-4">
              <span className="font-semibold text-text-main">Information from third-party sign-in (Google OAuth):</span>
            </p>
            <p>
              When you sign in using Google, we receive your Google account email address, name, and profile picture via
              the Google OAuth 2.0 protocol. We use this information solely to create and authenticate your Sentinel account.
              We do not receive your Google password. We do not access, store, or use any other Google account data beyond
              the basic profile scopes listed at the time of authorization. Our use of information received from Google APIs
              complies with the{' '}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>

            <p className="mt-4">
              <span className="font-semibold text-text-main">Information collected automatically:</span>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Log data: IP address, browser type, pages visited, time and date of visit, referring URL</li>
              <li>Device information: operating system, device type, screen resolution</li>
              <li>Usage data: features used, actions taken, session duration</li>
              <li>Cookies and similar tracking technologies (see Section 7)</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide, operate, and improve the Service</li>
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Send service-related communications (security alerts, support responses, product updates)</li>
              <li>Monitor and analyze usage patterns to improve the Service</li>
              <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell your personal information to third parties. We do not use your project data or task content
              to train AI models without your explicit consent.
            </p>
          </Section>

          <Section title="4. How We Share Your Information">
            <p>We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-text-main">Service providers:</span> Third-party vendors who help us
                operate the Service, including authentication (Clerk), cloud hosting (Vercel, Google Cloud), database
                infrastructure, AI model providers (Anthropic, OpenAI), and payment processors. These providers are
                contractually bound to protect your data and may only use it to provide services to us.
              </li>
              <li>
                <span className="font-semibold text-text-main">Business transfers:</span> If Sentinel is involved in a
                merger, acquisition, or sale of assets, your information may be transferred. We will notify you via email
                and/or a prominent notice on the Service before any such transfer.
              </li>
              <li>
                <span className="font-semibold text-text-main">Legal requirements:</span> We may disclose your information
                if required by law, subpoena, or other legal process, or if we believe disclosure is necessary to protect
                the rights, property, or safety of Sentinel, our users, or the public.
              </li>
            </ul>
            <p>
              We do not share Google user data with any third party except as necessary to operate the Service or as
              required by law.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your account information for as long as your account is active or as needed to provide the Service.
              You may request deletion of your account and associated data at any time by contacting us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We will fulfill deletion requests within 30 days, subject to legal retention obligations.
            </p>
            <p>
              Aggregated, anonymized usage data may be retained indefinitely as it cannot be used to identify you.
            </p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We implement industry-standard technical and organizational measures to protect your information, including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Encryption of data in transit using TLS/HTTPS</li>
              <li>Encryption of data at rest</li>
              <li>Role-based access controls limiting employee access to user data</li>
              <li>Regular security reviews and vulnerability assessments</li>
            </ul>
            <p>
              No method of transmission or storage is 100% secure. While we strive to protect your data, we cannot
              guarantee absolute security. Please notify us immediately at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>{' '}
              if you suspect any unauthorized access to your account.
            </p>
          </Section>

          <Section title="7. Cookies and Tracking">
            <p>
              We use cookies and similar technologies (such as local storage) to operate the Service. These include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-text-main">Essential cookies:</span> Required for authentication,
                session management, and security. Cannot be disabled.
              </li>
              <li>
                <span className="font-semibold text-text-main">Analytics cookies:</span> Help us understand how users
                interact with the Service (e.g., Vercel Analytics). These do not identify you personally.
              </li>
            </ul>
            <p>
              You can control cookies through your browser settings. Disabling essential cookies may prevent you from
              using the Service.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Data portability (receive a copy of your data in a machine-readable format)</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We will respond within 30 days. California residents may have additional rights under the CCPA.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The Service is not directed to children under the age of 13. We do not knowingly collect personal
              information from children under 13. If we learn we have collected such information, we will delete it
              promptly. If you believe a child under 13 has provided us with personal information, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="10. International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries other than your own, including the United
              States. These countries may have different data protection laws. Where required, we rely on appropriate
              safeguards such as Standard Contractual Clauses to protect your data when transferred internationally.
            </p>
          </Section>

          <Section title="11. Third-Party Links">
            <p>
              The Service may contain links to third-party websites or services. We are not responsible for the privacy
              practices of those third parties. We encourage you to review their privacy policies before providing them
              with your information.
            </p>
          </Section>

          <Section title="12. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the
              new policy on this page and updating the effective date, and where appropriate, by sending you an email.
              Your continued use of the Service after changes become effective constitutes your acceptance of the revised
              policy.
            </p>
          </Section>

          <Section title="13. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please
              contact us:
            </p>
            <div className="bg-surface border border-border-subtle rounded-xl p-5 mt-4">
              <p className="font-semibold text-text-main">{COMPANY}</p>
              <p className="mt-1">
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>Website: {DOMAIN}</p>
            </div>
          </Section>
        </div>
      </main>

      <footer className="border-t border-border-subtle py-8 mt-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4 text-sm text-text-subtle">
          <p>© {new Date().getFullYear()} {COMPANY}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-text-main transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-text-main transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
