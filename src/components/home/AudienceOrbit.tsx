import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "motion/react";

export type Audience = {
  title: string;
  body: string;
};

function AudienceItem({
  item,
  index,
  active,
  onActivate,
}: {
  item: Audience;
  index: number;
  active: boolean;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { margin: "-48% 0px -48% 0px" });

  useEffect(() => {
    if (inView) onActivate(index);
  }, [inView, index, onActivate]);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        onMouseEnter={() => onActivate(index)}
        onFocus={() => onActivate(index)}
        onClick={() => onActivate(index)}
        className="group relative flex w-full items-start gap-5 rounded-2xl border px-5 py-6 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-7 md:py-7"
        style={{
          borderColor: active
            ? "color-mix(in oklab, var(--primary) 40%, transparent)"
            : "var(--hairline)",
          background: active ? "var(--card)" : "transparent",
          boxShadow: active ? "var(--shadow-soft)" : "none",
          transform: active ? "translateY(-2px)" : "none",
        }}
      >
        <span
          className="absolute left-0 top-6 block w-[3px] rounded-full bg-primary transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ height: active ? "calc(100% - 3rem)" : "0px", opacity: active ? 1 : 0 }}
          aria-hidden="true"
        />
        <span className="mt-1 flex shrink-0 items-center gap-3">
          <span className="text-[11px] font-semibold tracking-[0.16em] text-primary tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="relative block h-2.5 w-2.5 rounded-full transition-all duration-700"
            style={{
              background: active ? "var(--primary)" : "transparent",
              boxShadow: active
                ? "0 0 0 6px color-mix(in oklab, var(--primary) 14%, transparent)"
                : "inset 0 0 0 1px var(--hairline)",
            }}
          />
        </span>
        <span className="min-w-0">
          <span
            className="block text-[clamp(1.05rem,1.7vw,1.3rem)] font-semibold leading-snug tracking-tight transition-colors duration-500"
            style={{
              color: active
                ? "var(--foreground)"
                : "color-mix(in oklab, var(--foreground) 62%, transparent)",
            }}
          >
            {item.title}
          </span>
          <span
            className="mt-3 block max-w-[54ch] text-[15px] leading-relaxed text-muted-foreground transition-opacity duration-500"
            style={{ opacity: active ? 1 : 0.55 }}
          >
            {item.body}
          </span>
        </span>
      </button>
    </li>
  );
}

/**
 * Sticky-left orbit dial, scrolling-right audience list.
 * The dial rotates to the audience in the reader's focus; hover and focus
 * override it. On mobile it degrades to a clean vertical sequence.
 */
export function AudienceOrbit({ audiences }: { audiences: Audience[] }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const current = audiences[active];
  const step = 360 / audiences.length;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
      {/* Sticky dial */}
      <div className="hidden lg:sticky lg:top-[112px] lg:block lg:self-start">
        <div className="relative mx-auto aspect-square w-full max-w-[380px]">
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle
              cx="200"
              cy="200"
              r="168"
              fill="none"
              stroke="var(--hairline)"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="118"
              fill="none"
              stroke="var(--primary)"
              strokeOpacity="0.22"
              strokeWidth="1"
            />
            <circle
              cx="200"
              cy="200"
              r="66"
              fill="none"
              stroke="var(--deep)"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          </svg>

          {/* Rotating pointer ring */}
          <motion.div
            className="absolute inset-0"
            animate={reduced ? {} : { rotate: active * step }}
            transition={{ type: "spring", stiffness: 60, damping: 18, mass: 0.9 }}
          >
            <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
              <line x1="200" y1="134" x2="200" y2="34" stroke="var(--primary)" strokeWidth="1.5" />
              <circle cx="200" cy="32" r="9" fill="var(--primary)" />
              <circle
                cx="200"
                cy="32"
                r="16"
                fill="none"
                stroke="var(--primary)"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Dots for every audience */}
          {audiences.map((item, i) => {
            const a = (i / audiences.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.round((50 + (Math.cos(a) * 168) / 4) * 100) / 100;
            const y = Math.round((50 + (Math.sin(a) * 168) / 4) * 100) / 100;
            const isActive = i === active;
            return (
              <button
                key={item.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span
                  className="mx-auto block h-2 w-2 rounded-full transition-all duration-500"
                  style={{
                    background: isActive ? "var(--primary)" : "var(--hairline)",
                    transform: isActive ? "scale(1.4)" : "scale(1)",
                  }}
                />
                <span className="sr-only">{item.title}</span>
              </button>
            );
          })}

          {/* Core: the active audience label */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="grid h-[132px] w-[132px] place-items-center rounded-full bg-deep px-4 text-center text-deep-foreground">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={active}
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={reduced ? {} : { opacity: 1, y: 0 }}
                  exit={reduced ? {} : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  <span className="block text-2xl font-bold tracking-tight tabular-nums">
                    {String(active + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-deep-foreground/65">
                    of {String(audiences.length).padStart(2, "0")}
                  </span>
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-[30ch] text-[14px] leading-relaxed text-muted-foreground">
          Six kinds of leader, one shared need: an operating system that holds under pressure.
        </p>
      </div>

      <ul className="flex min-w-0 flex-col gap-3">
        {audiences.map((item, i) => (
          <AudienceItem
            key={item.title}
            item={item}
            index={i}
            active={i === active}
            onActivate={setActive}
          />
        ))}
      </ul>

      <span className="sr-only" aria-live="polite">
        {current?.title}
      </span>
    </div>
  );
}
