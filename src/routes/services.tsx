import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { CTA } from "@/components/brand/CTA";
import { RingMarker } from "@/components/brand/RingMarker";
import { Arc } from "@/components/brand/Arc";
import { ServiceRow } from "@/components/brand/ServiceRow";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Executive Coaching & Leadership Services | RheAligned" },
      {
        name: "description",
        content:
          "Executive coaching, cognitive clarity programs and leadership development for individuals and organizations. See options, outcomes and investment.",
      },
      { property: "og:title", content: "Executive Coaching & Leadership Services | RheAligned" },
      {
        property: "og:description",
        content:
          "Executive coaching, cognitive clarity programs and leadership development for individuals and organizations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

const programs = [
  {
    name: "Executive & Leadership Coaching",
    lede: "One-on-one coaching for leaders facing complex challenges.",
    who: "C-suite executives, board-level operators, startup founders and senior leaders navigating complexity, high-stakes decisions or transitions.",
    gains: [
      "Sharper, faster decision-making under pressure, the kind of shift one client described as going from staying silent to responding with confidence",
      "A personal system to interrupt negative mental patterns and stop second-guessing",
      "The ability to move from reactive and overwhelmed to intentionally choosing where your energy goes",
    ],
    investment: "HK$12,000 to HK$15,000 (6 sessions)",
  },
  {
    name: "The Implementation Dip Program",
    lede: "For leaders and founders who know what to do but can't make it stick. This program is built for the dip, the stretch where motivation fades and old habits come back.",
    who: "High performers, entrepreneurs and leaders caught in overthinking and second-guessing, who start strong and struggle to follow through.",
    gains: [
      "A map of your personal triggers and patterns",
      "Acceptance of the real, non-linear timeline for change, which moves you from frustration into a system-based approach",
      "Your personalized PAUSE framework, ready to use immediately",
      "A tracking system for real-world application, so consistency has something to hold onto",
    ],
    investment: "HK$8,000 to HK$10,000 (5 sessions)",
  },
  {
    name: "The Internal Operating System",
    lede: "We deconstruct the unexamined beliefs and narratives running in the background, then rebuild your internal OS with clarity, structure and frameworks you can act on.",
    who: "Professionals and founders dealing with impostor syndrome, persistent self-doubt, or an internal voice that holds them back.",
    gains: [
      "Deep identification of your triggers and recurring patterns",
      "A documented Internal OS, your own personalized mental model",
      "The 3-Stage Interruption method to stop negative loops on demand, moving you from \u201cI can't\u201d to \u201cI am learning to\u201d",
      "Clarity on your identity beyond your title, so you lead from core strengths rather than the limits of a role. This is the shift that allowed one client to move from being \u201creactive to everything\u201d to \u201cchoosing what deserves her energy.\u201d",
    ],
    investment: "HK$9,000 to HK$12,000 (6 sessions)",
  },
  {
    name: "Cross-Cultural Clarity",
    lede: "For leaders moving between or managing across UK, USA, India, UAE and Hong Kong contexts.",
    who: "Expat leaders, managers running diverse teams, and professionals transitioning across geographies.",
    gains: [
      "A practical cultural decision-making framework",
      "Stakeholder mapping for your specific cultural context",
      "An understanding of how influence shifts as you cross borders",
      "Confidence to lead and communicate wherever you're posted next",
    ],
    investment: "HK$10,000 to HK$12,000 (4 sessions)",
  },
  {
    name: "The Untangling Session",
    lede: "When everything feels connected and overwhelming, and you don't know where to start. A focused session to untangle the mess together, pinpoint the most important place to begin, and build a practical execution plan.",
    who: "Professionals feeling stuck, founders who can't see the wood for the trees, and anyone who needs structure and direction.",
    gains: [
      "Clarity on where to start",
      "A practical execution plan",
      "Direction and momentum, moving you from tangled to in control",
      "The shift from expecting answers to discovering your own. This is what one client described as the most surprising and meaningful part of the work.",
    ],
    how: "A pre-session reflection to understand your current challenge, a 90-minute session to untangle and build the plan, then a written summary of your action plan with time-bound commitments.",
    boundary:
      "This is not for those looking for a long-term therapeutic process or a quick-fix motivational speech. It's for those who need a clear, actionable direction, now.",
    investment: "HK$1,500 to HK$3,000 (1 to 2 sessions depending on complexity)",
  },
];

const organizational = [
  {
    name: "Executive Coaching",
    lede: "One-on-one coaching for your leaders to strengthen decision-making, presence and influence.",
    gains: [
      "Faster, sharper strategic decisions and stronger board-level presence",
      "Better stakeholder navigation and influence",
      "Reduced burnout and improved retention of key talent, as leaders learn to manage their internal state",
    ],
  },
  {
    name: "Leadership Development Programs",
    lede: "Build a consistent coaching mindset and a common leadership language across your pipeline.",
    gains: [
      "A unified leadership approach and shared vocabulary",
      "Leaders who coach and develop others rather than only directing them",
      "A culture of resilience and growth mindset",
      "Improved retention of high-potential talent",
    ],
  },
  {
    name: "Talent Management & L&D Consulting",
    lede: "Fourteen years of global HR leadership, applied to your talent strategy.",
    gains: [
      "Talent management strategy and L&D program design",
      "Global mobility platform development",
      "Organizational transformation and performance management",
      "Leadership competency frameworks",
    ],
  },
];

function Services() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <Arc
          core={false}
          className="pointer-events-none absolute -right-40 top-1/2 hidden h-[32rem] w-[32rem] -translate-y-1/2 lg:block"
        />
        <div className="shell relative pb-14 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Services</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.06]">
              Individual coaching and organizational engagements.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
              I partner with ambitious individuals and forward-thinking organizations globally to
              build clarity, resilience and influence through practical, cognitive-based coaching.
              Individuals work with me one to one. Organizations bring me in to develop their
              leaders and their leadership culture. Both start with a conversation.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
              Who this is for: C-suite executives, board-level operators, startup founders, senior
              leaders and high-potential professionals, and independent consultants or fractional
              executives who are the face of their own business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Individual coaching</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
              Board-level presence. Cognitive sharpness under pressure. Influence that carries
              across cultural contexts. The patterns underneath all of it.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {programs.map((p, i) => (
              <ServiceRow key={p.name} index={i} name={p.name} lede={p.lede}>
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Who it's for
                    </p>
                    <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed">{p.who}</p>
                    {p.how ? (
                      <>
                        <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          How it works
                        </p>
                        <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                          {p.how}
                        </p>
                      </>
                    ) : null}
                    {p.boundary ? (
                      <p className="mt-7 max-w-[52ch] border-l border-primary pl-5 text-[15px] leading-relaxed">
                        {p.boundary}
                      </p>
                    ) : null}
                    <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                      Investment: {p.investment}
                    </p>
                  </div>
                  <div className="panel-quiet">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      What you gain
                    </p>
                    <ul className="mt-4 space-y-3">
                      {p.gains.map((g) => (
                        <li key={g} className="flex gap-4">
                          <RingMarker size={14} className="mt-[6px] shrink-0" />
                          <span className="max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                            {g}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ServiceRow>
            ))}
          </div>



          <Reveal delay={0.16} className="mt-10">
            <CTA to="/contact">Book a Coaching Conversation</CTA>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-deep py-16 text-deep-foreground">
        <Arc
          tone="light"
          core={false}
          className="pointer-events-none absolute -left-40 top-1/2 hidden h-[28rem] w-[28rem] -translate-y-1/2 lg:block"
        />
        <div className="shell relative">
          <Reveal>
            <span className="eyebrow" style={{ color: "inherit", opacity: 0.7 }}>
              Organizational services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.05rem)] leading-tight">
              For organizations building leadership that stays clear under pressure.
            </h2>
          </Reveal>

          <div className="mt-8 space-y-4 text-foreground">
            {organizational.map((o, i) => (
              <ServiceRow key={o.name} index={i} name={o.name} lede={o.lede}>
                <div className="panel-quiet">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    What you gain
                  </p>
                  <ul className="mt-4 space-y-3">
                    {o.gains.map((g) => (
                      <li key={g} className="flex gap-4">
                        <RingMarker size={14} className="mt-[6px] shrink-0" />
                        <span className="max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                          {g}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ServiceRow>
            ))}
          </div>

          <Reveal delay={0.12} className="mt-10">
            <p className="max-w-[54ch] text-[15px] leading-relaxed text-deep-foreground/75">
              The cost of a leader who is stuck, reactive, or on the verge of burnout is far greater
              than the investment in coaching. This is about protecting your most valuable assets:
              your people.
            </p>
            <div className="mt-8">
              <CTA to="/contact" tone="outline" className="border-deep-foreground/40">
                Discuss an Organizational Engagement
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[34ch] text-xl font-semibold tracking-tight leading-snug">
            Not sure which one fits? That's what the first conversation is for.
          </p>
          <CTA to="/contact">Book a Conversation</CTA>
        </div>
      </section>
    </>
  );
}
