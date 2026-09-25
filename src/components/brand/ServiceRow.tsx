import { useState, type ReactNode } from "react";

/**
 * Editorial service row: large type, thin separator, small circular marker and a
 * quiet expand. Reads as an architecture of services rather than a card grid.
 */
export function ServiceRow({
  index,
  name,
  lede,
  children,
  defaultOpen = false,
}: {
  index: number;
  name: string;
  lede: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="group rounded-2xl border border-hairline bg-card px-5 shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-lift)] md:px-7">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-5 py-7 text-left md:gap-8 md:py-9"
      >
        <span className="mt-1 text-[11px] font-semibold tracking-[0.16em] text-primary tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0">
          <span className="block text-[clamp(1.15rem,2.1vw,1.6rem)] font-semibold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary">
            {name}
          </span>
          <span className="mt-3 block max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
            {lede}
          </span>
        </span>
        <span
          className="relative mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-500"
          style={{
            borderColor: open ? "var(--primary)" : "var(--hairline)",
            background: open ? "color-mix(in oklab, var(--primary) 8%, transparent)" : "transparent",
          }}
          aria-hidden="true"
        >
          <span className="block h-px w-3 bg-primary" />
          <span
            className="absolute block h-3 w-px bg-primary transition-transform duration-500"
            style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
          />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-9 pl-0 md:pl-[52px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
