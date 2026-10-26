import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { Arc } from "@/components/brand/Arc";
import { StickyNarrative } from "@/components/brand/StickyNarrative";
import { RingMarker } from "@/components/brand/RingMarker";
import { CTAWithMicro } from "@/components/brand/CTA";
import { CaseStudy } from "@/components/brand/CaseStudy";
import rheaPortrait from "@/assets/rhea-portrait.jpg";
import rheaStanding from "@/assets/rhea-standing.jpg";
import rheaSpeaking from "@/assets/rhea-speaking.jpg";

import { getSiteSettings } from "@/lib/sanity";

export const Route = createFileRoute("/about")({
  loader: async () => {
    const settings = await getSiteSettings();
    return { settings };
  },
  component: About,
  head: () => ({
    meta: [
      {
        title: "About Rhea Bulsara Sidhva | Executive & Leadership Coach | RheAligned",
      },
      {
        name: "description",
        content:
          "Executive and leadership coach who spent 14 years inside corporate HR at Tata Group, BP, and Sainsbury's across UK, UAE, India, and Hong Kong. ICF-ACC.",
      },
      {
        property: "og:title",
        content: "About Rhea Bulsara Sidhva | RheAligned",
      },
      {
        property: "og:description",
        content:
          "Executive and leadership coach who spent 14 years inside corporate HR at Tata Group, BP, and Sainsbury's.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const patterns = [
  {
    name: "The Expectation Trap",
    definition: 'The exhausting tug-of-war between what you "should" do and what you truly want.',
    diagram: (
      <svg viewBox="0 0 120 90" className="h-24 w-32" aria-hidden="true">
        <circle cx="46" cy="45" r="28" fill="none" stroke="var(--primary)" strokeWidth="1" />
        <circle cx="74" cy="45" r="28" fill="none" stroke="var(--deep)" strokeWidth="1" />
        <circle cx="60" cy="45" r="3" fill="var(--primary)" />
      </svg>
    ),
  },
  {
    name: "The Idolism Loop",
    definition: "When someone else's certainty carries more weight than your own.",
    diagram: (
      <svg viewBox="0 0 120 90" className="h-24 w-32" aria-hidden="true">
        <circle cx="60" cy="45" r="34" fill="none" stroke="var(--hairline)" strokeWidth="1" />
        <circle cx="60" cy="45" r="10" fill="none" stroke="var(--deep)" strokeWidth="1" />
        <circle cx="94" cy="45" r="5" fill="var(--primary)" />
        <circle cx="60" cy="45" r="2.5" fill="var(--deep)" />
      </svg>
    ),
  },
  {
    name: "The Negative Narration Spiral",
    definition: "The internal voice that predicts failure before you've even started.",
    diagram: (
      <svg viewBox="0 0 120 90" className="h-24 w-32" aria-hidden="true">
        <path
          d="M60 8a37 37 0 1 1-26 63 28 28 0 1 0 26-47 19 19 0 1 1 13 33"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.7"
          strokeWidth="1"
        />
        <circle cx="60" cy="45" r="3" fill="var(--primary)" />
      </svg>
    ),
  },
];

const experienceTable = [
  {
    role: "Global HR Leader, Talent Management & Learning",
    org: "Tata Group",
    industry: "Diversified Conglomerate",
  },
  {
    role: "HR Leader, International Mobility",
    org: "BP",
    industry: "Oil & Gas",
  },
  {
    role: "HR Leader, Recruitment",
    org: "Sainsbury's",
    industry: "Retail",
  },
];

const clientTransformations = [
  {
    title: "From reactive to intentional",
    who: "Senior Professional, Consulting | India/UAE",
    challenge: "High reactivity and a habit of being overwhelmed by other people's opinions.",
    approach: "Structured coaching focused on pattern awareness and cognitive clarity.",
    outcome:
      "Enhanced responsibilities at work, along with mental peace and a more intentional way of living.",
  },
  {
    title: "From silence to influence",
    who: "Senior Leader, Financial Sector | UK",
    challenge:
      "Staying silent when unprepared, and struggling to influence without formal authority.",
    approach: "Executive Coaching using the Expectation Scale and the PAUSE framework.",
    outcome:
      "Influence without authority, a more self-sufficient team, and recognition from management.",
  },
  {
    title: "From tangled to in control",
    who: "Professional, Multiple Sectors",
    challenge: "Everything felt tangled and connected, with no clear place to start.",
    approach: "The Untangling Session, pinpointing the priority and building an execution plan.",
    outcome: "Direction, momentum, and the ability to find her own answers.",
  },
  {
    title: "From cognitive fog to board clarity",
    who: "Operations Head, board level",
    challenge: "Cognitive slowdown and unclear articulation in high-stakes board meetings.",
    approach: "Resource strain identification paired with a cognitive clarity framework.",
    outcome:
      "Restored board-level clarity, sharper questioning, and clearer executive articulation.",
  },
];

const method = [
  {
    step: "Deconstruct",
    body: "We identify the hidden narratives and specific beliefs creating friction in your thinking.",
  },
  {
    step: "Make visible",
    body: "Turn vague concerns into clearer problems. The invisible becomes visible.",
  },
  {
    step: "Activate",
    body: "We install a repeatable system for clarity, so your new approach works when you need it most.",
  },
];

const expectations = [
  {
    lead: "I won't hand you answers.",
    body: "I'll create the space for you to find them yourself.",
  },
  {
    lead: "I'll listen for what's not being said.",
    body: "I'll remember the small details and connect them in ways you haven't noticed.",
  },
  { lead: "I'll challenge you.", body: "My questions will push you to reflect deeper." },
  { lead: "You'll be safe to be completely honest.", body: "This is a judgment-free zone." },
  {
    lead: "I'll meet you where you are.",
    body: "I'll sense where to start and guide you with clarity, not pressure.",
  },
];

function MethodStage({ index }: { index: number }) {
  const arcs = [0, 1, 2, 3, 4, 5];
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
      <circle cx="100" cy="100" r="86" fill="none" stroke="var(--hairline)" strokeWidth="1" />
      {arcs.map((i) => {
        const a = (i / arcs.length) * Math.PI * 2;
        const scatter = index === 0 ? 16 : 0;
        const r = index === 2 ? 68 : 56;
        const x = Math.round((100 + Math.cos(a) * (r + (i % 2 ? scatter : -scatter))) * 100) / 100;
        const y = Math.round((100 + Math.sin(a) * (r + (i % 2 ? -scatter : scatter))) * 100) / 100;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={index === 0 ? 4 : 6}
            fill={index === 2 ? "var(--primary)" : "none"}
            fillOpacity={index === 2 ? 0.9 : 1}
            stroke="var(--primary)"
            strokeWidth="1"
            style={{ transition: "all 700ms var(--ease-calm)" }}
          />
        );
      })}
      <circle
        cx="100"
        cy="100"
        r={index === 2 ? 30 : 18}
        fill="none"
        stroke="var(--deep)"
        strokeWidth="1"
        strokeDasharray={index === 0 ? "3 4" : "0"}
        style={{ transition: "all 700ms var(--ease-calm)" }}
      />
      <circle cx="100" cy="100" r="5" fill="var(--deep)" />
    </svg>
  );
}

function About() {
  const { settings } = Route.useLoaderData();
  const [stage, setStage] = useState(0);

  return (
    <>
      {/* 3.1 Hero Section */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/30">
        <div className="shell grid gap-12 pb-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-12">
          <div>
            <Reveal>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-primary">
                Rhea Bulsara Sidhva | Former Global HR Leader
              </p>
            </Reveal>

            <Reveal delay={0.06} className="mt-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-[12px] font-medium text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                ICF-Associate Certified Coach | {settings.coachingHours} Hours of Coaching Practice
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 max-w-[18ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
                About Rhea Bulsara Sidhva
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-5 max-w-[52ch] space-y-3 text-[16px] font-medium leading-relaxed text-foreground/85">
                <p>
                  Capability alone does not guarantee effective leadership. The patterns we fall into under pressure determine how much of that capability we actually use.
                </p>
                <p>
                  I'm Rhea Bulsara Sidhva, an ICF Associate Certified Coach (ACC), former global HR leader and founder of RheAligned.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.22} className="mt-8">
              <CTAWithMicro
                href="https://calendly.com/rhea-rhealigned/discovery-call-with-rhea"
                micro="No obligation · Virtual, any time zone"
              >
                Book a free discovery call
              </CTAWithMicro>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[400px]">
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-hairline shadow-xl">
                <img
                  src={rheaStanding}
                  alt="Rhea Bulsara Sidhva - Executive & Leadership Coach"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <Arc
                core={false}
                drift={false}
                className="pointer-events-none absolute -bottom-10 -left-10 h-44 w-44 opacity-75"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why patterns, not gaps */}
      <section className="section-y border-b border-hairline bg-sand/30">
        <div className="shell max-w-4xl">
          <Reveal>
            <span className="eyebrow">Perspective</span>
            <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
              Why patterns, not gaps
            </h2>
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-foreground/85">
              <p>
                Most leadership development starts from a deficit: what's missing, what to fix, what competency to build. That framing misses the real constraint.
              </p>
              <p>
                The leaders I work with are capable. They have the experience, the skills and the judgement. What gets in the way is a pattern that shows up under pressure, and patterns are not gaps in competence. They can be recognised, examined and changed.
              </p>
              <p>
                I call these patterns the Expectation Trap, the Idolism Loop (when someone else's certainty carries more weight than your own) and the Negative Narration Spiral. Recognising them is the first step towards changing how we think, respond and act.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3.3 Prominent Positioning Statement */}
      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-card p-8 md:p-12 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  The Perspective I Bring
                </span>
                <p className="mt-4 text-[clamp(1.2rem,2.1vw,1.6rem)] font-medium leading-relaxed text-foreground">
                  I am an ICF-certified executive and leadership coach who spent 14 years inside
                  corporate HR at BP, Tata Group, and Sainsbury's. I have sat on the other side of
                  talent reviews, promotion decisions, and international mobility. I know exactly
                  why smart leaders get stuck, and I help them get unstuck.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative hidden lg:block">
            <div className="overflow-hidden rounded-2xl border border-hairline shadow-lg aspect-[4/3]">
              <img
                src={rheaSpeaking}
                alt="Rhea Bulsara Sidhva facilitating executive clarity"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3.4 The RheAligned Method */}
      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">The RheAligned Method</span>
              <p className="mt-4 max-w-[50ch] text-[15.5px] leading-relaxed text-muted-foreground">
                The RheAligned Method is a cognitive systems approach. We deconstruct the hidden
                narratives keeping you stuck, make them visible so you can see them clearly, and
                activate a repeatable system for clarity under pressure.
              </p>
            </Reveal>

            <ul className="mt-10">
              {method.map((m, i) => (
                <li key={m.step} className="border-t border-hairline last:border-b">
                  <button
                    type="button"
                    onMouseEnter={() => setStage(i)}
                    onFocus={() => setStage(i)}
                    onClick={() => setStage(i)}
                    className="flex w-full items-start gap-4 py-6 text-left"
                  >
                    <RingMarker active={stage === i} className="mt-1" />
                    <span>
                      <span className="block text-xl font-semibold tracking-tight">{m.step}</span>
                      <span
                        className="mt-2 block max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground transition-opacity duration-500"
                        style={{ opacity: stage === i ? 1 : 0.55 }}
                      >
                        {m.body}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto aspect-square w-full max-w-[420px]">
            <MethodStage index={stage} />
          </div>
        </div>
      </section>

      {/* The Three Patterns */}
      <section className="section-y border-b border-hairline bg-sand/20">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">The three patterns</span>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {patterns.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08} className="panel panel-hover bg-card">
                {p.diagram}
                <h2 className="mt-6 text-xl font-semibold tracking-tight leading-snug">{p.name}</h2>
                <p className="mt-4 max-w-[38ch] text-[15px] leading-relaxed text-muted-foreground">
                  {p.definition}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Experience & Credentials Table */}
      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-[104px] lg:self-start">
            <span className="eyebrow">Career Record</span>
            <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2rem)] font-bold tracking-tight">
              Experience & Credentials
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Direct operating experience across global corporate functions, translating into
              practical insight in the coaching room.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
              Beyond one-to-one coaching, Rhea facilitates executive workshops and leadership group work on self-identity and cross-cultural transition.
            </p>
          </Reveal>

          <div>
            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-hairline bg-card shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-hairline bg-sand/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4">Organisation</th>
                      <th className="px-6 py-4">Industry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline">
                    {experienceTable.map((row) => (
                      <tr key={row.org} className="hover:bg-sand/20 transition-colors">
                        <td className="px-6 py-4 font-medium text-foreground">{row.role}</td>
                        <td className="px-6 py-4 font-semibold text-primary">{row.org}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.industry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Credentials Badges */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-hairline bg-card p-5">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Geographic Experience
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground leading-snug">
                  Hong Kong · UK · UAE · India
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-card p-5">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Credentials
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground leading-snug">
                  ICF-Associate Certified Coach (ACC) | {settings.coachingHours} hours practice
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-card p-5">
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Languages
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground leading-snug">
                  English and Hindi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merged Client Transformations & Case Highlights from Work */}
      <section className="section-y border-b border-hairline bg-sand/30">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Client Transformations</span>
            <h2 className="mt-3 text-[clamp(1.5rem,2.5vw,2.1rem)] font-bold tracking-tight">
              Real Impact & Engagement Highlights
            </h2>
            <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">
              Client identities stay private. Each case highlights the concrete shift from internal
              friction to decisive leadership.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {clientTransformations.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.06}>
                <CaseStudy data={t} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership expectations */}
      <section className="section-y border-b border-hairline">
        <div className="shell">
          <StickyNarrative
            eyebrow="Partnership"
            title="What you can expect from me"
            items={expectations.map((e) => ({ title: e.lead, body: e.body }))}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sand/40 border-b border-hairline">
        <div className="shell text-center max-w-3xl">
          <Reveal>
            <h2 className="text-[clamp(1.85rem,3vw,2.5rem)] font-bold tracking-tight text-foreground">
              Not sure where you fit?
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              The best way to find out is a conversation. Thirty minutes, no pitch: we'll clarify what's happening and whether there's a useful next step.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <CTAWithMicro
                href="https://calendly.com/rhea-rhealigned/discovery-call-with-rhea"
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
