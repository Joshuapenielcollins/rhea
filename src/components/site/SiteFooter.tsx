import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/rhealigned-logo.png";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-deep text-deep-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 h-[26rem] w-[26rem] rounded-full border border-deep-foreground/12"
      >
        <div className="absolute inset-16 rounded-full border border-deep-foreground/12" />
        <div className="absolute inset-32 rounded-full border border-deep-foreground/15" />
      </div>
      <div className="shell relative grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex flex-col" aria-label="RheAligned, home">
            <img
              src={logoUrl}
              alt="RheAligned - Clarity, Confidence, Influence"
              className="h-auto w-[min(17rem,75vw)] object-contain brightness-0 invert"
            />
            <p className="mt-4 text-sm font-semibold tracking-wide text-deep-foreground/90">
              Clarity. Confidence. Influence.
            </p>
            <p className="mt-1 text-xs text-deep-foreground/70">
              Precision thinking for ambitious leaders.
            </p>
          </Link>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-deep-foreground/70">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-deep-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-deep-foreground/70">
          <a
            href="mailto:rhea@rhealigned.com"
            className="block transition-colors hover:text-deep-foreground"
          >
            rhea@rhealigned.com
          </a>
          <a
            href="https://linkedin.com/in/rheacoaching"
            className="mt-2 block transition-colors hover:text-deep-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/rhealign.coaching"
            className="mt-2 block transition-colors hover:text-deep-foreground"
          >
            @rhealign.coaching
          </a>
          <p className="mt-4">Hong Kong · Coaching available virtually across all time zones.</p>
        </div>
      </div>
      <div className="shell relative flex items-center justify-between border-t border-deep-foreground/15 py-5 text-xs text-deep-foreground/60">
        <span>© {new Date().getFullYear()} RheAligned</span>
        <span>Precision thinking for ambitious leaders.</span>
      </div>
    </footer>
  );
}
