import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { CTA } from "@/components/brand/CTA";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      {
        title: "Thank you | RheAligned",
      },
      {
        name: "description",
        content: "Thank you for your message. I'll reply within one to two working days.",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <article className="min-h-[85vh] bg-background">
      {/* Hero Confirmation */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/25">
        <div className="shell pb-14 pt-14 lg:pt-20 max-w-3xl">
          <Reveal>
            <span className="eyebrow">Enquiry Received</span>
            <h1 className="mt-4 text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-tight text-foreground">
              Message received.
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground/90">
              Thank you. I'll reply within one to two working days.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Your message has come through and I'll read it properly. If you've shared what's
              happening and where you're stuck, that's enough for me to come back with something
              useful.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <main className="shell max-w-3xl py-12 sm:py-16 space-y-12">
        {/* Section 2: What happens next */}
        <section className="rounded-2xl border border-hairline bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            What happens next
          </h2>
          <ol className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/85">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1
              </span>
              <span>
                I'll read your message and reply by email within one to two working days.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2
              </span>
              <span>
                If it looks like a fit, I'll suggest a 30-minute discovery call. No pitch: we'll
                clarify what's happening, test fit, and agree whether there's a useful next step.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3
              </span>
              <span>
                If it isn't a fit, I'll say so, and point you somewhere more useful if I can.
              </span>
            </li>
          </ol>
        </section>

        {/* Section 3: If you'd rather not wait */}
        <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            If you'd rather not wait
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            You can book a discovery call directly. It's 30 minutes, no pitch, and the same
            conversation I'd suggest by email.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <CTA
              href="https://calendly.com/rhea-rhealigned/discovery-call-with-rhea"
              className="px-6 py-3"
            >
              Book a free discovery call
            </CTA>
            <span className="text-xs text-muted-foreground">
              Or reply to my email when it arrives, whichever is easier.
            </span>
          </div>
        </section>

        {/* Section 4: While you're here */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight text-foreground">While you're here</h2>
          <p className="text-sm text-muted-foreground">
            A few pages that might be useful in the meantime:
          </p>
          <div className="grid gap-4 sm:grid-cols-3 pt-2">
            <Link
              to="/about"
              className="group rounded-xl border border-hairline bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                About →
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                How I work, and why patterns matter more than gaps in capability.
              </p>
            </Link>
            <Link
              to="/services"
              className="group rounded-xl border border-hairline bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                Services →
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                The three ways to work together.
              </p>
            </Link>
            <Link
              to="/insights"
              className="group rounded-xl border border-hairline bg-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                Insights →
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Short, practical writing on the patterns that get in the way.
              </p>
            </Link>
          </div>
        </section>

        {/* Section 5: Direct contact */}
        <section className="border-t border-hairline pt-8">
          <h3 className="text-base font-bold text-foreground">Prefer email?</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Write directly to{" "}
            <a href="mailto:rhea@rhealigned.com" className="font-semibold text-primary hover:underline">
              rhea@rhealigned.com
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            If something has changed since you sent your message, or you'd like to add context, just
            reply to the confirmation or email me directly.
          </p>
        </section>

        {/* Section 6 & 7: Privacy line and closing */}
        <footer className="border-t border-hairline pt-6 text-xs text-muted-foreground space-y-3">
          <p>
            I use your details only to respond to your enquiry. I don't add you to a newsletter
            without your consent.{" "}
            <Link to="/privacy-policy" className="font-semibold text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
          <p className="font-semibold text-foreground">
            RheAligned | Clarity. Confidence. Influence.
          </p>
        </footer>
      </main>
    </article>
  );
}
