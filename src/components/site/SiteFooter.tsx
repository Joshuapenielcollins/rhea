import { Link } from "@tanstack/react-router";
import logoUrl from "@/assets/rhealigned-logo.png";

const exploreNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" },
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
      <div className="shell relative grid gap-10 py-14 md:grid-cols-[1.3fr_1.1fr_1fr]">
        {/* Brand Column */}
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
          </Link>
          <p className="mt-3 text-xs leading-relaxed text-deep-foreground/60 max-w-xs">
            Executive & leadership coaching for senior leaders, founders, and organisations.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-deep-foreground/50 mb-3">
            Explore
          </div>
          <nav aria-label="Footer Navigation">
            <ul className="grid grid-cols-2 gap-y-2.5 text-sm text-deep-foreground/75">
              {exploreNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="transition-colors hover:text-deep-foreground focus:outline-none focus:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact & Social Column */}
        <div className="text-sm text-deep-foreground/75 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-deep-foreground/50">
            Contact & Connect
          </div>
          <div>
            <a
              href="mailto:rhea@rhealigned.com"
              className="block font-medium text-deep-foreground hover:underline"
            >
              rhea@rhealigned.com
            </a>
            <a
              href="https://www.rhealigned.com"
              className="text-xs text-deep-foreground/70 hover:text-deep-foreground"
            >
              www.rhealigned.com
            </a>
          </div>
          <div className="flex flex-col gap-1.5 pt-1 text-xs">
            <a
              href="https://www.linkedin.com/in/rhea-bulsara-sidhva-38070a44/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-deep-foreground"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/rhea.aligned/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-deep-foreground"
            >
              Instagram (@rhea.aligned) ↗
            </a>
          </div>
          <p className="pt-2 text-xs leading-relaxed text-deep-foreground/60">
            Hong Kong · UK · UAE · India · Coaching available virtually across all time zones.
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="shell relative flex flex-wrap items-center justify-between gap-4 border-t border-deep-foreground/15 py-5 text-xs text-deep-foreground/60">
        <span>© {new Date().getFullYear()} RheAligned. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link to="/privacy-policy" className="hover:text-deep-foreground">
            Privacy Policy
          </Link>
          <span>·</span>
          <span>Clarity. Confidence. Influence.</span>
        </div>
      </div>
    </footer>
  );
}
