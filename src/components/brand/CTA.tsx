import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "solid" | "outline" | "quiet" | "light";

const base =
  "group relative inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const tones: Record<Tone, string> = {
  solid:
    "bg-deep text-deep-foreground shadow-[0_10px_24px_-14px_color-mix(in_oklab,var(--deep)_75%,transparent)] hover:bg-primary hover:-translate-y-0.5",
  outline:
    "border border-hairline bg-card text-foreground hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-16px_color-mix(in_oklab,var(--deep)_60%,transparent)]",
  quiet:
    "rounded-none px-0 py-1 text-sm font-semibold tracking-wide text-primary after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-400 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100",
  light:
    "bg-white text-deep font-semibold shadow-md hover:bg-sand hover:text-deep hover:-translate-y-0.5 transition-all",
};

function Marker({ tone }: { tone: Tone }) {
  if (tone === "quiet") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 text-primary transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
      >
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="13 6 19 12 13 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative block h-[9px] w-[9px] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1",
        tone === "light" ? "bg-deep" : tone === "solid" ? "bg-deep-foreground" : "bg-primary",
      )}
    >
      <span
        className={cn(
          "absolute -inset-[5px] rounded-full border opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-inset-[8px] group-hover:opacity-100",
          tone === "light"
            ? "border-deep/40"
            : tone === "solid"
              ? "border-deep-foreground/50"
              : "border-primary/50",
        )}
      />
    </span>
  );
}

export function CTA({
  to,
  href,
  children,
  tone = "solid",
  className,
}: {
  to?: string | undefined;
  href?: string | undefined;
  children: ReactNode;
  tone?: Tone | undefined;
  className?: string | undefined;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <Marker tone={tone} />
    </>
  );

  if (href) {
    return (
      <a href={href} className={cn(base, tones[tone], className)}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} className={cn(base, tones[tone], className)}>
      {inner}
    </Link>
  );
}

export function CTAWithMicro({
  to,
  href,
  children,
  micro = "No obligation · Virtual, any time zone",
  tone = "solid",
  className,
  microClassName,
  align = "start",
}: {
  to?: string | undefined;
  href?: string | undefined;
  children: ReactNode;
  micro?: string | undefined;
  tone?: Tone | undefined;
  className?: string | undefined;
  microClassName?: string | undefined;
  align?: "start" | "center" | "end" | undefined;
}) {
  return (
    <div
      className={cn(
        "inline-flex flex-col gap-1.5",
        align === "center" && "items-center text-center",
        align === "end" && "items-end text-right",
        align === "start" && "items-start",
        className,
      )}
    >
      <CTA to={to} href={href} tone={tone}>
        {children}
      </CTA>
      {micro && (
        <span
          className={cn(
            "text-[12px] text-muted-foreground tracking-wide font-normal",
            microClassName,
          )}
        >
          {micro}
        </span>
      )}
    </div>
  );
}
