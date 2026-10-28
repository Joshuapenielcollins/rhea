import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { Arc } from "@/components/brand/Arc";
import rheaPortrait from "@/assets/rhea-portrait.jpg";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      {
        title: "Contact Rhea Bulsara Sidhva | RheAligned",
      },
      {
        name: "description",
        content:
          "Book a free 30-minute discovery call with executive coach Rhea Bulsara Sidhva. Virtual across UK, UAE, India, and Hong Kong time zones. Or send a message directly.",
      },
      {
        property: "og:title",
        content: "Contact Rhea Bulsara Sidhva | RheAligned",
      },
      {
        property: "og:description",
        content:
          "For individuals: book a free 30-minute discovery call. For organisations: discuss how coaching shifts leadership culture.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const directDetails = [
  { label: "Email", value: "rhea@rhealigned.com", href: "mailto:rhea@rhealigned.com" },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/rhea-bulsara-sidhva-38070a44/",
  },
  { label: "Base", value: "Hong Kong · Virtual Global Practice" },
];

function ContactForm() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "submitting">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    situation: "",
    preferredTime: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept the privacy policy consent to proceed.");
      return;
    }
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Failed to send your message. Please try again or email directly.");
      }

      // Success: redirect to thank you page
      navigate({ to: "/thank-you" });
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("idle");
      setErrorMessage((err as Error)?.message || "Something went wrong sending your message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-hairline bg-card p-6 md:p-8 shadow-sm"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Name <span className="text-primary">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Email <span className="text-primary">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@organisation.com"
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-role"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Role or context <span className="text-xs normal-case text-muted-foreground/70">(optional)</span>
        </label>
        <input
          id="contact-role"
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          placeholder="e.g. Senior leader, founder, HR & L&D"
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-situation"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          What's happening? <span className="text-primary">*</span>
        </label>
        <textarea
          id="contact-situation"
          rows={4}
          required
          value={formData.situation}
          onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
          placeholder="Tell me what situation you are navigating or what you would like to explore..."
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-time"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Preferred call time <span className="text-xs normal-case text-muted-foreground/70">(optional)</span>
        </label>
        <input
          id="contact-time"
          type="text"
          value={formData.preferredTime}
          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
          placeholder="e.g. Mornings UK, Afternoons HK, specific days..."
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 pt-2">
        <input
          id="contact-consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-hairline text-primary focus:ring-primary"
        />
        <label htmlFor="contact-consent" className="text-xs leading-relaxed text-muted-foreground">
          I agree to RheAligned using my details to respond to this enquiry.{" "}
          <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
            Privacy Policy
          </Link>
        </label>
      </div>

      {errorMessage && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3.5 text-xs leading-relaxed text-red-800">
          <p className="font-semibold">Unable to send message:</p>
          <p className="mt-1">{errorMessage}</p>
          <p className="mt-2 text-[11px] text-red-600">
            You can also email Rhea directly at{" "}
            <a href="mailto:rhea@rhealigned.com" className="font-medium underline">
              rhea@rhealigned.com
            </a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-deep py-3 text-sm font-semibold tracking-wide text-deep-foreground transition-all duration-300 hover:bg-primary disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {/* Privacy note */}
      <p className="text-center text-[11.5px] leading-relaxed text-muted-foreground/80 pt-1">
        I use your details only to respond to your enquiry. I don't add you to a newsletter without your consent.{" "}
        <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
          Privacy Policy
        </Link>
      </p>
    </form>
  );
}

function BookingCalendar() {
  const calendlyUrl = "https://calendly.com/rhea-rhealigned/discovery-call-with-rhea";

  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-card p-6 md:p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-5">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            Book a Free 30-Minute Discovery Call
          </h3>
          <p className="mt-1 text-xs font-medium text-muted-foreground">
            No obligation · Virtual, any time zone
          </p>
        </div>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <span>Open Calendly Direct</span>
          <span>↗</span>
        </a>
      </div>

      <div className="mt-6">
        <div className="relative min-h-[660px] w-full overflow-hidden rounded-xl border border-hairline bg-background">
          <iframe
            src={`${calendlyUrl}?embed_domain=${typeof window !== "undefined" ? window.location.hostname : ""}&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1`}
            width="100%"
            height="660"
            frameBorder="0"
            title="Book a Discovery Call with Rhea"
            className="w-full h-[660px] border-0"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
        <span>Instant confirmation with video invite</span>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline"
        >
          Trouble loading? Open calendar in a new tab →
        </a>
      </div>
    </div>
  );
}

function WhatHappensNext() {
  return (
    <section className="section-y border-b border-hairline bg-sand/30">
      <div className="shell max-w-4xl">
        <Reveal>
          <span className="eyebrow">Clear Expectations</span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
            What Happens Next
          </h2>
          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-foreground/85">
            <p className="font-semibold text-foreground">
              Prefer email?{" "}
              <a href="mailto:rhea@rhealigned.com" className="text-primary underline">
                rhea@rhealigned.com
              </a>
            </p>
            <p>
              I'll reply within one to two working days. Discovery calls are 30 minutes, no pitch. We'll use the time to clarify what's happening, test fit, and agree whether there's a useful next step.
            </p>
            <p>
              If you're an HR or L&D team exploring a programme, mention it in your message and I'll send the relevant programme outline before we speak.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      {/* 5.1 Contact Page Introduction */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/20">
        <Arc
          core={false}
          className="pointer-events-none absolute -right-32 top-1/2 hidden h-[32rem] w-[32rem] -translate-y-1/2 opacity-25 lg:block"
        />
        <div className="shell relative pb-16 pt-14 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <Reveal>
                <span className="eyebrow">Get In Touch</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-4 max-w-[20ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
                  Let's Have the Conversation That Matters
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-hairline bg-card p-6 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      For Individuals
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Book a free 30-minute discovery call. No obligation. Just a conversation about
                      where you are and where you want to go.
                    </p>
                  </div>

                  <div className="rounded-xl border border-hairline bg-card p-6 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      For Organisations
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Let's discuss how coaching can shift your leadership culture, support retention,
                      and build performance that lasts.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Rhea Portrait Card */}
            <Reveal delay={0.12} className="relative hidden lg:block">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-hairline bg-card p-3 shadow-lg">
                <div className="aspect-square overflow-hidden rounded-xl bg-sand">
                  <img
                    src={rheaPortrait}
                    alt="Rhea Bulsara Sidhva — Founder & Executive Coach"
                    className="h-full w-full object-cover object-top"
                    width="400"
                    height="400"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-bold text-foreground">Rhea Bulsara Sidhva</p>
                  <p className="text-xs font-medium text-muted-foreground">
                    Founder & Executive Coach · ICF-ACC
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5.2 Contact Form & Booking Calendar */}
      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Booking Calendar Widget */}
          <Reveal>
            <BookingCalendar />
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={0.08}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Have a question or looking for an organisational engagement?
                </p>
              </div>
              <ContactForm />

              {/* Direct Details Card */}
              <div className="rounded-xl border border-hairline bg-sand/30 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Direct Channels
                </h4>
                <div className="mt-4 divide-y divide-hairline/60 text-xs">
                  {directDetails.map((d) => (
                    <div
                      key={d.label}
                      className="flex flex-col gap-1 py-3 first:pt-1 last:pb-1 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <span className="font-medium text-muted-foreground">{d.label}</span>
                      {d.href ? (
                        <a
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-semibold text-foreground transition-colors hover:text-primary inline-flex items-center gap-1.5"
                        >
                          <span>{d.value}</span>
                          {d.href.startsWith("http") && (
                            <span className="text-primary text-[11px]">↗</span>
                          )}
                        </a>
                      ) : (
                        <span className="font-semibold text-foreground">{d.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What Happens Next */}
      <WhatHappensNext />

      {/* C-01 FAQ Link replacing duplicate FAQ */}
      <section className="py-16 bg-card border-b border-hairline">
        <div className="shell text-center max-w-2xl">
          <Reveal>
            <h3 className="text-xl font-bold tracking-tight text-foreground">
              Looking for answers before you book?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The FAQ covers how coaching works, how long it takes, and what it isn't.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                hash="faq"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
              >
                <span>Read the FAQ</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
