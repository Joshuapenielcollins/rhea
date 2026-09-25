import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { CTA } from "@/components/brand/CTA";
import { CaseStudy } from "@/components/brand/CaseStudy";
import { MetricGrid } from "@/components/brand/MetricGrid";
import { Timeline } from "@/components/brand/Timeline";

export const Route = createFileRoute("/work")({
  component: Work,
  head: () => ({
    meta: [
      { title: "Work Highlights & Client Transformations | Rhea Bulsara" },
      {
        name: "description",
        content:
          "Coaching and corporate work highlights from Rhea Bulsara, with client transformations across financial services, consulting and board-level leadership.",
      },
      { property: "og:title", content: "Work Highlights & Client Transformations | Rhea Bulsara" },
      {
        property: "og:description",
        content:
          "Coaching and corporate work highlights, with client transformations across financial services, consulting and board-level leadership.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
});

const corporate = [
  {
    org: "Tata Group",
    role: "Global HR Leader, Talent Management & Learning",
    industry: "Diversified conglomerate",
  },
  { org: "BP", role: "HR Leader, International Mobility", industry: "Oil & gas" },
  { org: "Sainsbury's", role: "HR Leader, Recruitment", industry: "Retail" },
];

const transformations = [
  {
    title: "From reactive to intentional",
    who: "Senior Professional, Consulting — India/UAE",
    challenge: "High reactivity and a habit of being overwhelmed by other people's opinions.",
    approach: "The Internal Operating System program, with a focus on objectivity training.",
    outcome:
      "Enhanced responsibilities at work, along with mental peace and a more intentional way of living.",
  },
  {
    title: "From silence to influence",
    who: "Senior Leader, Financial Sector — UK",
    challenge: "Staying silent when unprepared, and struggling to influence without formal authority.",
    approach: "Executive Coaching using the Expectation Scale and the PAUSE framework.",
    outcome: "Influence without authority, a more self-sufficient team, and recognition from management.",
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
    who: "Ops Head, Board Level, Chemical Engineering — Hong Kong",
    challenge: "Cognitive slowdown and unclear articulation in board meetings.",
    approach: "Resource strain identification paired with a cognitive clarity framework.",
    outcome: "Restored board-level clarity, sharper questioning and clearer articulation.",
  },
];

function Work() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="shell pb-14 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Work</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[20ch] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.06]">
              Coaching engagements and corporate experience.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground">
              My work spans industries and geographies. What follows is a selection of the corporate
              ground I've covered and the coaching engagements that came out of it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-[clamp(1.45rem,2.4vw,1.95rem)] leading-tight">
              Corporate engagements
            </h2>
          </Reveal>
          <div>
            <Timeline
              items={corporate.map((c) => ({ org: c.org, role: c.role, meta: c.industry }))}
            />
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                Across these roles I built global mobility platforms from scratch, drove talent
                programs that shaped leadership pipelines, and partnered with business leaders
                through growth, transformation and sustained ambiguity. The work spanned the UK,
                UAE, India and Hong Kong.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="text-[clamp(1.45rem,2.4vw,1.95rem)] leading-tight">
              Coaching engagements
            </h2>
          </Reveal>
          <div className="space-y-6 text-[15px] leading-relaxed text-muted-foreground">
            <Reveal delay={0.06}>
              <p>
                350+ hours of coaching practice with senior leaders, founders and professionals
                across financial services, technology, education, consulting, F&amp;B and
                professional services.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Clients are based across Hong Kong, the UK, the UAE, India and the USA, working in
                English and Hindi.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="border-l border-primary pl-6 text-foreground">
                Beyond one-to-one coaching, I've facilitated group work on self-identity, including
                a session with twelve refugees in Hong Kong that remains one of the most instructive
                rooms I've stood in.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Client transformations</span>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
              Client identities stay private. Each engagement is described by role, sector and
              geography.
            </p>
          </Reveal>

          <div className="mt-8">
            {transformations.map((t, i) => (
              <Reveal key={t.who} delay={i * 0.05}>
                <CaseStudy data={t} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-sand py-12">
        <div className="shell">
          <MetricGrid
            metrics={[
              { value: "350+", label: "Coaching hours" },
              { value: "14+", label: "Years corporate experience" },
              { value: "4", label: "Countries of experience" },
              { value: "ICF-ACC", label: "Certified coach" },
            ]}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[32ch] text-xl font-semibold tracking-tight leading-snug">
            Explore how we can work together.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTA to="/contact">Book a Conversation</CTA>
            <CTA to="/contact" tone="outline">
              Discuss an Organizational Engagement
            </CTA>
          </div>
        </div>
      </section>
    </>
  );
}
