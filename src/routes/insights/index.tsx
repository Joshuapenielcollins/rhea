import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
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
            "Evidence-based frameworks on mindset, decision-making, and internal operating systems for executives and founders.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "/insights" },
      ],
      links: [{ rel: "canonical", href: "/insights" }],
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
  "Mindset",
  "Identity",
  "Execution",
  "Mental Health",
  "Perspective",
] as const;

function Insights() {
  const { articles } = Route.useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
      const matchesSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <>
      {/* Blog Hero Header */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-b from-background via-background to-sand/25">
        <div className="shell pb-14 pt-14 lg:pt-20">
          <Reveal>
            <span className="eyebrow">The Leadership Journal</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 max-w-[22ch] text-[clamp(2.1rem,3.8vw,3.2rem)] font-bold leading-[1.08] tracking-tight text-foreground">
              Practical insights on leadership, mindset, and cognitive clarity.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-muted-foreground">
              Drawn from 14+ years of global HR leadership and 500+ hours of executive coaching. No
              corporate jargon: actionable frameworks to operate at your peak.
            </p>
          </Reveal>

          {/* Search and Category Filter Bar */}
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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

      {/* Featured Lead Article Banner (shown when no specific search is active) */}
      {!searchQuery && selectedCategory === "All" && featuredArticle && (
        <section className="border-b border-hairline bg-card py-12">
          <div className="shell">
            <Reveal>
              <Link
                to="/insights/$slug"
                params={{ slug: featuredArticle.slug }}
                className="group grid gap-8 overflow-hidden rounded-2xl border border-hairline bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl lg:grid-cols-2 lg:items-center lg:p-8"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                    Featured Article
                  </span>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-primary">
                      <span>{featuredArticle.category}</span>
                      <span>·</span>
                      <span className="text-muted-foreground">{featuredArticle.readTime}</span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                      {featuredArticle.title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-hairline pt-4">
                    <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                      <img
                        src={rheaPortrait}
                        alt="Rhea Bulsara Sidhva"
                        className="h-6 w-6 rounded-full object-cover"
                      />
                      <span>Rhea Bulsara Sidhva</span>
                      <span>·</span>
                      <span>{featuredArticle.date}</span>
                    </div>
                    <span className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform">
                      Read full article →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

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
                        <span className="text-muted-foreground">By Rhea Bulsara</span>
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
              A monthly reflection on decision-making, executive presence, and cognitive systems. No
              spam. Just precision thinking.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to RheAligned Insights!");
              }}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 rounded-full border border-hairline bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-deep px-6 py-3 text-sm font-semibold text-deep-foreground transition-all hover:bg-primary"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
