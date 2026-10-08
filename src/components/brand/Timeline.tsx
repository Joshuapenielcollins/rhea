export type Milestone = {
  org: string;
  role: string;
  meta?: string;
  current?: boolean;
};

/**
 * Vertical career progression: one continuous line, small circular milestones.
 */
export function Timeline({ items }: { items: Milestone[] }) {
  return (
    <ol className="relative">
      <span className="absolute left-[7px] top-3 bottom-3 w-px bg-hairline" aria-hidden="true" />
      {items.map((m) => (
        <li
          key={m.org}
          className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 pb-9 last:pb-0 md:gap-7"
        >
          <span
            className="relative z-10 mt-[6px] block h-[15px] w-[15px] shrink-0 rounded-full bg-background transition-all duration-500"
            style={{
              boxShadow: m.current
                ? "inset 0 0 0 5px var(--primary)"
                : "inset 0 0 0 1px var(--hairline)",
            }}
            aria-hidden="true"
          />
          <div className="min-w-0 md:grid md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] md:items-baseline md:gap-7">
            <p className="text-[clamp(1.05rem,1.7vw,1.3rem)] font-semibold tracking-tight">
              {m.org}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground md:mt-0">
              {m.role}
              {m.meta ? (
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em]">
                  {m.meta}
                </span>
              ) : null}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
