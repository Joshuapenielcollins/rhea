import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { CTA, CTAWithMicro } from "@/components/brand/CTA";
import { RingMarker } from "@/components/brand/RingMarker";
import { Arc } from "@/components/brand/Arc";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      {
        title: "Executive Coaching and Leadership Development | RheAligned",
      },
      {
        name: "description",
        content:
          "Executive coaching and leadership development grounded in the RheAligned Method. For individual leaders, founders, and forward-thinking organisations in the UK, UAE, India, and Hong Kong.",
      },
      {
        property: "og:title",
        content: "Executive Coaching and Leadership Development | RheAligned",
      },
      {
        property: "og:description",
        content:
          "I partner with ambitious individuals and forward-thinking organisations globally to build clarity, resilience, and influence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://rhealigned.com/services" },
      { property: "og:image", content: "https://rhealigned.com/og-image.jpg" },
      { property: "og:image:secure_url", content: "https://rhealigned.com/og-image.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "RheAligned — Executive Coaching & Services",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Executive Coaching and Leadership Development | RheAligned",
      },
      {
        name: "twitter:description",
        content:
          "I partner with ambitious individuals and forward-thinking organisations globally to build clarity, resilience, and influence.",
      },
      { name: "twitter:image", content: "https://rhealigned.com/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://rhealigned.com/services" }],
  }),
});

const tiers = [
  {
    tier: "Tier 1",
    name: "The Untangling Session",
    tagline: "A single 90-minute session for a specific decision, conversation or stuck point.",
    bestFor:
      "You have one situation in front of you and you want to think it through properly before it moves again.",
    included: [
      "Pre-session reflection prompt",
      "90-minute session (video)",
      "One-page summary of what we named and what you'll do next",
    ],
    investment: "HK$1,500 (1 session)",
  },
  {
    tier: "Tier 2",
    name: "The RheAligned Programme",
    tagline:
      "Six sessions over three to six months. Structured work on the pattern getting in the way, using the RheAligned Method.",
    bestFor:
      "Senior leaders, high-performing professionals and founders who want a repeatable way of responding under pressure, not a one-off insight.",
    included: [
      "Six 60-minute sessions (video)",
      "Debrief on the pattern most likely to be getting in the way",
      "Between-session tools drawn from the PAUSE Framework, the 3-Stage Interruption and the Expectation Scale",
      "Email access between sessions",
      "Final review and next-steps plan",
    ],
    investment: "HK$8,000 (6 sessions)",
    featured: true,
  },
  {
    tier: "Tier 3",
    name: "Executive Partnership",
    tagline:
      "Twelve sessions over six to twelve months, with access between sessions. For leaders navigating a sustained period of pressure, transition or scope change.",
    bestFor:
      "Senior leaders stepping into bigger scope, board exposure or a high-stakes transition; founders leading through a growth phase.",
    included: [
      "Twelve 60-minute sessions (video)",
      "Debrief on the pattern most likely to be getting in the way",
      "Between-session access for time-sensitive decisions",
      "Preparation support for board, investor and high-stakes conversations",
      "Mid-point and final reviews",
      "Optional stakeholder input, with your consent",
    ],
    investment: "Tailored to scope (12 sessions / upon consultation)",
  },
];

const orgServices = [
  {
    name: "Executive Coaching",
    lede: "One-on-one coaching for your leaders to strengthen decision-making, presence, and influence.",
    expertise:
      "Senior executive 1:1 advisory, transition coaching, executive presence & stakeholder influence, high-stakes decision-making under pressure.",
    gains: [
      "Faster, sharper strategic decisions",
      "Stronger stakeholder navigation and influence",
      "Lower risk of disengagement at senior levels",
    ],
  },
  {
    name: "Leadership Development Programmes",
    lede: "Build a consistent coaching mindset and a common leadership language across your pipeline.",
    expertise:
      "Cohort leadership workshops, manager-as-coach training, unified leadership culture, and scalable high-performing career acceleration.",
    gains: [
      "A unified leadership approach and shared vocabulary",
      "Leaders who coach and develop others with growth mindset",
      "Improved retention and velocity of high-performing talent",
    ],
  },
  {
    name: "Talent Management & L&D Consulting",
    lede: "Leverage 14+ years of global HR leadership to transform your talent strategy.",
    expertise:
      "Talent management strategy, L&D programme design, global mobility platforms, organisational transformation, and competency architecture.",
    gains: [
      "High-impact talent strategies aligned with commercial goals",
      "Seamless cross-border mobility and succession frameworks",
      "Robust competency architecture for emerging leadership",
    ],
  },
];

const faqs = [
  {
    q: "What is coaching, and how is it different from therapy or consulting?",
    a: "Coaching is a forward-looking partnership. We focus on the present and the future, identifying goals, challenging limiting beliefs and building frameworks you can act on. Therapy often explores the past in order to heal. Coaching is about building the future you want. And unlike consulting, I don't hand you the answers. I help you find and own them.",
  },
  {
    q: "Who is coaching for?",
    a: "Senior and globally mobile leaders, founders, and high-performing professionals who know what they need to do but can't make it stick. Leaders who feel their edge slipping under pressure. Entrepreneurs navigating high complexity.",
  },
  {
    q: "I'm already very successful. Will coaching make me look weak?",
    a: "The most effective leaders are often the most coached. Engaging a coach is a signal of strength, self-awareness, and a commitment to operating at your highest level. It's not about fixing a weakness; it's about optimizing your cognitive edge.",
  },
  {
    q: "We have an internal L&D program. Why should we hire an external coach?",
    a: "An external coach provides a confidential space with no internal agenda. Leaders can be more honest, challenge assumptions more freely, and work on underlying patterns in a way that isn't always possible with an internal stakeholder.",
  },
  {
    q: "How long does coaching take?",
    a: "It depends on your goals. Some clients get what they need in 6 sessions on a specific transition or challenge. The Untangling Session is a focused 90-minute intervention when you need immediate clarity.",
  },
  {
    q: "Do you work virtually or in person?",
    a: "Both. I'm based in Hong Kong and work virtually with leaders across all global time zones (UK, UAE, India, Hong Kong). In-person engagements in Hong Kong are available upon request.",
  },
  {
    q: "What's the investment?",
    a: "Tier 1 (The Untangling Session) is HK$1,500 for a 90-minute session. Tier 2 (The RheAligned Programme) is HK$8,000 for 6 sessions over three to six months. Tier 3 (Executive Partnership, 12 sessions) and organisational leadership programmes are tailored to your scope and objectives. Enquire during your discovery call.",
  },
  {
    q: "What languages do you coach in?",
    a: "English and Hindi.",
  },
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

function Services() {
  const calendlyUrl = "https://calendly.com/rhea-rhealigned/discovery-call-with-rhea";

  return (
    <>
      {/* 4.1 Page Introduction */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/20">
        <Arc
          core={false}
          className="pointer-events-none absolute -right-40 top-1/2 hidden h-[32rem] w-[32rem] -translate-y-1/2 opacity-30 lg:block"
        />
        <div className="shell relative pb-16 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Services & Programmes</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Executive Coaching and Leadership Development
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 max-w-3xl space-y-4 text-[16px] leading-relaxed text-muted-foreground">
              <p>
                I partner with ambitious individuals and forward-thinking organisations globally to
                build clarity, resilience, and influence. My work is grounded in the RheAligned
                Method, a cognitive systems approach that helps high-performers close the gap
                between knowing and doing.
              </p>
              <p>
                My primary work is with senior and globally mobile leaders in large organisations across the UK, UAE, India and Hong Kong. I also work with founders, high-performing professionals, and organisations building leadership pipelines.
              </p>
              <p className="font-semibold text-foreground">
                Whether you are an individual leader, a founder, or an organisation, the work starts
                with a conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4.2 Individual Coaching Section (3 Tiers) */}
      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Individual Coaching</span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
              Three Tiers of Individual Work
            </h2>
            <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
              Structured engagements designed to install lasting mental clarity, interrupt
              second-guessing, and build decisive presence under pressure.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {tiers.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 0.08}
                className={`panel flex flex-col justify-between p-8 transition-all duration-300 ${
                  t.featured
                    ? "border-primary/40 bg-card shadow-lg ring-1 ring-primary/20"
                    : "bg-card shadow-sm hover:border-primary/30"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                      {t.tier}
                    </span>
                    <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-foreground">
                      {t.investment.split(" ")[0]}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                    {t.name}
                  </h3>

                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/85 font-medium">
                    {t.tagline}
                  </p>

                  <div className="mt-5 rounded-lg border border-hairline/80 bg-sand/30 p-3.5 text-xs leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Best for:</strong> {t.bestFor}
                  </div>

                  <div className="mt-6 border-t border-hairline pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      What's included:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {t.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground">
                          <RingMarker size={14} className="mt-1 shrink-0" active />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-hairline pt-6">
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Investment
                    </p>
                    <p className="mt-1 text-base font-bold text-foreground">{t.investment}</p>
                  </div>
                  <CTAWithMicro
                    href={calendlyUrl}
                    micro="30 minutes · No obligation · Virtual"
                    className="w-full"
                    ctaClassName="w-full justify-center text-center text-xs font-semibold py-3 px-4"
                  >
                    Book a free discovery call
                  </CTAWithMicro>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Practical details block */}
          <Reveal delay={0.25} className="mt-8 rounded-xl border border-hairline bg-sand/40 p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">The practical details:</strong>{" "}
              Sessions are 60 minutes (90 for the Untangling Session), by video. Between sessions you'll have written prompts and tools. Full payment, rescheduling and cancellation terms are set out in the coaching agreement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4.3 Organisational Services Section */}
      <section id="organisations" className="section-y border-b border-hairline bg-deep text-deep-foreground">
        <div className="shell">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Enterprise & Pipeline
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight text-white">
              For Organisations
            </h2>
            <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-deep-foreground/90">
              For organisations building leadership that stays clear under pressure.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3 items-stretch">
            {orgServices.map((o, i) => (
              <Reveal
                key={o.name}
                delay={i * 0.08}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-7 backdrop-blur sm:p-8"
              >
                <div className="flex flex-1 flex-col">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white min-h-[3.25rem] flex items-start">
                      {o.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-deep-foreground/90 min-h-[4rem]">
                      {o.lede}
                    </p>

                    <div className="mt-5 min-h-[92px] rounded-lg bg-black/25 p-3.5 text-xs leading-relaxed text-deep-foreground/80 flex items-start">
                      <p>
                        <strong className="text-white">Expertise includes:</strong> {o.expertise}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col justify-between border-t border-white/15 pt-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
                        What your organisation gains:
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {o.gains.map((g) => (
                          <li
                            key={g}
                            className="flex items-start gap-2.5 text-xs text-deep-foreground/90"
                          >
                            <span className="mt-0.5 text-teal-300 font-bold">✓</span>
                            <span className="leading-relaxed">{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/15 pt-6">
                  <CTAWithMicro
                    href={calendlyUrl}
                    tone="light"
                    align="center"
                    className="w-full text-center"
                    ctaClassName="w-full justify-center text-center text-xs sm:text-[13.5px] font-semibold py-3 px-4"
                    microClassName="text-white/80 text-center"
                    micro="Customised to your needs · Virtual or in-person"
                  >
                    Discuss an Organisational Engagement
                  </CTAWithMicro>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs on Services */}
      <section id="faq" className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <Reveal>
            <span className="eyebrow">Clarifications</span>
            <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2.1rem)] font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Everything you need to know about coaching formats, investment, and how we work together.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      {/* S-07 Closing CTA */}
      <section className="py-20 bg-sand/30">
        <div className="shell text-center max-w-3xl">
          <Reveal>
            <h2 className="text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-tight text-foreground">
              Not sure which is right for you?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              Book a 30-minute discovery call. No pitch: we'll clarify what's happening and agree whether there's a useful next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CTAWithMicro
                href={calendlyUrl}
                micro="30 minutes · No obligation · Virtual"
                align="center"
              >
                Book a free discovery call
              </CTAWithMicro>
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-6 py-3 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <span>Send a message</span>
                <span className="text-primary transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
