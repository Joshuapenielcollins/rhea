/**
 * One controlled piece of circular geometry: a single large ring with one inner
 * ring and one core. Used once per section at most, never stacked or scattered.
 */
export function Arc({
  className,
  tone = "primary",
  core = true,
  drift = true,
}: {
  className?: string;
  tone?: "primary" | "light";
  core?: boolean;
  drift?: boolean;
}) {
  const stroke = tone === "light" ? "var(--deep-foreground)" : "var(--primary)";
  const opacity = tone === "light" ? 0.28 : 0.35;

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className={drift ? "ring-drift" : undefined} style={{ transformOrigin: "200px 200px" }}>
        <circle
          cx="200"
          cy="200"
          r="186"
          fill="none"
          stroke={stroke}
          strokeOpacity={opacity}
          strokeWidth="1"
          strokeDasharray="620 550"
        />
      </g>
      <circle
        cx="200"
        cy="200"
        r="122"
        fill="none"
        stroke={stroke}
        strokeOpacity={opacity * 0.8}
        strokeWidth="1"
      />
      {core ? (
        <circle
          cx="200"
          cy="200"
          r="42"
          fill={stroke}
          fillOpacity={tone === "light" ? 0.12 : 0.08}
          stroke={stroke}
          strokeOpacity={opacity}
          strokeWidth="1"
        />
      ) : null}
    </svg>
  );
}
