import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Arc } from "@/components/brand/Arc";
import { Reveal } from "@/components/brand/Reveal";
import { CTAWithMicro } from "@/components/brand/CTA";
import { type Article } from "@/lib/articles";
import { getArticles } from "@/lib/sanity";
import rheaPortrait from "@/assets/rhea-portrait.jpg";

export const Route = createFileRoute("/insights/")({
  loader: async () => {
    const articles = await getArticles();
    return { articles };
  },
  head: ({ loaderData }) => {
    const list = loaderData?.articles || [];
    return {
      meta: [
        {
          title: "Leadership Insights & Blog | Rhea Bulsara Sidhva | RheAligned",
        },
        {
          name: "description",
          content:
            "Practical insights on leadership, cognitive clarity, mindset, and executive presence from executive coach Rhea Bulsara Sidhva. Drawn from 14+ years in global HR.",
        },
        {
          property: "og:title",
          content: "Leadership Insights & Blog | RheAligned Executive Coaching",
        },
        {
          property: "og:description",
          content:
            "Evidence-based frameworks on mindset, decision-making, and leadership patterns for executives and founders.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://rhealigned.com/insights" },
        { property: "og:image", content: "https://rhealigned.com/og-image.jpg" },
        { property: "og:image:secure_url", content: "https://rhealigned.com/og-image.jpg" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "RheAligned Leadership Insights — Executive Coaching by Rhea Bulsara Sidhva",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Leadership Insights & Blog | RheAligned Executive Coaching",
        },
        {
          name: "twitter:description",
          content:
            "Evidence-based frameworks on mindset, decision-making, and leadership patterns for executives and founders.",
        },
        { name: "twitter:image", content: "https://rhealigned.com/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: "https://rhealigned.com/insights" }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "RheAligned Leadership Insights",
            description:
              "Practical essays and cognitive frameworks on executive presence, mindset, and high-performance leadership.",
            url: "https://rhealigned.com/insights",
            author: {
              "@type": "Person",
              name: "Rhea Bulsara Sidhva",
              jobTitle: "Executive and Leadership Coach",
              worksFor: {
                "@type": "Organization",
                name: "RheAligned",
              },
            },
            blogPost: list.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              description: article.excerpt,
              url: `https://rhealigned.com/insights/${article.slug}`,
              datePublished: article.isoDate,
              author: {
                "@type": "Person",
                name: "Rhea Bulsara Sidhva",
              },
            })),
          }),
        },
      ],
    };
  },
  component: Insights,
});

const categories = [
  "All",
  "Point of View",
  "Method",
  "Pattern Recognition",
  "Proof",
] as const;

function Insights() {
  const { articles } = Route.useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Newsletter collector state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting">("idle");
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    setNewsletterStatus("submitting");
    setNewsletterError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail.trim() }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Failed to subscribe. Please try again.");
      }

      setSubscribedEmail(newsletterEmail.trim());
      setNewsletterEmail("");
      setNewsletterStatus("idle");
      setShowSuccessPopup(true);
    } catch (err: unknown) {
      console.error("Newsletter subscription error:", err);
      setNewsletterStatus("idle");
      setNewsletterError((err as Error)?.message || "Something went wrong. Please try again.");
    }
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory =
        selectedCategory === "All" ||
        a.category === selectedCategory ||
        (a.pillar && a.pillar.toLowerCase().includes(selectedCategory.toLowerCase()));
      const matchesSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (a.pillar && a.pillar.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <>
      {/* Blog Hero Header */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/25">
        <Arc
          core={false}
          className="pointer-events-none absolute -right-36 top-1/2 hidden h-[32rem] w-[32rem] -translate-y-1/2 opacity-20 lg:block"
        />
        <div className="shell relative pb-12 pt-12 lg:pb-16 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            {/* Left Column: Title & Publication Context */}
            <div>
              <Reveal>
                <span className="eyebrow">The Leadership Journal</span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-4 text-[clamp(2.1rem,3.4vw,3.1rem)] font-bold leading-[1.1] tracking-tight text-foreground">
                  Practical insights on leadership, mindset, and cognitive clarity.
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-muted-foreground">
                  Drawn from 14+ years of global HR leadership and 500+ hours of executive coaching.
                  No corporate jargon: actionable frameworks to operate at your peak.
                </p>
              </Reveal>

              {/* Journal Metrics & Pillars */}
              <Reveal delay={0.18} className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold">
                <div className="flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-foreground shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>16 Leadership Essays</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-foreground shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                  <span>4 Cognitive Pillars</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-hairline bg-card px-3.5 py-1.5 text-muted-foreground">
                  <span>500+ Hours Coaching Practice</span>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Featured Insight Spotlight Card */}
            {featuredArticle && (
              <Reveal delay={0.14}>
                <div className="relative">
                  <Link
                    to="/insights/$slug"
                    params={{ slug: featuredArticle.slug }}
                    className="group relative block overflow-hidden rounded-2xl border border-hairline bg-card p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-sand">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute left-3 top-3 flex items-center gap-2">
                        <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground shadow">
                          Featured Insight
                        </span>
                        <span className="rounded-full bg-deep/80 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                          {featuredArticle.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow backdrop-blur-sm">
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h2 className="text-xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {featuredArticle.title}
                      </h2>
                      <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-muted-foreground">
                        {featuredArticle.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-hairline pt-3">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <img
                            src={rheaPortrait}
                            alt="Rhea Bulsara Sidhva"
                            className="h-5 w-5 rounded-full object-cover"
                          />
                          <span className="font-medium text-foreground/80">Rhea Bulsara Sidhva</span>
                          <span>·</span>
                          <span>{featuredArticle.date}</span>
                        </div>
                        <span className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                          Read full article →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </Reveal>
            )}
          </div>

          {/* Search and Category Filter Bar */}
          <div className="mt-12 flex flex-col gap-5 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-hairline bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-hairline bg-card px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Post Grid */}
      <section className="section-y border-b border-hairline">
        <div className="shell">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <span className="text-xs text-muted-foreground">
              {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center text-muted-foreground">
              <p>No articles found matching your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-semibold text-primary underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article: Article, i: number) => (
                <Reveal key={article.id} delay={i * 0.06}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: article.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-primary backdrop-blur">
                        {article.category}
                      </span>
                      {/* RheAligned signature brand Arc motif */}
                      <div className="pointer-events-none absolute -bottom-8 -right-8 h-28 w-28 opacity-30 transition-opacity duration-300 group-hover:opacity-65">
                        <Arc className="h-full w-full text-white" tone="light" drift={false} />
                      </div>
                      {/* RheAligned discreet brand badge */}
                      <div className="pointer-events-none absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-deep/70 px-2 py-0.5 text-[10px] font-medium tracking-wider text-white/90 shadow-sm backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                        <span>RheAligned</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="mt-3 text-lg font-bold tracking-tight leading-snug text-foreground transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4 text-xs">
                        <span className="text-muted-foreground">By Rhea Bulsara Sidhva</span>
                        <span className="font-semibold text-primary group-hover:translate-x-1 transition-transform">
                          Read article →
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription Band */}
      <section className="py-20 bg-sand/35">
        <div className="shell max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow">Stay Clear Under Pressure</span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Get practical leadership insights delivered to your inbox.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A monthly reflection on decision-making, executive presence, and cognitive systems. No spam. Just practical writing on the patterns that get in the way.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <form
              onSubmit={handleNewsletterSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (newsletterError) setNewsletterError(null);
                }}
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-hairline bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "submitting"}
                className="rounded-full bg-deep px-6 py-3 text-sm font-semibold text-deep-foreground transition-all hover:bg-primary disabled:opacity-50"
              >
                {newsletterStatus === "submitting" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>

            {newsletterError && (
              <p className="mt-3 text-xs font-medium text-red-600">{newsletterError}</p>
            )}

            <p className="mt-3 text-xs text-muted-foreground/80">
              I respect your privacy. Read our{" "}
              <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
                Privacy Policy
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Successfully Subscribed Popup Modal */}
      {showSuccessPopup && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep/60 backdrop-blur-sm"
          onClick={() => setShowSuccessPopup(false)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-hairline bg-card p-8 shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background brand concentric arc */}
            <Arc
              core={true}
              drift={true}
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 opacity-25"
            />

            {/* Checkmark icon badge */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Successfully Subscribed
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              Welcome to The Leadership Journal
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              You're all set! We've registered{" "}
              <strong className="font-semibold text-foreground">{subscribedEmail}</strong>.
              You'll receive practical reflections on executive presence, cognitive clarity, and decision-making once a month.
            </p>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => setShowSuccessPopup(false)}
                className="w-full rounded-full bg-deep py-3 text-sm font-semibold text-deep-foreground transition-all hover:bg-primary"
              >
                Continue Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
