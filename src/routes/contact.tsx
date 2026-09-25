import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { CTA } from "@/components/brand/CTA";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Rhea Bulsara | Executive Coaching Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with executive coach Rhea Bulsara. Book a discovery conversation, send an enquiry, or read answers to common coaching questions.",
      },
      { property: "og:title", content: "Contact Rhea Bulsara | Executive Coaching Enquiries" },
      {
        property: "og:description",
        content:
          "Book a discovery conversation with executive coach Rhea Bulsara, or read answers to common coaching questions.",
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
    a: "High performers who know what they need to do but can't make it stick. Leaders who feel their edge slipping under pressure. Entrepreneurs and professionals navigating complexity, transition or cultural change.",
  },
  {
    q: "I'm already very successful. Will coaching make me look weak?",
    a: "The most effective leaders are often the most coached. Engaging a coach is a signal of strength, self-awareness, and a commitment to operating at your highest level. It's not about fixing a weakness; it's about optimizing a strength.",
  },
  {
    q: "We have an internal L&D program. Why should we hire an external coach?",
    a: "An external coach provides a confidential space with no internal agenda. Leaders can be more honest, challenge assumptions more freely, and work on the internal operating system in a way that isn't always possible with an internal stakeholder.",
  },
  {
    q: "How long does coaching take?",
    a: "It depends on your goals. Some clients get what they need in 3 to 4 sessions on a specific challenge. Others engage for 5 to 6 sessions for deeper work. The Untangling Session is a focused 1 to 2 session intervention when you need immediate clarity.",
  },
  {
    q: "Do you work virtually or in person?",
    a: "Both. I'm based in Hong Kong and work virtually with clients across all time zones. In-person sessions in Hong Kong are available by appointment.",
  },
  {
    q: "What's the investment?",
    a: "Individual coaching packages range from HK$8,000 to HK$15,000 depending on program length and depth. The Untangling Session is HK$1,500 to HK$3,000. Corporate programs are customized to your organization's needs.",
  },
  {
    q: "What languages do you coach in?",
    a: "English and Hindi.",
  },
  {
    q: "What industries do you work with?",
    a: "I've worked across retail (Sainsbury's), oil and gas (BP), diversified conglomerates (Tata Group), financial services, technology, education, F&B and professional services. The experience is broad, though the approach is always tailored to the individual.",
  },
  {
    q: "What can I expect from a coaching session?",
    a: "Thoughtful questions rather than answers. Intense listening. A space where you can be completely honest. And the sense that the hour had a point.",
  },
];

const details = [
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
  { label: "Location", value: "Hong Kong" },
  { label: "Availability", value: "Coaching is available virtually across all time zones." },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="overflow-hidden rounded-md border border-hairline bg-card">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li
            key={f.q}
            className="border-b border-hairline last:border-b-0"
            style={{
              background: isOpen ? "color-mix(in oklab, var(--primary) 4%, transparent)" : undefined,
            }}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-4 px-5 py-4 text-left transition-colors hover:bg-sand/60 md:px-7"
              >
                <span className="label-xs mt-[6px] shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="relative mt-1 block h-[18px] w-[18px] shrink-0 rounded-full border transition-all duration-500"
                  style={{
                    borderColor: isOpen ? "var(--primary)" : "var(--hairline)",
                    boxShadow: isOpen
                      ? "0 0 0 5px color-mix(in oklab, var(--primary) 12%, transparent)"
                      : "none",
                  }}
                >
                  <span
                    className="absolute left-1/2 top-1/2 block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500"
                    style={{ background: isOpen ? "var(--primary)" : "var(--hairline)" }}
                  />
                </span>
                <span className="text-[15.5px] font-semibold leading-snug tracking-tight">{f.q}</span>
              </button>
            </h3>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[68ch] px-5 pb-6 pl-[74px] md:px-7 md:pl-[86px] text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function Contact() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="shell grid gap-10 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-28">
          <div>
            <Reveal>
              <span className="eyebrow">Contact</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-[16ch] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.05]">
                Let's have the conversation that matters.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 grid max-w-2xl gap-8 md:grid-cols-2">
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  For individuals: book a discovery call. No obligation. Just a conversation about
                  where you are and where you want to go.
                </p>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  For organizations: let's discuss how coaching can shift your leadership culture,
                  support retention and build performance that lasts.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-wrap gap-4">
                <CTA to="/contact">Book a Conversation</CTA>
                <CTA to="/contact" tone="outline">
                  Discuss an Organizational Engagement
                </CTA>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <dl className="panel divide-y divide-hairline py-2">
              {details.map((d) => (
                <div key={d.label} className="py-4">
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {d.label}
                  </dt>
                  <dd className="mt-2 text-[15px]">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <Reveal>
            <h2 className="text-[clamp(1.45rem,2.4vw,1.95rem)] leading-tight">
              Common questions
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Faq />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep py-16 text-deep-foreground">
        <div className="shell relative text-center">
          <Reveal>
            <p className="mx-auto max-w-[24ch] editorial text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.12]">
              The most effective leaders don't command change. They learn to flow with it.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
