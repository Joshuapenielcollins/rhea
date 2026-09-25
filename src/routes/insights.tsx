import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { RingMarker } from "@/components/brand/RingMarker";
import { CTA } from "@/components/brand/CTA";

export const Route = createFileRoute("/insights")({
  component: Insights,
  head: () => ({
    meta: [
      { title: "Leadership Insights & Coaching Articles | RheAligned" },
      {
        name: "description",
        content:
          "Practical insights on leadership, mindset and cognitive clarity from executive coach Rhea Bulsara, drawn from 14+ years in global HR.",
      },
      { property: "og:title", content: "Leadership Insights & Coaching Articles | RheAligned" },
      {
        property: "og:description",
        content:
          "Practical insights on leadership, mindset and cognitive clarity from executive coach Rhea Bulsara.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

const categories = [
  "Leadership and presence",
  "Mindset and cognitive clarity",
  "Identity and self-awareness",
  "Everyday actions for overthinking and anxiety",
  "Perspective as a leadership skill",
];

const articles = [
  {
    title: "Your Thinking Isn't Free, Invest It Wisely",
    body: "Most of us have worked out or played a sport, and how hard we push comes down to mindset. Tell yourself you're tired and your body obliges. The same thing happens in leadership. Who you are as a leader is the sum total of your thoughts, which means every replayed failure and every negative label is an investment in limitation.",
  },
  {
    title: "Your Title Isn't Who You Are",
    body: "I walked into a session with twelve refugees in Hong Kong thinking I'd be the one teaching. Our topic was self-identity, built around one question: who are you? Most of us answer with roles. Roles change. When I asked the group again, not one person answered with a job title.",
  },
  {
    title: "One Small Action: Overthinking",
    body: "The leaders I coach don't fail for lack of intelligence or drive. They fail because their own minds become the bottleneck. Most executives keep thinking and hope clarity will appear on its own. It doesn't. You don't think your way out of overthinking, you write your way out.",
  },
  {
    title: "One Small Action: Anxiety",
    body: "Anxiety doesn't respond to logic, it responds to biology. When it rises, your breathing goes shallow and fast before you've noticed. Most executives try to think their way out. Your body believes physical signals faster than mental ones, which is why breathing works when reasoning won't.",
  },
  {
    title: "The Power of Perspective: \u201cThey're Just Friends You Haven't Made Yet\u201d",
    body: "I overheard two children at school drop-off. One was anxious about not knowing anyone in her class. The other said the other people are just friends she hasn't made yet. In one sentence, scarcity became curiosity. Leaders face that same fork every day, and perspective is the competitive advantage most of us underuse.",
  },
];

function Insights() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="shell pb-14 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Insights</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.06]">
              Practical insights on leadership, mindset and cognitive clarity.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
              Drawn from 14+ years of corporate experience and 350+ hours of coaching practice. No
              fluff. Just frameworks you can use.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {categories.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <RingMarker size={14} />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          {articles.map((a, i) => (
            <Reveal
              as="article"
              key={a.title}
              delay={i * 0.05}
              className="grid gap-6 border-t border-hairline py-10 last:border-b md:grid-cols-[0.9fr_1.1fr] md:gap-10"
            >
              <h2 className="max-w-[24ch] text-[clamp(1.25rem,2vw,1.6rem)] leading-snug">
                {a.title}
              </h2>
              <p className="max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[36ch] text-xl font-semibold tracking-tight leading-snug">
            Get practical leadership insights delivered to your inbox.
          </p>
          <CTA href="mailto:rhea@rhealigned.com?subject=Subscribe%20to%20Insights">
            Subscribe to Insights
          </CTA>
        </div>
      </section>
    </>
  );
}
