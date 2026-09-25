import { cn } from "@/lib/utils";

/** A small concentric node used as a bullet, step marker or list anchor. */
export function RingMarker({
  active = false,
  size = 22,
  className,
}: {
  active?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 24 24" className="h-full w-full">
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="none"
          stroke="var(--primary)"
          strokeOpacity={active ? 0.9 : 0.3}
          strokeWidth="1"
          style={{ transition: "stroke-opacity 400ms var(--ease-calm)" }}
        />
        <circle
          cx="12"
          cy="12"
          r={active ? 5.5 : 3}
          fill="var(--primary)"
          fillOpacity={active ? 1 : 0.5}
          style={{ transition: "all 400ms var(--ease-calm)" }}
        />
      </svg>
    </span>
  );
}
