import { createFileRoute } from "@tanstack/react-router";
import { Arc } from "@/components/brand/Arc";
import { StickyNarrative } from "@/components/brand/StickyNarrative";
import { MetricGrid } from "@/components/brand/MetricGrid";
import { Reveal } from "@/components/brand/Reveal";
import { CTA } from "@/components/brand/CTA";
import { RingMarker } from "@/components/brand/RingMarker";
import { AudienceOrbit, type Audience } from "@/components/home/AudienceOrbit";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Executive Coaching for Leaders | RheAligned Coaching" },
      {
        name: "description",
        content:
          "Executive and leadership coaching for senior leaders, founders and globally mobile professionals. Work with ICF-certified coach Rhea Bulsara.",
      },
      { property: "og:title", content: "Executive Coaching for Leaders | RheAligned Coaching" },
      {
        property: "og:description",
        content:
          "Executive and leadership coaching for senior leaders, founders and globally mobile professionals. Work with ICF-certified coach Rhea Bulsara.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const audiences: Audience[] = [
  {
    title: "Senior leaders and board-level operators",
    body: "You've noticed your questions aren't as sharp as they used to be, and your presence in the room isn't landing the way it once did.",
  },
  {
    title: "Expat and global leaders",
    body: "You're leading across the UK, USA, India and Hong Kong, where influence works differently in every room.",
  },
  {
    title: "Startup founders and entrepreneurs",
    body: "You're scaling something, and every high-stakes decision needs clarity you can't always find in the noise.",
  },
  {
    title: "High-potential professionals",
    body: "From the outside you've made it. Inside, the pressure to keep performing has started to feel unsustainable.",
  },
  {
    title: "Organizations",
    body: "You want a leadership culture that stays clear-headed under pressure, and you want your best people to stay because they can see themselves growing here.",
  },
  {
    title: "Independent consultants and fractional executives",
    body: "You're a team of one, carrying your own brand and needing to show up with clarity when it's just you in the room.",
  },
];

const transformations = [
  {
    title: "From silence to influence",
    outcome: "Recognized Leadership",
    context: "Senior Leader, Financial Sector — UK",
  },
  {
    title: "From reactive to intentional",
    outcome: "Mental Peace & Bigger Role",
    context: "Senior Professional, Consulting — India/UAE",
  },
  {
    title: "From tangled to in control",
    outcome: "Direction & Momentum",
    context: "Professional, Multiple Sectors",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="shell grid gap-10 pb-12 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-16 lg:pt-16">
        <div>
          <Reveal>
            <span className="eyebrow">Clarity. Confidence. Influence.</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(2rem,3.7vw,3.05rem)] leading-[1.08]">
              Your next level of leadership isn't about doing more.{" "}
              <span className="editorial font-normal text-primary">
                It's about thinking differently.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[48ch] text-[16px] leading-relaxed text-muted-foreground">
              For senior leaders, founders, and globally mobile professionals who know they're
              operating below their real capacity.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <CTA to="/contact">Book a Conversation</CTA>
              <CTA to="/services" tone="outline">
                Explore Coaching
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 grid max-w-[34rem] grid-cols-3 gap-px overflow-hidden rounded-md border border-hairline bg-hairline">
              {[
                ["14+", "Years in global HR"],
                ["350+", "Coaching hours"],
                ["4", "Regions worked across"],
              ].map(([k, v]) => (
                <div key={v} className="bg-card px-4 py-4">
                  <p className="text-xl font-bold tracking-tight text-primary">{k}</p>
                  <p className="label-xs mt-1 leading-snug">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[400px]">
            <Arc className="absolute inset-0 h-full w-full" />
            {/* Intentional slot for Rhea's portrait, framed by the ring system. */}
            <div
              className="absolute left-1/2 top-1/2 grid h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sand"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>

      <div className="shell border-t border-hairline py-8">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-12">
          <p className="max-w-[30ch] text-[clamp(1.15rem,1.9vw,1.5rem)] font-semibold leading-snug tracking-tight">
            You're not broken. Your internal operating system just wasn't built for this level of
            complexity.
          </p>
          <div className="max-w-[60ch] space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              You are smart, accomplished and driven, yet there is a gap between what you're capable
              of and how you're currently performing. My work is to help you close that gap
              permanently by upgrading the way you think.
            </p>
            <p className="text-foreground">
              This isn't generic leadership coaching. It's cognitive systems engineering for high
              performers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoIHelp() {
  return (
    <section className="section-y border-b border-hairline">
      <div className="shell">
        <Reveal className="max-w-[58ch]">
          <span className="eyebrow">Who I work with</span>
          <h2 className="mt-6 text-[clamp(1.6rem,2.8vw,2.25rem)] leading-[1.12]">
            I work with people who are already good at what they do and know they're operating below
            their real capacity.
          </h2>
        </Reveal>
        <div className="mt-10">
          <AudienceOrbit audiences={audiences} />
        </div>
      </div>
    </section>
  );
}

function Friction() {
  return (
    <section className="relative overflow-hidden bg-deep py-16 text-deep-foreground">
      <Arc
        tone="light"
        core={false}
        className="pointer-events-none absolute -right-40 top-1/2 h-[540px] w-[540px] -translate-y-1/2"
      />
      <div className="shell relative">
        <Reveal className="max-w-3xl">
          <p className="max-w-[18ch] editorial text-[clamp(1.9rem,4vw,3rem)] leading-[1.1]">
            This isn't burnout. It's friction in your internal operating system.
          </p>
          <p className="mt-6 max-w-[26ch] editorial text-[clamp(1.2rem,2.2vw,1.6rem)] leading-snug text-deep-foreground/70">
            And friction can be identified, redesigned, and removed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const items = [
    {
      title: "Individual Coaching",
      body: "One-to-one executive and leadership coaching for people carrying real decision weight. Depending on what you're facing, that might be full executive coaching, a focused program to rebuild the beliefs running in the background, work on cross-cultural influence, or a single session to untangle where to start.",
      cta: "Explore Individual Coaching",
    },
    {
      title: "Organizational Services",
      body: "Executive coaching for your leaders, leadership development programs that give your pipeline a shared language, and talent management and L&D consulting drawn from 14+ years inside global HR functions.",
      cta: "Explore Organizational Services",
    },
  ];

  return (
    <section className="section-y border-b border-hairline">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">The work</span>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="panel panel-hover">
              <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <div className="mt-8">
                <CTA to="/services" tone="quiet">
                  {item.cta}
                </CTA>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="border-b border-hairline bg-sand py-12">
      <div className="shell">
        <Reveal>
          <MetricGrid
            metrics={[
              { value: "350+", label: "Hours of coaching practice" },
              { value: "14+", label: "Years in global HR leadership" },
              { value: "4", label: "Countries of experience" },
              { value: "ICF-ACC", label: "Associate Certified Coach" },
            ]}
          />
        </Reveal>
      </div>
    </section>
  );
}

function Transformations() {
  return (
    <section className="section-y border-b border-hairline">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Client impact</span>
        </Reveal>
        <div className="mt-6">
          {transformations.map((t, i) => (
            <Reveal
              key={t.title}
              delay={i * 0.06}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 border-t border-hairline py-8 last:border-b md:grid-cols-[auto_minmax(0,1fr)_minmax(0,0.8fr)] md:items-baseline md:gap-10"
            >
              <span className="text-[11px] font-semibold tracking-[0.16em] text-primary tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[clamp(1.15rem,2.1vw,1.6rem)] uppercase leading-tight">
                {t.title}
              </h3>
              <div className="col-start-2 md:col-start-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  Outcome: {t.outcome}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{t.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-8">
          <CTA to="/work" tone="quiet">
            See the full transformations
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <Arc
        core={false}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-70 md:h-[52rem] md:w-[52rem]"
      />
      <div className="shell relative py-16 text-center md:py-24">
        <Reveal>
          <h2 className="mx-auto max-w-[20ch] text-[clamp(1.85rem,3.2vw,2.6rem)] leading-[1.08]">
            You know what you need to do. Let's help you do it consistently.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-3xl gap-8 text-left md:grid-cols-2">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Book a discovery call. No obligation, just a conversation about where you are and
              where you want to go.
            </p>
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Let's talk about how scalable coaching can shift your leadership culture, support
              retention and build performance that holds.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTA to="/contact">Book a Conversation</CTA>
            <CTA to="/contact" tone="outline">
              Discuss an Organizational Engagement
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HelpsWith() {
  const groups = [
    {
      label: "In your professional life",
      body: "Your questions lose their edge in high-stakes meetings. Decisions take longer than they should and tip into analysis paralysis. You get caught in the idolism loop, where someone else's opinion quietly derails your clarity. You're carrying the weight of every decision in a startup, a new venture or a team you lead. Or you're mid-transition into a new role, a new geography or a new business.",
    },
    {
      label: "In your internal world",
      body: "The voice that says \u201cI can't\u201d arrives before you've even tried. You second-guess things you once knew instinctively. Conversations get replayed and decisions get analysed to death. You know what to do and still can't seem to do it consistently. Everything feels connected, overwhelming, and impossible to start.",
    },
  ];
  return (
    <section className="section-y border-b border-hairline bg-sand">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">What I help with</span>
        </Reveal>
        <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.08}>
              <h3 className="text-xl font-semibold tracking-tight">{g.label}</h3>
              <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
                {g.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyRhea() {
  const reasons: { title: string; body: string }[] = [
    {
      title: "Corporate reality, not theory",
      body: "I didn't just study leadership. I lived it inside Sainsbury's, BP and the Tata Group, building functions from the ground up. I know the pressures you're describing because I've sat in them.",
    },
    {
      title: "Cross-cultural expertise",
      body: "I've worked across the UK, UAE, India and Hong Kong, and I understand how words like influence, alignment and feedback change meaning as you cross borders.",
    },
    {
      title: "A cognitive systems approach",
      body: "I don't stop at \u201chow does that make you feel?\u201d We deconstruct your internal operating system, the beliefs, narratives and mental habits underneath your behaviour, then rebuild it with structure you can actually use.",
    },
    {
      title: "Behavioural tracking and accountability",
      body: "We set concrete goals and track how the work shows up between sessions. Coaching should change what you do on a Tuesday afternoon, not just make for an interesting hour.",
    },
  ];
  return (
    <section className="section-y border-b border-hairline">
      <div className="shell">
        <StickyNarrative
          eyebrow="Why leaders choose this approach"
          items={reasons.map((r) => ({ title: r.title, body: r.body }))}
          footer={
            <p className="max-w-[36ch] border-l border-primary pl-5 text-[14px] leading-relaxed text-muted-foreground">
              Fourteen years inside organizations you know: Sainsbury's, BP and the Tata Group,
              across the UK, UAE, India and Hong Kong. I built global mobility platforms from
              scratch, ran talent programs that shaped leadership pipelines, and partnered with
              business leaders through growth, transformation and constant ambiguity.
            </p>
          }
        />
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  const quotes = [
    {
      quote:
        "I went from staying silent when unprepared to pausing, revamping, and responding with confidence.",
      who: "Senior Leader, Financial Sector — UK",
    },
    {
      quote:
        "Now I choose what deserves my energy. It's changed everything, my mental health, my relationships, my peace.",
      who: "Senior Professional, Consulting Sector — India/UAE",
    },
  ];
  return (
    <section className="section-y border-b border-hairline">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">In their words</span>
        </Reveal>
        <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-10">
          {quotes.map((q, i) => (
            <Reveal as="article" key={q.who} delay={i * 0.08}>
              <blockquote className="max-w-[30ch] editorial text-[clamp(1.4rem,2.4vw,1.9rem)] leading-snug">
                {q.quote}
              </blockquote>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {q.who}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12} className="mt-8">
          <CTA to="/testimonials" tone="quiet">
            Read what clients say
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

function InsightsPreview() {
  const titles = [
    "Your Thinking Isn't Free, Invest It Wisely",
    "Your Title Isn't Who You Are",
    "One Small Action: Overthinking",
  ];
  return (
    <section className="section-y border-b border-hairline">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow">Insights</span>
          <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-muted-foreground">
            Practical writing on leadership, mindset and cognitive clarity, drawn from 14+ years of
            corporate experience and 350+ hours of coaching practice.
          </p>
        </Reveal>
        <div>
          <ul>
            {titles.map((t, i) => (
              <Reveal as="li" key={t} delay={i * 0.06} className="border-t border-hairline last:border-b">
                <span className="flex items-center gap-4 py-6 text-lg font-semibold tracking-tight leading-snug">
                  <RingMarker size={18} />
                  {t}
                </span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.14} className="mt-10">
            <CTA to="/insights" tone="quiet">
              Explore More Insights
            </CTA>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <WhoIHelp />
      <HelpsWith />
      <Friction />
      <ServicesPreview />
      <WhyRhea />
      <Credentials />
      <Transformations />
      <TestimonialsPreview />
      <InsightsPreview />
      <FinalCTA />
    </>
  );
}
