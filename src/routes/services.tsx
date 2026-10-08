import { createFileRoute } from "@tanstack/react-router";
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
          "Executive coaching and leadership development grounded in the RheAligned Method. For individual leaders, founders, and forward-thinking organizations globally.",
      },
      {
        property: "og:title",
        content: "Executive Coaching and Leadership Development | RheAligned",
      },
      {
        property: "og:description",
        content:
          "I partner with ambitious individuals and forward-thinking organizations globally to build clarity, resilience, and influence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const individualPrograms = [
  {
    name: "Executive & Leadership Coaching",
    target:
      "For senior leaders and board-level operators navigating complexity, high-stakes decisions, or transition.",
    gains: [
      "Sharper, faster decision-making under pressure",
      "A personal system to interrupt negative mental patterns",
      "The ability to move from reactive to intentional",
    ],
    investment: "HK$8,000 - 12,000 (6 sessions)",
    ctaText: "Book a free 30-minute discovery call",
    ctaMicro: "No obligation · Virtual, any time zone",
  },
  {
    name: "The Implementation Dip Program",
    target: "For leaders and founders who know what to do but can't make it stick.",
    gains: [
      "A map of your personal triggers and patterns",
      "Acceptance of the real, non-linear timeline for change",
      "Your personalized PAUSE framework",
      "A tracking system for real-world application",
    ],
    investment: "HK$8,000 - 10,000 (5 sessions)",
    ctaText: "Book a free 30-minute discovery call",
    ctaMicro: "No obligation · Virtual, any time zone",
  },
  {
    name: "The Internal Operating System",
    target:
      "For professionals and founders dealing with impostor syndrome, persistent self-doubt, or an internal voice that holds them back.",
    gains: [
      "Deep identification of your triggers and recurring patterns",
      "A documented Internal OS",
      "The 3-Stage Interruption method",
      "Clarity on your identity beyond your title",
    ],
    investment: "HK$9,000 - 12,000 (6 sessions)",
    ctaText: "Book a free 30-minute discovery call",
    ctaMicro: "No obligation · Virtual, any time zone",
  },
  {
    name: "Cross-Cultural Clarity",
    target:
      "For leaders moving between or managing across UK, USA, India, UAE, and Hong Kong contexts.",
    gains: [
      "A practical cultural decision-making framework",
      "Stakeholder mapping for your specific cultural context",
      "Understanding of how influence shifts across cultures",
      "Confidence to lead and communicate anywhere",
    ],
    investment: "HK$10,000 - 12,000 (4 sessions)",
    ctaText: "Book a free 30-minute discovery call",
    ctaMicro: "No obligation · Virtual, any time zone",
  },
  {
    name: "The Untangling Session",
    target:
      "For professionals and founders who feel stuck and overwhelmed, and don't know where to start.",
    gains: ["Clarity on where to start", "A practical execution plan", "Direction and momentum"],
    investment: "HK$1,500 - 3,000 (1-2 sessions)",
    ctaText: "Book The Untangling Session",
    ctaMicro: "Focused 90-minute intervention · Virtual or in-person",
  },
];

const orgServices = [
  {
    name: "Executive Coaching",
    lede: "One-on-one coaching for your leaders to strengthen decision-making, presence, and influence.",
    gains: [
      "Faster, sharper strategic decisions",
      "Stronger stakeholder navigation and influence",
      "Reduced burnout and improved retention",
    ],
  },
  {
    name: "Leadership Development Programs",
    lede: "Build a consistent coaching mindset and a common leadership language across your pipeline.",
    gains: [
      "A unified leadership approach and shared vocabulary",
      "Leaders who coach and develop others",
      "A culture of resilience and growth mindset",
      "Improved retention of high-potential talent",
    ],
  },
  {
    name: "Talent Management & L&D Consulting",
    lede: "Leverage 14+ years of global HR leadership to transform your talent strategy.",
    expertise:
      "Talent management strategy, L&D program design, global mobility platform development, organizational transformation, performance management, leadership competency frameworks.",
    gains: [
      "High-impact talent strategies aligned with commercial goals",
      "Seamless cross-border mobility and succession frameworks",
      "Robust competency architecture for emerging leadership",
    ],
  },
];

function Services() {
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
            <span className="eyebrow">Services & Engagements</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Executive Coaching and Leadership Development
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 max-w-3xl space-y-4 text-[16px] leading-relaxed text-muted-foreground">
              <p>
                I partner with ambitious individuals and forward-thinking organizations globally to
                build clarity, resilience, and influence. My work is grounded in the RheAligned
                Method, a cognitive systems approach that helps high-performers close the gap
                between knowing and doing.
              </p>
              <p>
                My primary work is with senior and globally mobile leaders in large organizations. I
                also work with founders, high-potential professionals, and organizations building
                leadership pipelines.
              </p>
              <p className="font-semibold text-foreground">
                Whether you are an individual leader, a founder, or an organization, the work starts
                with a conversation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4.2 Individual Coaching Section */}
      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Offerings</span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
              For Individuals
            </h2>
            <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">
              Tailored one-on-one engagements designed to install lasting mental clarity, interrupt
              second-guessing, and build decisive presence.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {individualPrograms.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 0.06}
                className="panel flex flex-col justify-between bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{p.name}</h3>
                    <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {p.investment.split(" ")[0]}
                    </span>
                  </div>

                  <p className="mt-4 text-[15px] font-medium leading-relaxed text-foreground/80">
                    {p.target}
                  </p>

                  <div className="mt-6 border-t border-hairline pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      What you'll gain:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {p.gains.map((g) => (
                        <li
                          key={g}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <RingMarker size={14} className="mt-1 shrink-0" active />
                          <span className="leading-relaxed">{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-hairline pt-6">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Investment
                      </p>
                      <p className="mt-1 text-base font-bold text-foreground">{p.investment}</p>
                    </div>
                    <CTAWithMicro to="/contact" micro={p.ctaMicro}>
                      {p.ctaText}
                    </CTAWithMicro>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4.3 Organizational Services Section */}
      <section className="section-y border-b border-hairline bg-deep text-deep-foreground">
        <div className="shell">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
              Enterprise & Pipeline
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight text-white">
              For Organizations
            </h2>
            <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-deep-foreground/90">
              For organizations building leadership that stays clear under pressure.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {orgServices.map((o, i) => (
              <Reveal
                key={o.name}
                delay={i * 0.08}
                className="flex flex-col justify-between rounded-xl border border-white/15 bg-white/5 p-8 backdrop-blur"
              >
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">{o.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-deep-foreground/90">{o.lede}</p>

                  {o.expertise && (
                    <div className="mt-5 rounded-lg bg-black/25 p-3.5 text-xs leading-relaxed text-deep-foreground/80">
                      <strong className="text-white">Expertise includes:</strong> {o.expertise}
                    </div>
                  )}

                  <div className="mt-6 border-t border-white/15 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
                      What your organization gains:
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

                <div className="mt-8 border-t border-white/15 pt-6">
                  <CTAWithMicro
                    to="/contact"
                    tone="light"
                    className="w-full"
                    microClassName="text-white/80"
                    micro="Customized to your needs · Virtual or in-person"
                  >
                    Discuss an Organizational Engagement
                  </CTAWithMicro>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-sand/30">
        <div className="shell flex flex-wrap items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Not sure which option is the right fit?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              That's exactly what the first conversation is for. No pressure, just honest
              assessment.
            </p>
          </div>
          <CTAWithMicro to="/contact" micro="No obligation · Virtual, any time zone">
            Book a free 30-minute discovery call
          </CTAWithMicro>
        </div>
      </section>
    </>
  );
}
