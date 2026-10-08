import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { CTA } from "@/components/brand/CTA";
import { RingMarker } from "@/components/brand/RingMarker";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      {
        title: "Let's Have the Conversation That Matters | Contact Rhea Bulsara | RheAligned",
      },
      {
        name: "description",
        content:
          "Book a free 30-minute discovery call with executive coach Rhea Bulsara. No obligation · Virtual, any time zone. Or discuss an organizational engagement.",
      },
      {
        property: "og:title",
        content: "Let's Have the Conversation That Matters | Contact RheAligned Coaching",
      },
      {
        property: "og:description",
        content:
          "For individuals: book a free 30-minute discovery call. For organizations: discuss how coaching shifts leadership culture.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const faqs = [
  {
    q: "What is coaching, and how is it different from therapy or consulting?",
    a: "Coaching is a forward-looking partnership. We focus on the present and the future, identifying goals, challenging limiting beliefs and building frameworks you can act on. Therapy often explores the past in order to heal. Coaching is about building the future you want. And unlike consulting, I don't hand you the answers. I help you find and own them.",
  },
  {
    q: "Who is coaching for?",
    a: "Senior and globally mobile leaders, founders, and high-potential professionals who know what they need to do but can't make it stick. Leaders who feel their edge slipping under pressure. Entrepreneurs navigating high complexity.",
  },
  {
    q: "I'm already very successful. Will coaching make me look weak?",
    a: "The most effective leaders are often the most coached. Engaging a coach is a signal of strength, self-awareness, and a commitment to operating at your highest level. It's not about fixing a weakness; it's about optimizing your cognitive edge.",
  },
  {
    q: "We have an internal L&D program. Why should we hire an external coach?",
    a: "An external coach provides a confidential space with no internal agenda. Leaders can be more honest, challenge assumptions more freely, and work on the internal operating system in a way that isn't always possible with an internal stakeholder.",
  },
  {
    q: "How long does coaching take?",
    a: "It depends on your goals. Some clients get what they need in 4 to 6 sessions on a specific transition or challenge. The Untangling Session is a focused 1 to 2 session intervention when you need immediate clarity.",
  },
  {
    q: "Do you work virtually or in person?",
    a: "Both. I'm based in Hong Kong and work virtually with leaders across all global time zones (UK, USA, UAE, India, HK). In-person engagements in Hong Kong are available upon request.",
  },
  {
    q: "What's the investment?",
    a: "Individual packages range from HK$8,000 to HK$12,000 depending on scope (4 to 6 sessions). The Untangling Session is HK$1,500 to HK$3,000. Organizational engagements are customized to your team's specific scope.",
  },
  {
    q: "What languages do you coach in?",
    a: "English and Hindi.",
  },
];

const directDetails = [
  { label: "Email", value: "rhea@rhealigned.com", href: "mailto:rhea@rhealigned.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rheacoaching",
    href: "https://linkedin.com/in/rheacoaching",
  },
  {
    label: "Instagram",
    value: "@rhealign.coaching",
    href: "https://instagram.com/rhealign.coaching",
  },
  { label: "Base", value: "Hong Kong · Virtual Global Practice" },
];

function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="overflow-hidden rounded-xl border border-hairline bg-card shadow-sm">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li
            key={f.q}
            className="border-b border-hairline last:border-b-0"
            style={{
              background: isOpen
                ? "color-mix(in oklab, var(--primary) 4%, transparent)"
                : undefined,
            }}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-4 px-6 py-5 text-left transition-colors hover:bg-sand/40"
              >
                <span className="mt-1 text-xs font-bold text-primary tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[15.5px] font-semibold leading-snug tracking-tight text-foreground">
                  {f.q}
                </span>
                <span className="text-primary text-lg font-light leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen && (
              <div className="px-6 pb-6 pl-12 text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Individual Leader",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/8 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl">
          ✓
        </div>
        <h3 className="mt-4 text-xl font-bold tracking-tight text-foreground">
          Thank you, {formData.name || "there"}!
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your note has been delivered. Rhea will review your details and respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({ name: "", email: "", role: "Individual Leader", message: "" });
          }}
          className="mt-6 text-xs font-semibold text-primary underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

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
          Name
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
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@organization.com"
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div>
        <label
          htmlFor="contact-role"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          I am a:
        </label>
        <select
          id="contact-role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        >
          <option value="Individual Leader">Individual Leader</option>
          <option value="Founder">Founder</option>
          <option value="Organization">Organization</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          What would you like to discuss?
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Share a brief overview of your current context or goals..."
          className="mt-2 w-full rounded-lg border border-hairline bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-deep py-3 text-sm font-semibold tracking-wide text-deep-foreground transition-all duration-300 hover:bg-primary disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
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
        <span>Instant confirmation with Google Meet / Zoom invite</span>
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
  const steps = [
    {
      num: "01",
      title: "You book a call at a time that works for you.",
      desc: "Pick a slot that suits your schedule across any time zone.",
    },
    {
      num: "02",
      title: "We have a 30-minute conversation about where you are and what's getting in the way.",
      desc: "A confidential discussion focused on your real cognitive roadblocks.",
    },
    {
      num: "03",
      title:
        "If coaching is the right next step, we'll discuss how to work together. If it's not, I'll tell you honestly.",
      desc: "Zero high-pressure sales pitch. Just straight talk about fit and impact.",
    },
  ];

  return (
    <section className="section-y border-b border-hairline bg-sand/30">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">The Process</span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
            What Happens Next?
          </h2>
          <p className="mt-3 max-w-[50ch] text-[15px] leading-relaxed text-muted-foreground">
            Clear expectations right from the start.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08} className="panel bg-card p-7 shadow-sm">
              <span className="text-xs font-bold tracking-[0.18em] text-primary tabular-nums">
                STEP {s.num}
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      {/* 5.1 Contact Page Structure */}
      <section className="border-b border-hairline bg-gradient-to-b from-background via-background to-sand/20">
        <div className="shell pb-16 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 max-w-[20ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Let's Have the Conversation That Matters
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 grid max-w-3xl gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-hairline bg-card p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  For Individuals
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Book a free 30-minute discovery call. No obligation. Just a conversation about
                  where you are and where you want to go.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-card p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  For Organizations
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Let's discuss how coaching can shift your leadership culture, support retention,
                  and build performance that lasts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5.2 Contact Form & 5.3 Booking Calendar */}
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
                  Have a question or looking for an organizational quote?
                </p>
              </div>
              <ContactForm />

              {/* Direct Details Card */}
              <div className="rounded-xl border border-hairline bg-sand/30 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Direct Channels
                </h4>
                <div className="mt-3 grid gap-3 text-xs sm:grid-cols-2">
                  {directDetails.map((d) => (
                    <div key={d.label}>
                      <span className="text-muted-foreground">{d.label}: </span>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="font-semibold text-foreground hover:text-primary"
                        >
                          {d.value}
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

      {/* 5.4 What Happens Next */}
      <WhatHappensNext />

      {/* FAQs */}
      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <Reveal>
            <span className="eyebrow">Clarifications</span>
            <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2.1rem)] font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Everything you need to know about working with Rhea.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
