export type CaseStudyData = {
  title?: string;
  who: string;
  challenge: string;
  approach: string;
  outcome: string;
};

/**
 * Editorial case-study layout: large index number, descriptor only (never a
 * name), and a Challenge → Approach → Outcome progression marked by a small
 * circular indicator.
 */
export function CaseStudy({ data, index }: { data: CaseStudyData; index: number }) {
  const rows = [
    { k: "Challenge", v: data.challenge, active: false },
    { k: "Approach", v: data.approach, active: false },
    { k: "Outcome", v: data.outcome, active: true },
  ];

  return (
    <article className="grid gap-8 border-t border-hairline py-10 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-14 md:py-14">
      <div>
        <span className="block text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none tracking-tight text-primary/25 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        {data.title ? (
          <h3 className="mt-5 max-w-[16ch] text-[clamp(1.25rem,2.3vw,1.75rem)] uppercase leading-tight">
            {data.title}
          </h3>
        ) : null}
        <p className="mt-4 max-w-[30ch] text-[11px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
          {data.who}
        </p>
      </div>

      <dl className="relative">
        <span
          className="absolute left-[5px] top-3 bottom-3 w-px bg-hairline"
          aria-hidden="true"
        />
        {rows.map((row) => (
          <div key={row.k} className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 pb-7 last:pb-0">
            <span
              className="relative z-10 mt-[7px] block h-[11px] w-[11px] shrink-0 rounded-full bg-background"
              style={{
                boxShadow: row.active
                  ? "inset 0 0 0 4px var(--primary)"
                  : "inset 0 0 0 1px var(--hairline)",
              }}
              aria-hidden="true"
            />
            <div className="min-w-0">
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {row.k}
              </dt>
              <dd className="mt-2 max-w-[56ch] text-[15px] leading-relaxed">{row.v}</dd>
            </div>
          </div>
        ))}
      </dl>
    </article>
  );
}
