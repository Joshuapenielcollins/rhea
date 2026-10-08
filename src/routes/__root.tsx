import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-6xl">404</h1>
        <h2 className="mt-4 text-lg font-semibold tracking-tight">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-deep px-5 py-3 text-sm text-deep-foreground transition-colors hover:bg-primary"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-deep px-5 py-3 text-sm text-deep-foreground transition-colors hover:bg-primary"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-primary/40 px-5 py-3 text-sm transition-colors hover:border-primary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Executive and Leadership Coach | Rhea Bulsara Sidhva | RheAligned" },
      {
        name: "description",
        content:
          "Executive and leadership coaching for senior leaders and founders. Former Global HR Leader at BP, Tata Group, and Sainsbury's. ICF-ACC | 500+ Hours of Coaching Practice.",
      },
      { name: "author", content: "Rhea Bulsara Sidhva" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "RheAligned" },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#054049" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["ProfessionalService", "Organization"],
              "@id": "https://rhealigned.com/#organization",
              name: "RheAligned",
              alternateName: "RheAligned Executive Coaching",
              url: "https://rhealigned.com",
              logo: "https://rhealigned.com/favicon.png",
              slogan: "Clarity. Confidence. Influence.",
              description:
                "Executive and leadership coaching for senior leaders, founders, and global organizations. Cognitive systems-based coaching founded by former Global HR Leader Rhea Bulsara Sidhva.",
              founder: {
                "@type": "Person",
                "@id": "https://rhealigned.com/#rhea",
                name: "Rhea Bulsara Sidhva",
                jobTitle: "Executive and Leadership Coach",
                description:
                  "Former Global HR Leader at BP, Tata Group, and Sainsbury's. ICF-ACC certified executive coach with 500+ hours of coaching practice.",
                url: "https://rhealigned.com/about",
                sameAs: [
                  "https://linkedin.com/in/rheacoaching",
                  "https://instagram.com/rhealign.coaching",
                ],
                knowsAbout: [
                  "Executive Coaching",
                  "Leadership Development",
                  "Cognitive Systems",
                  "Emotional Resilience",
                  "Talent Strategy",
                  "Global Mobility",
                ],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hong Kong",
                addressCountry: "HK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.3193",
                longitude: "114.1694",
              },
              areaServed: [
                "Hong Kong",
                "United Kingdom",
                "United Arab Emirates",
                "India",
                "United States",
                "Singapore",
              ],
              email: "rhea@rhealigned.com",
              sameAs: [
                "https://linkedin.com/in/rheacoaching",
                "https://instagram.com/rhealign.coaching",
              ],
            },
            {
              "@type": "FAQPage",
              "@id": "https://rhealigned.com/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is RheAligned executive coaching?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "RheAligned is an executive and leadership coaching practice founded by Rhea Bulsara Sidhva. It focuses on cognitive operating systems, emotional agility, and practical leadership frameworks for senior executives, founders, and organizations.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who is Rhea Bulsara Sidhva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Rhea Bulsara Sidhva is an ICF-certified executive coach (ICF-ACC) and former Global HR Leader with 14+ years of multinational corporate experience at BP, Tata Group, and Sainsbury's, specializing in leadership pipelines, talent mobility, and executive clarity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What executive coaching programs does RheAligned provide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "RheAligned offers The Executive Recalibration, The Internal Operating System, The Implementation Dip Program, Cross-Cultural Clarity, and The Untangling Session for individuals, alongside tailored enterprise leadership development and talent consulting.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does RheAligned coach executives outside of Hong Kong?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. While headquartered in Hong Kong, RheAligned works virtually with senior executives, founders, and global teams across the UK, UAE, India, Singapore, and the United States across multiple time zones.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
