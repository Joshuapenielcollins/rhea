import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { CTAWithMicro } from "@/components/brand/CTA";
import { getTestimonials } from "@/lib/sanity";
import { type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/testimonials")({
  loader: async () => {
    const testimonials = await getTestimonials();
    return { testimonials };
  },
  head: () => ({
    meta: [
      {
        title: "What Leaders Say About Rhea | Client Breakthroughs | RheAligned",
      },
      {
        name: "description",
        content:
          "Client breakthroughs and outcomes from executive coaching with Rhea Bulsara Sidhva. Concrete shifts in decision-making, resilience, influence, and leadership clarity.",
      },
      {
        property: "og:title",
        content: "What Leaders Say About Rhea | RheAligned Coaching",
      },
      {
        property: "og:description",
        content:
          "Read what senior leaders, founders and professionals say about coaching breakthroughs with Rhea Bulsara Sidhva.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const categories = [
  "All",
  "Leadership & Politics",
  "Emotional Agility",
  "Founders & Business",
  "Resilience & Team",
] as const;

function Testimonials() {
  const { testimonials } = Route.useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === "All") return testimonials;
    return testimonials.filter((t: Testimonial) => t.category === selectedCategory);
  }, [testimonials, selectedCategory]);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/25">
        <div className="shell pb-14 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Client Impact & Breakthroughs</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 max-w-[22ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              What Leaders Say About Rhea
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-muted-foreground">
              Executive coaching for leaders who want clarity, resilience, and impact without the
              politics, overthinking, or burnout. The focus is on concrete breakthroughs and shifts
              in internal operating systems.
            </p>
          </Reveal>

          {/* Categories Filter */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCategory(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  selectedCategory === c
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-hairline bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-y border-b border-hairline">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-2">
            {filteredTestimonials.map((t, i) => (
              <Reveal
                key={t.id}
                delay={i * 0.05}
                className="panel flex flex-col justify-between rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span className="rounded-full bg-sand px-3 py-1 font-semibold text-foreground/80">
                      {t.category}
                    </span>
                    <span className="font-semibold uppercase tracking-wider text-primary">
                      {t.role}
                    </span>
                  </div>

                  {/* Pull quote */}
                  <blockquote className="mt-6 editorial text-[clamp(1.25rem,2vw,1.6rem)] leading-snug text-foreground">
                    “{t.pull}”
                  </blockquote>

                  {/* Breakthrough Narrative */}
                  <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">
                    {t.breakthrough}
                  </p>
                </div>

                {/* Key Insight Box */}
                <div className="mt-6 border-t border-hairline pt-5">
                  <div className="rounded-xl border border-primary/20 bg-primary/6 p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Key Breakthrough
                    </span>
                    <p className="mt-1 text-xs font-medium text-foreground leading-relaxed">
                      {t.keyLearning}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Copy Block from Client Document */}
      <section className="section-y border-b border-hairline bg-sand/30">
        <div className="shell max-w-3xl">
          <Reveal>
            <span className="eyebrow">The Coaching Partnership</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Mindset-level, purposeful change.
            </h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-muted-foreground">
              <p>
                Rhea helps senior leaders, founders, and People teams move from overwhelm to
                intentional action. Her clients describe her as deeply empathetic, insight-driven,
                and practical. She doesn't hand out answers; she creates the space for leaders to
                find their own, then helps them build a clear execution plan.
              </p>
              <p>
                Whether it's navigating complex workplace politics, building a more self-sufficient
                team, communicating under pressure, or redefining resilience, the work focuses on
                the cognitive system underneath.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA with Calendly link */}
      <section className="py-20 bg-card">
        <div className="shell flex flex-wrap items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Start your own breakthrough conversation.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A free 30-minute discovery call to explore your cognitive roadblocks.
            </p>
          </div>
          <CTAWithMicro
            href="https://calendly.com/rhea-rhealigned/discovery-call-with-rhea"
            micro="No obligation · Virtual, any time zone"
          >
            Book a free 30-minute discovery call
          </CTAWithMicro>
        </div>
      </section>
    </>
  );
}
