import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { RingMarker } from "@/components/brand/RingMarker";
import { CTA } from "@/components/brand/CTA";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
  head: () => ({
    meta: [
      { title: "Coaching Testimonials | Rhea Bulsara Executive Coach" },
      {
        name: "description",
        content:
          "Read what leaders, founders and professionals say about coaching with Rhea Bulsara, from sharper decisions to influence without authority.",
      },
      { property: "og:title", content: "Coaching Testimonials | Rhea Bulsara Executive Coach" },
      {
        property: "og:description",
        content: "What leaders, founders and professionals say about coaching with Rhea Bulsara.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

type Entry = {
  pull: string;
  attribution: string;
  full: string[];
};

const entries: Entry[] = [
  {
    pull: "That shift, from expecting answers to discovering my own, was eye-opening.",
    attribution: "Professional, Multiple Sectors",
    full: [
      "I assumed coaching would be like mentorship, where I'd share my challenges and you'd offer solutions. But what actually happened was so different and so much more meaningful. You guided me to look inward, to pinpoint the areas where I felt unsure of myself and understand the deeper reasons behind those feelings.",
      "You helped me untangle that mess by pinpointing the most important place to begin and guiding me to develop a clear, practical execution plan. Having that structure gave me direction and momentum.",
      "Your active listening, thoughtful questioning, empathy, and ability to identify where to begin were incredibly impactful. You understood my struggles and made me feel heard without judgment. What stood out most was how you could sense exactly where to start, guiding me with clarity rather than pressure or judgment.",
    ],
  },
  {
    pull: "I don't second-guess anymore. I have a framework now.",
    attribution: "Senior Leader, Financial Sector - UK",
    full: [
      "The shift is remarkable. I went from staying silent when unprepared to pausing, revamping, and responding with confidence. My team is more self-sufficient now. They reach out more, they trust me more. The change in team dynamics has been recognized by management.",
      "I've gained influence without authority. The enthusiasm dip was unexpected but made sense. Less self-obsession means less dopamine from overthinking. That's progress.",
    ],
  },
  {
    pull: "Now I choose what deserves my energy. I've moved from being reactive to intentional.",
    attribution: "Senior Professional, Consulting Sector - India/UAE",
    full: [
      "I used to get upset by everything: workplace behavior, extended family, people's opinions. I'd replay things endlessly and lose mental peace. Now I choose what deserves my energy.",
      "The shift was scary initially, but now I understand. It's had a positive impact on my mental health and peace. I have more time and energy now, for my self-development and my kids. Being mindful has brought me closer to all my relationships.",
    ],
  },
  {
    pull: "I'm not trying to be perfect anymore. I'm building a system.",
    attribution: "Executive, Technology Sector - USA",
    full: [
      "The negative narration doesn't stop overnight. And I thought that was failure. I kept telling myself \u201cI'm trying, it doesn't stop.\u201d But that's natural. It takes time and consistent effort to make the change.",
      "Now I understand that. I have a method now: physical change, distraction, positive reinforcement.",
    ],
  },
];

const aboutRhea = [
  "She doesn't just hold space. She tracks actual behavioral change across sessions.",
  "She understands the real pressures we face, because she's faced them too. Not theory. Experience.",
  "She helped me see what I couldn't see. The patterns. The narratives. The things running in the background.",
  "She never hands you the answers. She creates space for you to find them yourself.",
];

function Item({ entry, index }: { entry: Entry; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal
      as="article"
      delay={index * 0.05}
      className="panel panel-hover relative overflow-hidden rounded-[1.5rem] p-7 md:p-10"
    >
      <span
        aria-hidden
        className="editorial pointer-events-none absolute -right-2 -top-6 select-none text-[8rem] leading-none text-primary/10 md:text-[10rem]"
      >
        &rdquo;
      </span>
      <div className="relative">
        <div className="flex items-center gap-3">
          <RingMarker size={16} active={open} />
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {entry.attribution}
          </p>
        </div>

        <blockquote className="mt-6 max-w-[24ch] editorial text-[clamp(1.6rem,3.1vw,2.35rem)] leading-[1.15]">
          {entry.pull}
        </blockquote>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="group/link mt-7 inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-primary transition-colors duration-300 hover:text-deep"
        >
          <span className="relative">
            {open ? "Close" : "Read the full testimonial"}
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:scale-x-100" />
          </span>
          <svg
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
            <polyline points="13 6 19 12 13 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="mt-6 max-w-[62ch] space-y-4 border-t border-hairline pt-6 text-[15px] leading-relaxed text-muted-foreground">
              {entry.full.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Testimonials() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="shell pb-14 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">Testimonials</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-[26ch] text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.08]">
              The most useful thing I can show you isn't my method. It's what changed for the people
              who've been through it, in their own words.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">
              Client identities stay private. Each voice is described by role, sector and geography.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">In their own words</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title max-w-[20ch]">What changed for the people who did the work.</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {entries.map((e, i) => (
              <Item key={e.attribution} entry={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-b border-hairline">
        <div className="shell">
          <Reveal>
            <span className="eyebrow">Working with Rhea</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="section-title max-w-[22ch]">What leaders say about working with Rhea.</h2>
          </Reveal>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {aboutRhea.map((q, i) => (
              <Reveal
                key={q}
                delay={i * 0.05}
                className="panel-quiet grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-[1.25rem] p-6"
              >
                <span className="ring-number">{String(i + 1).padStart(2, "0")}</span>
                <p className="max-w-[46ch] text-[clamp(1rem,1.6vw,1.15rem)] font-medium leading-snug tracking-tight">
                  {q}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="shell flex flex-wrap items-center justify-between gap-6">
          <p className="max-w-[32ch] text-xl font-semibold tracking-tight leading-snug">
            Start a conversation about where you are and where you want to go.
          </p>
          <CTA to="/contact">Book a Conversation</CTA>
        </div>
      </section>
    </>
  );
}
