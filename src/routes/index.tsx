import { createFileRoute, Link } from "@tanstack/react-router";
import { Arc } from "@/components/brand/Arc";
import { Reveal } from "@/components/brand/Reveal";
import { CTA, CTAWithMicro } from "@/components/brand/CTA";
import { RingMarker } from "@/components/brand/RingMarker";
import rheaPortrait from "@/assets/rhea-portrait.jpg";
import {
  getArticles,
  getTestimonials,
  getSiteSettings,
  type SanitySiteSettings,
} from "@/lib/sanity";
import { type Article } from "@/lib/articles";
import { type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [articles, testimonials, settings] = await Promise.all([
      getArticles(),
      getTestimonials(),
      getSiteSettings(),
    ]);
    return { articles, testimonials, settings };
  },
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Executive and Leadership Coach | Rhea Bulsara Sidhva | RheAligned",
      },
      {
        name: "description",
        content:
          "Executive coaching for senior leaders and founders operating below their capacity. Former Global HR Leader at BP, Tata Group, and Sainsbury's. ICF-ACC.",
      },
      {
        property: "og:title",
        content: "Executive and Leadership Coach | Rhea Bulsara Sidhva | RheAligned",
      },
      {
        property: "og:description",
        content:
          "Whether you're stuck or tangled, the path forward starts with clarity. I help you find it. ICF-ACC | 500+ Hours of Coaching Practice.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Hero({ settings }: { settings: SanitySiteSettings }) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/30">
      <div className="shell grid gap-12 pb-14 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:pb-18 lg:pt-14">
        <div>
          {/* Eyebrow Line */}
          <Reveal>
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.16em] text-primary">
              Rhea Bulsara Sidhva | Former Global HR Leader
            </p>
          </Reveal>

          {/* Credential Badge */}
          <Reveal delay={0.05} className="mt-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1 text-[12px] font-medium text-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              ICF-Associate Certified Coach | {settings.coachingHours} Hours of Coaching Practice
            </span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Whether you're stuck or tangled, the path forward starts with clarity.{" "}
              <span className="editorial font-normal italic text-primary">I help you find it.</span>
            </h1>
          </Reveal>

          {/* Subheadline */}
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[48ch] text-[16px] font-medium leading-relaxed text-foreground/85">
              Executive coaching for senior leaders and founders who are operating below their real
              capacity, not because they lack skill, but because their internal operating system is
              working against them.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAWithMicro to="/contact" micro="No obligation · Virtual, any time zone">
                Book a free 30-minute discovery call
              </CTAWithMicro>

              <div className="self-start pt-0.5">
                <CTA to="/services" tone="outline">
                  Explore Coaching Options
                </CTA>
              </div>
            </div>
          </Reveal>

          {/* Hero Stats Band */}
          <Reveal delay={0.3}>
            <div className="mt-10 overflow-hidden rounded-xl border border-hairline bg-card shadow-sm">
              <div className="grid grid-cols-2 divide-x divide-hairline border-b border-hairline sm:grid-cols-4">
                <div className="p-4">
                  <p className="text-2xl font-bold tracking-tight text-primary">
                    {settings.coachingHours}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">Coaching Hours</p>
                </div>
                <div className="p-4">
                  <p className="text-2xl font-bold tracking-tight text-primary">
                    {settings.corporateExperienceYears}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Years Corporate Experience
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-2xl font-bold tracking-tight text-primary">
                    {settings.countriesCount}
                  </p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    Countries Lived & Worked In
                  </p>
                </div>
                <div className="p-4">
                  <p className="text-2xl font-bold tracking-tight text-primary">ICF-ACC</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">Certified Coach</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 bg-sand/60 px-4 py-2.5 text-xs text-muted-foreground">
                <span>
                  Corporate Experience:{" "}
                  <strong className="font-semibold text-foreground">
                    BP · Tata Group · Sainsbury's
                  </strong>
                </span>
                <span>
                  Geographies:{" "}
                  <strong className="font-semibold text-foreground">
                    Hong Kong · UK · UAE · India
                  </strong>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero Photo & Composition */}
        <Reveal delay={0.12} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-[430px]">
            <Arc className="absolute inset-0 h-full w-full opacity-80" />
            <div className="absolute inset-4 overflow-hidden rounded-full border-2 border-primary/20 shadow-2xl">
              <img
                src={rheaPortrait}
                alt="Rhea Bulsara Sidhva - Executive and Leadership Coach"
                className="h-full w-full object-cover object-top filter transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-hairline bg-card/95 px-4 py-1.5 text-xs font-semibold shadow-md backdrop-blur">
              <span>Rhea Bulsara Sidhva</span>
              <span className="mx-1.5 text-muted-foreground/60">·</span>
              <span className="text-primary">Executive & Leadership Coach</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AudienceChips() {
  const chips = [
    {
      title: "Founders & Entrepreneurs",
      description: "Scaling a business and need clarity under pressure.",
      to: "/services",
    },
    {
      title: "High-Potential Professionals",
      description: "Achieved external success but feel stuck internally.",
      to: "/services",
    },
    {
      title: "Globally Mobile Leaders",
      description: "Leading across cultures and time zones.",
      to: "/services",
    },
  ];

  return (
    <section className="border-b border-hairline bg-card py-12">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">I also work with:</span>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {chips.map((chip, i) => (
            <Reveal key={chip.title} delay={i * 0.08}>
              <Link
                to={chip.to}
                className="group flex h-full flex-col justify-between rounded-xl border border-hairline bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {chip.title}
                    </span>
                    <span className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                    {chip.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIHelpWith() {
  return (
    <section className="section-y border-b border-hairline bg-sand/40">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">What I Help With</span>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <Reveal delay={0.06} className="panel bg-card p-8">
            <div className="flex items-center gap-3">
              <RingMarker size={16} active />
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                If you're stuck...
              </h3>
            </div>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              You know what to do. You have the skill. You have the experience. But something is
              getting in the way.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="panel bg-card p-8">
            <div className="flex items-center gap-3">
              <RingMarker size={16} active />
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                If you're tangled...
              </h3>
            </div>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              Everything feels connected and overwhelming. You can't see the wood for the trees.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="mt-10">
          <div className="rounded-xl border border-hairline bg-deep p-8 text-deep-foreground">
            <p className="editorial text-[clamp(1.4rem,2.5vw,2rem)] leading-snug">
              This isn't burnout. It's friction in your internal operating system.
            </p>
            <p className="mt-3 text-lg font-light text-deep-foreground/80">
              And friction can be identified, redesigned, and removed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TheRheAlignedMethod() {
  const steps = [
    {
      num: "01",
      title: "Deconstruct",
      description:
        "We identify the hidden narratives and specific beliefs creating friction in your thinking.",
    },
    {
      num: "02",
      title: "Objectify",
      description:
        "We turn vague anxiety or doubt into a defined, manageable problem. The invisible becomes visible.",
    },
    {
      num: "03",
      title: "Activate",
      description:
        "We install a repeatable system for clarity, so your new operating system works when you need it most.",
    },
  ];

  const supportingTools = [
    {
      name: "The PAUSE Framework",
      desc: "Interrupt automatic reactive habits and create space for deliberate decision-making.",
    },
    {
      name: "3-Stage Interruption",
      desc: "Short-circuit negative mental loops in real time, moving from 'I can't' to intentional action.",
    },
    {
      name: "The Expectation Scale",
      desc: "Calibrate internal standards versus external pressure to eliminate unnecessary exhaustion.",
    },
  ];

  return (
    <section className="section-y border-b border-hairline">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Methodology</span>
          <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
            The RheAligned Method
          </h2>
          <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-muted-foreground">
            A cognitive systems approach that bridges the gap between knowing and doing under
            pressure.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="panel panel-hover p-7">
              <span className="text-xs font-bold tracking-[0.18em] text-primary tabular-nums">
                PHASE {s.num}
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{s.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Supporting Tools */}
        <Reveal delay={0.2} className="mt-10 rounded-xl border border-hairline bg-card p-6 md:p-8">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Integrated Cognitive Toolset
          </h4>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {supportingTools.map((t) => (
              <div key={t.name} className="border-t border-hairline pt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ClientOutcomes({ testimonials }: { testimonials: Testimonial[] }) {
  const displayItems = testimonials.slice(0, 2);

  return (
    <section className="section-y border-b border-hairline bg-sand/30">
      <div className="shell">
        <Reveal>
          <span className="eyebrow">Client Outcomes</span>
          <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.4rem)] font-bold tracking-tight">
            Real shifts in leadership and peace of mind
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {displayItems.map((t, i) => (
            <Reveal
              key={t.id || t.role}
              delay={i * 0.08}
              className="panel flex flex-col justify-between bg-card p-8 shadow-sm"
            >
              <blockquote className="editorial text-[clamp(1.3rem,2.1vw,1.75rem)] leading-snug text-foreground">
                “{t.pull}”
              </blockquote>
              <div className="mt-8 border-t border-hairline pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="mt-8">
          <CTA to="/testimonials" tone="quiet">
            Read More Success Stories
          </CTA>
        </Reveal>
      </div>
    </section>
  );
}

function ForOrganizationsBand() {
  const orgServices = [
    {
      title: "Executive Coaching",
      desc: "One-on-one coaching for your leaders to strengthen decision-making, presence, and influence.",
    },
    {
      title: "Leadership Development Programs",
      desc: "Build a consistent coaching mindset and a common leadership language across your pipeline.",
    },
    {
      title: "Talent Management & L&D Consulting",
      desc: "Leverage 14+ years of global HR leadership to transform your talent strategy.",
    },
  ];

  const whyChoose = [
    "Scalable coaching solutions that reach beyond the executive suite.",
    "Leaders who coach and develop others, not just direct.",
    "A culture of resilience and growth mindset.",
    "Improved retention of high-potential talent.",
  ];

  return (
    <section className="relative overflow-hidden border-b border-hairline bg-deep py-20 text-deep-foreground">
      <Arc
        tone="light"
        core={false}
        className="pointer-events-none absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 opacity-25"
      />
      <div className="shell relative">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
            For Organizations
          </span>
          <h2 className="mt-4 max-w-[24ch] text-[clamp(1.85rem,3.4vw,2.75rem)] font-bold leading-tight text-white">
            Build a leadership culture that stays clear-headed under pressure.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-deep-foreground/90">
            <p>
              I partner with organizations to develop resilient, clear-thinking leaders who can
              navigate complexity, make sharper decisions, and influence across cultures.
            </p>
            <p>
              My work draws on 14 years inside global HR at BP, Tata Group, and Sainsbury's, where I
              built global mobility platforms, shaped leadership pipelines, and partnered with
              business leaders through transformation and ambiguity.
            </p>
          </div>
        </Reveal>

        {/* 3 Services Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {orgServices.map((s, i) => (
            <Reveal
              key={s.title}
              delay={0.1 + i * 0.06}
              className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-deep-foreground/80">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        {/* Why choose */}
        <Reveal delay={0.25} className="mt-12 border-t border-white/15 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">
            Why Organizations Choose This Work
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 text-teal-300 font-bold">✓</span>
                <span className="text-sm leading-relaxed text-deep-foreground/90">{point}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-10">
          <CTAWithMicro
            to="/contact"
            tone="light"
            microClassName="text-white/80"
            micro="Customized to your needs · Virtual or in-person"
          >
            Discuss an Organizational Engagement
          </CTAWithMicro>
        </Reveal>
      </div>
    </section>
  );
}

function HomepageInsightsPreview({ articles }: { articles: Article[] }) {
  const previewArticles = articles.slice(0, 3);

  return (
    <section className="section-y border-b border-hairline bg-card">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <span className="eyebrow">Insights & Writing</span>
            <h2 className="mt-3 text-[clamp(1.75rem,2.8vw,2.3rem)] font-bold tracking-tight">
              Practical perspectives on clarity & leadership
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <CTA to="/insights" tone="quiet">
              View All Articles →
            </CTA>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {previewArticles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <Link
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight leading-snug group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {a.excerpt}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-primary">
                    <span>Read insight</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-sand/60 py-20">
      <Arc
        core={false}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 opacity-40"
      />
      <div className="shell relative">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-[22ch] text-[clamp(2rem,3.4vw,2.85rem)] font-bold leading-tight">
            You know what you need to do. Let's help you do it consistently.
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Individual Column */}
          <Reveal delay={0.08} className="panel flex flex-col justify-between bg-card p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                For Individuals
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Book a free 30-minute discovery call. No obligation. Just a conversation about where
                you are and where you want to go.
              </p>
            </div>
            <div className="mt-8">
              <CTAWithMicro to="/contact" micro="No obligation · Virtual, any time zone">
                Book a free 30-minute discovery call
              </CTAWithMicro>
            </div>
          </Reveal>

          {/* Organization Column */}
          <Reveal delay={0.14} className="panel flex flex-col justify-between bg-card p-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                For Organizations
              </span>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Let's discuss how coaching can shift your leadership culture, support retention, and
                build performance that lasts.
              </p>
            </div>
            <div className="mt-8">
              <CTAWithMicro
                to="/contact"
                tone="outline"
                micro="Customized to your needs · Virtual or in-person"
              >
                Discuss an Organizational Engagement
              </CTAWithMicro>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const { articles, testimonials, settings } = Route.useLoaderData();

  return (
    <>
      <Hero settings={settings} />
      <AudienceChips />
      <WhatIHelpWith />
      <TheRheAlignedMethod />
      <ClientOutcomes testimonials={testimonials} />
      <ForOrganizationsBand />
      <HomepageInsightsPreview articles={articles} />
      <FinalCTASection />
    </>
  );
}
