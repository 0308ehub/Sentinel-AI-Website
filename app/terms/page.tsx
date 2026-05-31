import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Sentinel',
  description: 'The terms governing your use of the Sentinel platform.',
}

const EFFECTIVE_DATE = 'May 31, 2026'
const COMPANY = 'Sentinel AI, Inc.'
const DOMAIN = 'sentinelai.one'
const CONTACT_EMAIL = 'legal@sentinelai.one'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-text-main mb-4">{title}</h2>
      <div className="space-y-4 text-text-muted leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-body">
      {/* Nav */}
      <header className="border-b border-border-subtle bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-text-main hover:text-primary transition-colors">
            ← Sentinel
          </Link>
          <Link href="/privacy" className="text-sm text-text-muted hover:text-text-main transition-colors">
            Privacy Policy
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-text-main mb-3">Terms of Service</h1>
          <p className="text-text-muted">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div>
          <Section title="1. Agreement to Terms">
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and{' '}
              {COMPANY} (&quot;Sentinel,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access
              to and use of the website at <span className="font-medium">{DOMAIN}</span>, the Sentinel application, and
              all related services (collectively, the &quot;Service&quot;).
            </p>
            <p>
              By creating an account, clicking &quot;I agree,&quot; or otherwise accessing or using the Service, you
              confirm that you are at least 13 years old, that you have read and understood these Terms, and that you
              agree to be bound by them. If you are using the Service on behalf of an organization, you represent that
              you have authority to bind that organization to these Terms.
            </p>
            <p>
              If you do not agree to these Terms, you must not access or use the Service.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Sentinel is an AI-powered project management platform that helps engineering teams plan, track, assign,
              and adapt projects autonomously. The Service may include features powered by large language models and
              other AI technologies (&quot;AI Features&quot;).
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Service at any time with
              reasonable notice. We will not be liable to you or any third party for any modification, suspension, or
              discontinuation.
            </p>
          </Section>

          <Section title="3. Accounts">
            <p>
              To access most features of the Service, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Keep your login credentials confidential and not share them with others</li>
              <li>Notify us immediately of any unauthorized use of your account at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
              </li>
              <li>Accept responsibility for all activity that occurs under your account</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms or are found to be
              fraudulent or inactive for extended periods.
            </p>
          </Section>

          <Section title="4. Acceptable Use">
            <p>You agree to use the Service only for lawful purposes. You must not:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Violate any applicable local, state, national, or international law or regulation</li>
              <li>Upload, transmit, or distribute content that is illegal, harmful, defamatory, obscene, or
                infringes any third-party intellectual property rights</li>
              <li>Attempt to gain unauthorized access to any part of the Service, or to any systems or networks
                connected to the Service</li>
              <li>Use automated means (bots, scrapers, crawlers) to access the Service without our prior written
                consent</li>
              <li>Reverse-engineer, decompile, or disassemble any component of the Service</li>
              <li>Use the Service to develop a competing product or service</li>
              <li>Interfere with or disrupt the integrity or performance of the Service</li>
              <li>Transmit viruses, malware, or any other malicious or destructive code</li>
              <li>Attempt to probe, scan, or test the vulnerability of the Service</li>
            </ul>
            <p>
              We reserve the right to investigate and take appropriate action, including removing content and terminating
              accounts, for any violation of this section.
            </p>
          </Section>

          <Section title="5. AI Features and Generated Content">
            <p>
              The Service includes AI-powered features that generate text, plans, task breakdowns, and other content
              (&quot;AI Output&quot;). You acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI Output is generated automatically and may be inaccurate, incomplete, or unsuitable for your
                purposes. You are responsible for reviewing and validating all AI Output before acting on it.</li>
              <li>AI Output does not constitute professional advice (legal, financial, engineering, or otherwise).</li>
              <li>You retain ownership of content you input into the Service (&quot;User Content&quot;). By submitting
                User Content, you grant us a limited, non-exclusive, royalty-free license to process it solely to
                provide the Service to you.</li>
              <li>We do not use your User Content to train AI models without your explicit consent.</li>
              <li>AI Output generated for you is yours to use, subject to any applicable third-party AI provider
                terms. We make no intellectual property claims over AI Output generated from your prompts.</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <p>
              The Service, including its software, design, text, graphics, logos, and other content (excluding User
              Content and AI Output), is owned by {COMPANY} and protected by United States and international
              intellectual property laws. Nothing in these Terms transfers any ownership rights in the Service to you.
            </p>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service
              for your internal business purposes during the term of your subscription, subject to these Terms.
            </p>
          </Section>

          <Section title="7. Fees and Payment">
            <p>
              Some parts of the Service are offered on a subscription basis (&quot;Paid Plans&quot;). By selecting a
              Paid Plan, you agree to pay the applicable fees. Fees are:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Billed in advance on a monthly or annual basis depending on your plan</li>
              <li>Non-refundable except as required by law or as expressly stated in our refund policy</li>
              <li>Subject to change with at least 30 days&apos; notice</li>
            </ul>
            <p>
              If payment fails, we may suspend your access to Paid Plan features until payment is resolved. All prices
              are in US dollars unless stated otherwise.
            </p>
          </Section>

          <Section title="8. Cancellation and Termination">
            <p>
              <span className="font-semibold text-text-main">By you:</span> You may cancel your account at any time
              from your account settings. Cancellation takes effect at the end of your current billing period. We do
              not provide prorated refunds for unused subscription time.
            </p>
            <p>
              <span className="font-semibold text-text-main">By us:</span> We may suspend or terminate your access to
              the Service immediately, without prior notice, if you breach these Terms, if we are required to do so by
              law, or if we discontinue the Service. Upon termination, your right to use the Service ceases immediately.
            </p>
            <p>
              You may export your data at any time while your account is active. Following account termination, we will
              delete your data within 90 days, subject to legal retention obligations.
            </p>
          </Section>

          <Section title="9. Disclaimer of Warranties">
            <p className="uppercase text-sm font-medium text-text-main">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND,
              WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW,
              SENTINEL EXPRESSLY DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful
              components, or that any defects will be corrected. AI Output is provided without any warranty of accuracy,
              completeness, or fitness for purpose.
            </p>
          </Section>

          <Section title="10. Limitation of Liability">
            <p className="uppercase text-sm font-medium text-text-main">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, SENTINEL AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
              AGENTS, LICENSORS, AND SERVICE PROVIDERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS OF
              GOODWILL, SERVICE INTERRUPTION, OR COST OF SUBSTITUTE SERVICES, ARISING OUT OF OR IN CONNECTION WITH
              THESE TERMS OR THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p className="uppercase text-sm font-medium text-text-main">
              IN NO EVENT WILL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR
              THE SERVICE EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO SENTINEL IN THE TWELVE MONTHS PRIOR TO THE
              EVENT GIVING RISE TO LIABILITY, OR (B) ONE HUNDRED US DOLLARS ($100).
            </p>
            <p>
              Some jurisdictions do not allow exclusion of implied warranties or limitation of liability for incidental
              or consequential damages, so the above limitations may not apply to you.
            </p>
          </Section>

          <Section title="11. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless {COMPANY} and its officers, directors, employees, and
              agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable
              attorneys&apos; fees) arising out of or in any way connected with: (a) your access to or use of the
              Service; (b) your User Content; (c) your violation of these Terms; or (d) your violation of any
              third-party rights.
            </p>
          </Section>

          <Section title="12. Governing Law and Dispute Resolution">
            <p>
              These Terms are governed by the laws of the State of California, United States, without regard to its
              conflict of law provisions. You and Sentinel agree to submit to the personal jurisdiction of the state
              and federal courts located in San Francisco County, California for the resolution of any disputes.
            </p>
            <p>
              Before filing any formal legal claim, you agree to first contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>{' '}
              and attempt to resolve the dispute informally for at least 30 days.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We reserve the right to modify these Terms at any time. We will provide at least 14 days&apos; notice
              of material changes by posting the updated Terms on this page and, where appropriate, notifying you by
              email. The updated Terms will include a new effective date.
            </p>
            <p>
              Your continued use of the Service after the effective date of any changes constitutes your acceptance of
              the new Terms. If you do not agree, you must stop using the Service before the changes take effect.
            </p>
          </Section>

          <Section title="14. Miscellaneous">
            <p>
              <span className="font-semibold text-text-main">Entire agreement:</span> These Terms, together with our
              Privacy Policy, constitute the entire agreement between you and Sentinel regarding the Service and
              supersede all prior agreements.
            </p>
            <p>
              <span className="font-semibold text-text-main">Severability:</span> If any provision of these Terms is
              found to be unenforceable, that provision will be modified to the minimum extent necessary to make it
              enforceable, and the remaining provisions will remain in full force.
            </p>
            <p>
              <span className="font-semibold text-text-main">Waiver:</span> Our failure to enforce any right or
              provision of these Terms will not be considered a waiver of those rights.
            </p>
            <p>
              <span className="font-semibold text-text-main">Assignment:</span> You may not assign or transfer these
              Terms or your rights under them without our prior written consent. We may freely assign our rights and
              obligations.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p>Questions about these Terms should be directed to:</p>
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
