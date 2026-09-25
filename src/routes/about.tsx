import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { Arc } from "@/components/brand/Arc";
import { Timeline } from "@/components/brand/Timeline";
import { StickyNarrative } from "@/components/brand/StickyNarrative";
import { RingMarker } from "@/components/brand/RingMarker";
import { CTA } from "@/components/brand/CTA";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Rhea Bulsara | ICF Executive & Leadership Coach" },
      {
        name: "description",
        content:
          "Meet Rhea Bulsara, ICF-ACC executive coach with 14+ years in global HR leadership across the UK, UAE, India and Hong Kong.",
      },
      { property: "og:title", content: "About Rhea Bulsara | ICF Executive & Leadership Coach" },
      {
        property: "og:description",
        content:
          "Meet Rhea Bulsara, ICF-ACC executive coach with 14+ years in global HR leadership across the UK, UAE, India and Hong Kong.",
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
    definition:
      'The exhausting tug-of-war between what you "should" do and what you truly want.',
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
    definition: "Giving someone else's opinion more weight than your own inner compass.",
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

const experience = [
  {
    org: "Tata Group",
    role: "Global HR Leader, Talent Management & Learning",
    industry: "Diversified conglomerate",
  },
  { org: "BP", role: "HR Leader, International Mobility", industry: "Oil & gas" },
  { org: "Sainsbury's", role: "HR Leader, Recruitment", industry: "Retail" },
];

const principles = [
  { name: "Internal balance", body: "So you don't lose yourself in the noise." },
  { name: "Objectivity", body: "So you can see your path and your potential clearly." },
  { name: "Adaptability", body: "So you can move with confidence when the ground shifts under you." },
];

const method = [
  {
    step: "Deconstruct",
    body: "We identify the hidden narratives and specific beliefs creating friction in your thinking.",
  },
  {
    step: "Objectify",
    body: "We turn vague anxiety or doubt into a defined, manageable problem. The invisible becomes visible.",
  },
  {
    step: "Activate",
    body: "We install a repeatable system for clarity, so your new operating system works when you need it most.",
  },
];

const expectations = [
  { lead: "I won't hand you answers.", body: "I'll create the space for you to find them yourself." },
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
  // Deconstruct: fragmented ring. Objectify: aligned pieces. Activate: expanding system.
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
  const [stage, setStage] = useState(0);

  return (
    <>
      <section className="border-b border-hairline">
        <div className="shell grid gap-12 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-28">
          <div>
            <Reveal>
              <span className="eyebrow">About Rhea Bulsara</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-[20ch] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.06]">
                Helping you close the gap between what you know and what you consistently do.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                ICF-Associate Certified Coach (ACC). 350+ hours of coaching practice. 14+ years in
                global HR leadership across four countries.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
              <div className="absolute inset-0 bg-sand" aria-hidden="true" />
              <Arc
                core={false}
                drift={false}
                className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="max-w-[18ch] text-[clamp(1.45rem,2.4vw,1.95rem)] leading-tight">
              From global HR leadership to the coaching room
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <Reveal delay={0.06}>
              <p>
                For more than fourteen years I worked inside the organizations you know:
                Sainsbury's, BP and the Tata Group, across the UK, UAE, India and Hong Kong. These
                were matrixed environments where complexity was constant and the pressure to perform
                never really dropped.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                I built global mobility platforms from scratch. I drove talent programs that shaped
                leadership pipelines. I partnered with business leaders through growth,
                transformation and long stretches of ambiguity.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p>
                Somewhere in all of that, I noticed something I couldn't unsee. Smart leaders don't
                fail because they lack skill. They stall because their internal operating system
                starts working against them.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="border-l border-primary pl-6 text-foreground">
                You know what to do. You just can't seem to do it consistently. That's the gap I
                close.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">The three patterns</span>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {patterns.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08} className="panel panel-hover">
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

      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="lg:sticky lg:top-[104px] lg:self-start">
            <h2 className="text-[clamp(1.45rem,2.4vw,1.95rem)] leading-tight">
              Experience and credentials
            </h2>
          </Reveal>
          <div>
            <Timeline
              items={[
                ...[...experience].reverse().map((e) => ({
                  org: e.org,
                  role: e.role,
                  meta: e.industry,
                })),
                {
                  org: "RheAligned",
                  role: "Executive and leadership coaching",
                  meta: "Hong Kong, working globally",
                  current: true,
                },
              ]}
            />
            <dl className="mt-12 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-3">
              {[
                { k: "Geographies", v: "Hong Kong, United Kingdom, United Arab Emirates, India" },
                {
                  k: "Credentials",
                  v: "ICF-Associate Certified Coach (ACC), 350+ hours of coaching practice",
                },
                { k: "Languages", v: "English and Hindi" },
              ].map((d) => (
                <div key={d.k}>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {d.k}
                  </dt>
                  <dd className="mt-3 text-[15px] leading-relaxed">{d.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Coaching philosophy</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground">
              I believe sustainable success is built from the inside out. My philosophy sits on
              three principles that have held up across every culture I've worked in.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.07} className="panel panel-hover">
                <RingMarker size={18} active />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-[68ch] border-l border-primary pl-6 text-[15px] leading-relaxed">
              I'm not a wellness coach or a motivational speaker. I'm a cognitive systems coach for
              high-performing operators. The method is practical rather than theoretical. We
              deconstruct the patterns keeping you stuck, then install frameworks you can repeat
              when the pressure is on.
            </p>
          </Reveal>
        </div>
      </section>


      <section className="relative overflow-hidden bg-deep py-18 text-deep-foreground">
        <Arc
          tone="light"
          core={false}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="shell relative text-center">
          <Reveal>
            <blockquote className="mx-auto max-w-[26ch] editorial text-[clamp(1.8rem,4vw,2.9rem)] leading-[1.1]">
              I don't force change. I help you flow with it, turning friction into forward momentum.
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <span className="eyebrow">The RheAligned Method</span>
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

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <StickyNarrative
            eyebrow="Partnership"
            title="What you can expect from me"
            items={expectations.map((e) => ({ title: e.lead, body: e.body }))}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[34ch] text-xl font-semibold tracking-tight leading-snug">
            Precision thinking for ambitious leaders.
          </p>
          <CTA to="/contact">Book a Conversation</CTA>
        </div>
      </section>
    </>
  );
}
