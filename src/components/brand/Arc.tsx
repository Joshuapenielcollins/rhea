/**
 * Three concentric rings matching the RheAligned brand logo geometry.
 * Used once per section at most for clean, consistent elegance.
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
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false">
      {/* Outer ring */}
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
      {/* Middle ring */}
      <circle
        cx="200"
        cy="200"
        r="128"
        fill="none"
        stroke={stroke}
        strokeOpacity={opacity * 0.8}
        strokeWidth="1"
      />
      {/* Inner ring — 3rd circle matching RheAligned brand logo */}
      <circle
        cx="200"
        cy="200"
        r="70"
        fill="none"
        stroke={stroke}
        strokeOpacity={opacity * 0.65}
        strokeWidth="1"
      />
      {core ? (
        <circle
          cx="200"
          cy="200"
          r="26"
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
