import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | RheAligned",
      },
      {
        name: "description",
        content:
          "Privacy Policy for RheAligned. Learn how Rhea Bulsara Sidhva collects, uses, and protects your personal data in accordance with HK PDPO and UK GDPR.",
      },
      { property: "og:title", content: "Privacy Policy | RheAligned" },
      {
        property: "og:description",
        content:
          "How RheAligned handles your personal data, confidentiality, cookies, and your privacy rights.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rhealigned.com/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "https://rhealigned.com/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/25">
        <div className="shell pb-12 pt-14 lg:pt-20 max-w-4xl">
          <Reveal>
            <span className="eyebrow">Legal & Data Protection</span>
            <h1 className="mt-4 text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.12] tracking-tight text-foreground">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated: 27 October 2026 | Effective immediately
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="shell max-w-4xl py-14 sm:py-16">
        <div className="space-y-12 text-[15.5px] leading-[1.8] text-foreground/90">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              1. Who I am
            </h2>
            <p>
              I am Rhea Bulsara Sidhva, trading as RheAligned. I am an executive and leadership
              coach based in Hong Kong.
            </p>
            <p>
              I am the data controller for the personal data collected through this website (
              <a href="https://www.rhealigned.com" className="text-primary hover:underline">
                www.rhealigned.com
              </a>
              ) and in the course of providing coaching services.
            </p>
            <p>
              If you have questions about this policy or how I handle your data, you can email me
              at{" "}
              <a href="mailto:rhea@rhealigned.com" className="text-primary hover:underline">
                rhea@rhealigned.com
              </a>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              2. What this policy covers
            </h2>
            <p>
              This policy explains how I collect, use, store and protect your personal data when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visit this website.</li>
              <li>Book a discovery call.</li>
              <li>Submit an enquiry through the contact form.</li>
              <li>Sign up for updates or resources.</li>
              <li>Engage me for coaching or other professional services.</li>
            </ul>
            <p>
              I take your privacy seriously and handle your data in line with the Hong Kong Personal
              Data (Privacy) Ordinance (PDPO) and, where applicable, the UK General Data Protection
              Regulation (UK GDPR) and EU GDPR.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              3. The personal data I collect
            </h2>
            <p>I may collect and process the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact details:</strong> your name, email address, phone number and job
                title or organisation.
              </li>
              <li>
                <strong>Enquiry information:</strong> anything you share when you get in touch,
                including what you are looking for from coaching and your professional context.
              </li>
              <li>
                <strong>Booking details:</strong> your preferred times, time zone and notes
                submitted when scheduling a discovery call through Calendly.
              </li>
              <li>
                <strong>Coaching records:</strong> notes from our conversations, goals, session
                reflections, and agreed actions. (These are kept separately and treated with strict
                confidentiality.)
              </li>
              <li>
                <strong>Payment and billing information:</strong> invoices, bank transfer receipts
                and billing names. (I do not use or store credit cards on this website; all coaching engagements are billed directly via bank transfer or direct corporate invoice.)
              </li>
              <li>
                <strong>Technical and website usage data:</strong> your IP address, browser type,
                pages visited and how you interact with the site, collected through privacy-focused
                analytics and essential cookies.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              4. How I collect it
            </h2>
            <p>I collect personal data directly from you when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill in the contact form on this website.</li>
              <li>Book a call through Calendly.</li>
              <li>Send me an email or message.</li>
              <li>Share information during coaching sessions or in preparation for them.</li>
              <li>Sign up for my newsletter or insights updates.</li>
            </ul>
            <p>
              I may also collect technical data automatically as you navigate the website, through
              cookies and server logs.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              5. Why I use your data
            </h2>
            <p>I use your personal data to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to enquiries and arrange discovery calls.</li>
              <li>Provide coaching and related professional services.</li>
              <li>Manage scheduling, invoices and payments.</li>
              <li>
                Send updates, insights or newsletters, but only where you have explicitly opted in.
              </li>
              <li>Improve this website and ensure it runs smoothly and securely.</li>
              <li>Comply with legal, accounting and regulatory requirements.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              6. Legal bases for processing (UK and EU visitors)
            </h2>
            <p>
              Where UK GDPR or EU GDPR applies, I rely on the following lawful bases to process your
              personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Consent:</strong> where you have given clear permission (for example,
                subscribing to updates or agreeing to specific data sharing).
              </li>
              <li>
                <strong>Legitimate interests:</strong> responding to enquiries, managing my
                practice, and improving services, where these interests do not override your
                fundamental rights.
              </li>
              <li>
                <strong>Contract:</strong> fulfilling coaching agreements or preparing to enter into
                one with you.
              </li>
              <li>
                <strong>Legal obligation:</strong> keeping accounting, tax, and statutory business
                records as required by applicable law.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              7. Who I share it with
            </h2>
            <p>
              I do not sell, rent, or trade your personal data. I share it only with trusted service
              providers who help me run my coaching practice, and only as necessary. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Calendly, for scheduling discovery calls.</li>
              <li>Custom-coded enquiry forms and Resend backend delivery infrastructure for securely processing message requests.</li>
              <li>Microsoft 365 (Exchange) for business email communication and inbox correspondence.</li>
              <li>Professional banking services for direct invoice settlements (no third-party card payment gateways).</li>
              <li>Vercel and cloud CDN hosting infrastructure for secure website delivery.</li>
            </ul>
            <p>
              These providers act under strict confidentiality and security obligations. I may also
              disclose data where required by law, court order, or to protect my legal rights.
            </p>
            <p>
              If you are a corporate coaching client and we agree to involve a stakeholder (such as
              your HR or talent team), I will only share progress summaries that you have explicitly
              reviewed and agreed to share in writing.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              8. International data transfers
            </h2>
            <p>
              I am based in Hong Kong. Some of the digital tools and cloud providers I use store or
              process data outside Hong Kong, including in the United Kingdom, the European Union,
              and global cloud infrastructure regions.
            </p>
            <p>
              Where personal data is transferred internationally, I take reasonable steps to ensure
              it is treated securely. Where UK GDPR or EU GDPR applies, transfers rely on
              appropriate safeguards, such as Standard Contractual Clauses or recognised adequacy
              decisions.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              9. How long I keep your data
            </h2>
            <p>
              I keep personal data only for as long as needed for the purposes outlined in this
              policy:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Enquiries that do not lead to coaching:</strong> 24 months from the last
                contact.
              </li>
              <li>
                <strong>Coaching records:</strong> 7 years from the end of the engagement, to
                support professional standards and continuity.
              </li>
              <li>
                <strong>Financial and tax records:</strong> 7 years, as required by statutory law.
              </li>
              <li>
                <strong>Website analytics:</strong> up to 26 months.
              </li>
            </ul>
            <p>
              When data reaches the end of its retention period, it is securely deleted or
              anonymised.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              10. Your rights
            </h2>
            <p>Depending on where you are based, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Access:</strong> request confirmation of the data I hold about you and
                receive a copy.
              </li>
              <li>
                <strong>Correction:</strong> request correction of inaccurate or incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> request erasure of your data where there is no legal
                obligation to retain it.
              </li>
              <li>
                <strong>Restriction:</strong> request that I limit how your data is used.
              </li>
              <li>
                <strong>Objection:</strong> object to processing based on legitimate interests or
                direct marketing.
              </li>
              <li>
                <strong>Data portability:</strong> request your data in a structured, commonly used
                format.
              </li>
              <li>
                <strong>Withdrawal of consent:</strong> withdraw consent at any time without
                affecting past processing.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email me at{" "}
              <a href="mailto:rhea@rhealigned.com" className="text-primary hover:underline">
                rhea@rhealigned.com
              </a>
              . I will respond promptly, within one month or within the timeframe specified under
              the PDPO.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              11. Cookies and analytics
            </h2>
            <p>This website uses cookies and similar technologies:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential cookies:</strong> necessary for core website functions, security,
                and session handling.
              </li>
              <li>
                <strong>Analytics cookies:</strong> used to understand traffic patterns and visitor
                engagement to improve website performance.
              </li>
            </ul>
            <p>
              I do not use third-party advertising cookies, and I never sell data to advertising
              networks. You can manage or disable cookies at any time via your browser settings.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              12. Marketing and newsletters
            </h2>
            <p>
              I only send emails, articles, or newsletters if you have explicitly chosen to receive
              them. You can unsubscribe at any time using the link in any email, or by emailing{" "}
              <a href="mailto:rhea@rhealigned.com" className="text-primary hover:underline">
                rhea@rhealigned.com
              </a>
              .
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              13. Confidentiality and security
            </h2>
            <p>
              Executive coaching conversations are strictly confidential. Coaching notes are stored
              separately from website administrative data, accessible solely by me.
            </p>
            <p>
              I apply modern technical and organisational measures to safeguard personal data,
              including two-factor authentication, encrypted storage, and secure transmission (HTTPS).
            </p>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              14. Children
            </h2>
            <p>
              This website and my executive coaching services are intended for adults. I do not
              knowingly collect personal data from anyone under the age of 18.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              15. Changes to this policy
            </h2>
            <p>
              I may update this Privacy Policy periodically. Any revisions will be published here
              with an updated revision date.
            </p>
          </section>

          {/* Section 16 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              16. How to contact me or complain
            </h2>
            <p>
              If you have any questions or concerns regarding this policy, please email{" "}
              <a href="mailto:rhea@rhealigned.com" className="text-primary hover:underline">
                rhea@rhealigned.com
              </a>
              .
            </p>
            <p>
              If you feel an issue has not been satisfactorily addressed, you have the right to lodge
              a complaint with your data protection authority:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hong Kong:</strong> Office of the Privacy Commissioner for Personal Data
                (PCPD):{" "}
                <a
                  href="https://www.pcpd.org.hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.pcpd.org.hk
                </a>
              </li>
              <li>
                <strong>United Kingdom:</strong> Information Commissioner's Office (ICO):{" "}
                <a
                  href="https://www.ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.ico.org.uk
                </a>
              </li>
              <li>
                <strong>European Union:</strong> Your national or regional supervisory authority.
              </li>
            </ul>
          </section>

          {/* Closing Brand Sign-off */}
          <div className="border-t border-hairline pt-10 text-center">
            <p className="text-sm font-semibold text-foreground">
              RheAligned | Clarity. Confidence. Influence.
            </p>
            <div className="mt-4">
              <Link to="/contact" className="text-xs font-semibold text-primary hover:underline">
                Return to Contact →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </article>
  );
}
