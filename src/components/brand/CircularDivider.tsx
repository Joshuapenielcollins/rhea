/** A hairline with a ring node on it - the connective tissue between chapters. */
export function CircularDivider({ align = "left" }: { align?: "left" | "center" }) {
  return (
    <div className="shell" aria-hidden="true">
      <div className="relative h-px w-full bg-hairline">
        <span
          className="absolute -top-[5px] block h-[11px] w-[11px] rounded-full border border-primary/60 bg-background"
          style={{ left: align === "center" ? "calc(50% - 5px)" : "0" }}
        />
      </div>
    </div>
  );
}
