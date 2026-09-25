import { motion, useReducedMotion } from "motion/react";

type ConcentricRingsProps = {
  /** number of rings drawn from the core outward */
  rings?: number;
  /** rotate the outer arcs slowly */
  drift?: boolean;
  className?: string;
  /** solid centre dot */
  core?: boolean;
};

/**
 * The core brand mark expanded: nested rings with a solid core.
 * Rings expand into place when the composition enters the viewport.
 */
export function ConcentricRings({
  rings = 4,
  drift = true,
  core = true,
  className,
}: ConcentricRingsProps) {
  const reduced = useReducedMotion();
  const steps = Array.from({ length: rings }, (_, i) => 46 - i * (40 / rings));

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className={drift && !reduced ? "ring-drift" : undefined}>
        <circle
          cx="50"
          cy="50"
          r={steps[0]}
          fill="none"
          stroke="var(--primary)"
          strokeOpacity="0.35"
          strokeWidth="0.4"
          strokeDasharray="1.2 3"
        />
      </g>
      {steps.map((r, i) => (
        <motion.circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke={i % 2 === 0 ? "var(--primary)" : "var(--deep)"}
          strokeOpacity={0.16 + i * 0.12}
          strokeWidth={0.35 + i * 0.1}
          initial={reduced ? false : { scale: 0.82, opacity: 0 }}
          whileInView={reduced ? {} : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "50% 50%" }}
        />
      ))}
      {core ? (
        <motion.circle
          cx="50"
          cy="50"
          r={Math.max(2.5, (steps[steps.length - 1] ?? 8) * 0.34)}
          fill="var(--primary)"
          initial={reduced ? false : { scale: 0, opacity: 0 }}
          whileInView={reduced ? {} : { scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: rings * 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "50% 50%" }}
        />
      ) : null}
    </svg>
  );
}
