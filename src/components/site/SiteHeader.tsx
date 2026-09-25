import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CTA } from "@/components/brand/CTA";
import logoUrl from "@/assets/rhealigned-logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

function Wordmark() {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="RheAligned, home">
      <img
        src={logoUrl}
        alt="RheAligned — Clarity, Confidence, Influence"
        className="h-auto w-[clamp(10.5rem,18vw,14rem)] object-contain"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md transition-colors duration-500"
      style={{ borderColor: scrolled ? "var(--hairline)" : "transparent" }}
    >
      <div
        className="shell flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height: scrolled ? 64 : 78 }}
      >
        <Wordmark />

        <nav
          className="hidden items-center gap-1 rounded-full border border-hairline bg-card/70 px-2 py-1.5 backdrop-blur lg:flex"
          aria-label="Primary"
        >
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ "data-active": "true" }}
              className="rounded-full px-3.5 py-1.5 text-[13.5px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground data-[active=true]:bg-secondary data-[active=true]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTA to="/contact" tone="outline" className="px-5 py-2 text-[13px]">
            Book a Conversation
          </CTA>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
            <line x1="4" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1" />
            <line x1="4" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="1" />
            <circle
              cx={open ? 20 : 4}
              cy="9"
              r="2.5"
              fill="var(--primary)"
              style={{ transition: "all 350ms var(--ease-calm)" }}
            />
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="shell border-t border-hairline pb-8 pt-6 lg:hidden" aria-label="Primary">
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold tracking-tight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTA to="/contact">Book a Conversation</CTA>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
