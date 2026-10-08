import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export type NarrativeItem = {
  title: string;
  body: ReactNode;
};

function Item({
  item,
  index,
  tone,
}: {
  item: NarrativeItem;
  index: number;
  tone: "light" | "deep";
}) {
  const ref = useRef<HTMLLIElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(ref, { once: false, margin: "-45% 0px -45% 0px" });
  const active = reduced ? true : inView;

  const line = tone === "deep" ? "border-deep-foreground/15" : "border-hairline";
  const dim = tone === "deep" ? "text-deep-foreground/70" : "text-muted-foreground";

  return (
    <li ref={ref} className={`border-t ${line} first:border-t-0`}>
      <motion.div
        animate={reduced ? {} : { opacity: active ? 1 : 0.45, y: active ? 0 : 6 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 py-8 md:gap-7 md:py-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-primary tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="relative block h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-700"
            style={{
              background: active ? "var(--primary)" : "transparent",
              boxShadow: active
                ? "0 0 0 5px color-mix(in oklab, var(--primary) 14%, transparent)"
                : "inset 0 0 0 1px var(--hairline)",
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-[clamp(1.05rem,1.6vw,1.3rem)] font-semibold leading-snug tracking-tight">
            {item.title}
          </h3>
          <div className={`mt-3 max-w-[58ch] text-[15px] leading-relaxed ${dim}`}>{item.body}</div>
        </div>
      </motion.div>
    </li>
  );
}

/**
 * Signature pattern: an anchored narrative column on the left, content scrolling
 * on the right, with the item in the reader's focus becoming active.
 * On small screens it degrades to a clean numbered sequence.
 */
export function StickyNarrative({
  eyebrow,
  title,
  intro,
  items,
  footer,
  tone = "light",
}: {
  eyebrow: string;
  title?: ReactNode;
  intro?: ReactNode;
  items: NarrativeItem[];
  footer?: ReactNode;
  tone?: "light" | "deep";
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-16">
      <div className="lg:sticky lg:top-[104px] lg:self-start lg:pb-10">
        <span
          className="eyebrow"
          style={tone === "deep" ? { color: "inherit", opacity: 0.75 } : undefined}
        >
          {eyebrow}
        </span>
        {title ? (
          <h2 className="mt-5 max-w-[20ch] text-[clamp(1.5rem,2.6vw,2.05rem)] leading-[1.12]">
            {title}
          </h2>
        ) : null}
        {intro ? (
          <p
            className={`mt-4 max-w-[38ch] text-[15px] leading-relaxed ${
              tone === "deep" ? "text-deep-foreground/70" : "text-muted-foreground"
            }`}
          >
            {intro}
          </p>
        ) : null}
        {footer ? <div className="mt-7">{footer}</div> : null}
      </div>

      <ul className="min-w-0">
        {items.map((item, i) => (
          <Item key={item.title} item={item} index={i} tone={tone} />
        ))}
      </ul>
    </div>
  );
}
