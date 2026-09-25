export type Metric = { value: string; label: string };

export function MetricGrid({
  metrics,
  tone = "light",
  className = "",
}: {
  metrics: Metric[];
  tone?: "light" | "deep";
  className?: string;
}) {
  const border = tone === "deep" ? "border-deep-foreground/15" : "border-hairline";
  const label = tone === "deep" ? "text-deep-foreground/65" : "text-muted-foreground";

  return (
    <dl className={`grid grid-cols-2 gap-3 sm:grid-cols-4 ${className}`}>
      {metrics.map((m) => (
        <div
          key={m.label}
          className={`rounded-2xl border ${border} ${
            tone === "deep" ? "bg-deep-foreground/5" : "bg-card shadow-[var(--shadow-soft)]"
          } px-5 py-6`}
        >
          <dt className="sr-only">{m.label}</dt>
          <dd>
            <span className="block text-[clamp(1.5rem,2.6vw,2rem)] font-bold tracking-tight text-primary tabular-nums">
              {m.value}
            </span>
            <span
              className={`mt-2 block text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] ${label}`}
            >
              {m.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
