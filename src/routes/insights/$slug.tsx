import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { CTAWithMicro, CTA } from "@/components/brand/CTA";
import { type Article } from "@/lib/articles";
import { getArticleBySlug, getArticles } from "@/lib/sanity";
import rheaPortrait from "@/assets/rhea-portrait.jpg";

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params }) => {
    const article = await getArticleBySlug(params.slug);
    if (!article) {
      throw notFound();
    }
    const allArticles = await getArticles();
    return { article, allArticles };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return {};

    return {
      meta: [
        {
          title: `${article.title} | Rhea Bulsara Sidhva | RheAligned`,
        },
        {
          name: "description",
          content: article.excerpt,
        },
        {
          property: "og:title",
          content: `${article.title} | RheAligned Leadership Journal`,
        },
        {
          property: "og:description",
          content: article.excerpt,
        },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `https://rhealigned.com/insights/${article.slug}` },
        { property: "article:published_time", content: article.isoDate },
        { property: "article:author", content: "Rhea Bulsara Sidhva" },
        { property: "article:section", content: article.category },
      ],
      links: [{ rel: "canonical", href: `https://rhealigned.com/insights/${article.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            image: `https://rhealigned.com${article.image}`,
            datePublished: article.isoDate,
            dateModified: article.isoDate,
            inLanguage: "en-US",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://rhealigned.com/insights/${article.slug}`,
            },
            author: {
              "@type": "Person",
              name: "Rhea Bulsara Sidhva",
              jobTitle: "Executive and Leadership Coach",
              url: "https://rhealigned.com/about",
              sameAs: [
                "https://linkedin.com/in/rheacoaching",
                "https://instagram.com/rhealign.coaching",
              ],
            },
            publisher: {
              "@type": "ProfessionalService",
              name: "RheAligned",
              url: "https://rhealigned.com",
              logo: {
                "@type": "ImageObject",
                url: "https://rhealigned.com/favicon.png",
              },
            },
            keywords: [
              article.category,
              "Executive Coaching",
              "Leadership Mindset",
              "Cognitive Clarity",
              "High Performance",
              "Rhea Bulsara Sidhva",
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://rhealigned.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://rhealigned.com/insights",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: article.title,
                item: `https://rhealigned.com/insights/${article.slug}`,
              },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { article, allArticles } = Route.useLoaderData();
  const [copied, setCopied] = useState(false);

  const relatedArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <article className="min-h-screen bg-background">
      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-hairline bg-card/60 backdrop-blur-sm">
        <div className="shell flex items-center justify-between py-4">
          <Link
            to="/insights"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-muted-foreground transition-colors hover:text-primary"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>All Insights & Articles</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="hidden sm:inline">Share:</span>
            <button
              type="button"
              onClick={handleCopyLink}
              className="rounded-full border border-hairline bg-background px-3 py-1 font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {copied ? "Link Copied ✓" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="shell pt-10 pb-8 sm:pt-14 sm:pb-12 max-w-3xl">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
              {article.category}
            </span>
            <span>·</span>
            <span className="text-muted-foreground">{article.readTime}</span>
            <span>·</span>
            <span className="text-muted-foreground">{article.date}</span>
          </div>

          <h1 className="mt-5 text-[clamp(2.1rem,4vw,3.2rem)] font-bold tracking-tight text-foreground leading-[1.12]">
            {article.title}
          </h1>

          <p className="mt-5 text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl">
            {article.excerpt}
          </p>

          {/* Author Badge */}
          <div className="mt-8 flex items-center gap-3.5 border-y border-hairline py-4">
            <img
              src={rheaPortrait}
              alt="Rhea Bulsara Sidhva"
              className="h-12 w-12 rounded-full object-cover border border-hairline"
            />
            <div>
              <div className="font-semibold text-foreground text-sm">Rhea Bulsara Sidhva</div>
              <div className="text-xs text-muted-foreground">
                Former Global HR Leader | Executive Coach (ICF-ACC)
              </div>
            </div>
          </div>
        </Reveal>
      </header>

      {/* Featured Image */}
      <div className="shell max-w-4xl pb-10">
        <div className="overflow-hidden rounded-2xl border border-hairline bg-sand shadow-lg">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <main className="shell max-w-3xl pb-16">
        {article.pullQuote && (
          <blockquote className="my-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6 text-lg font-medium italic text-foreground sm:text-xl sm:leading-relaxed">
            "{article.pullQuote}"
          </blockquote>
        )}

        <div className="space-y-10 text-[16.5px] leading-[1.8] text-foreground/90 font-normal">
          {article.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl pt-2">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Key Insight Highlight Box */}
        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/8 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <span>💡</span>
            <span>Key Takeaway</span>
          </div>
          <p className="mt-2 text-base font-semibold leading-relaxed text-foreground sm:text-lg">
            {article.keyTakeaway}
          </p>
        </div>

        {/* Author Bio Card */}
        <section className="mt-14 rounded-2xl border border-hairline bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <img
              src={rheaPortrait}
              alt="Rhea Bulsara Sidhva"
              className="h-16 w-16 rounded-full object-cover border border-hairline shrink-0"
            />
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                About the Author
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">Rhea Bulsara Sidhva</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Former Global HR Leader at BP, Tata Group, and Sainsbury's. Certified Executive
                Coach (ICF-ACC) with 500+ coaching hours. Rhea partners with senior leaders,
                founders, and enterprise organizations across Hong Kong, the UK, the UAE, India, and
                the US to dissolve cognitive friction and lead with quiet, unshakeable authority.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link to="/about" className="text-primary hover:underline">
                  Read Rhea's full story →
                </Link>
                <a
                  href="https://linkedin.com/in/rheacoaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement CTA Band */}
        <div className="mt-12 rounded-2xl border border-hairline bg-sand/35 p-8 text-center sm:p-10">
          <span className="eyebrow">Work With Rhea</span>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
            Apply these insights to your leadership challenges.
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Whether you are navigating high-stakes stakeholders, overcoming overthinking, or scaling
            organizational leadership, let's explore how coaching can accelerate your progress.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAWithMicro
              to="/contact"
              align="center"
              micro="No obligation · Virtual, any time zone"
            >
              Book a free 30-minute discovery call
            </CTAWithMicro>
          </div>
        </div>
      </main>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="border-t border-hairline bg-card/40 py-16">
          <div className="shell max-w-4xl">
            <div className="flex items-center justify-between pb-8">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                Continue Reading
              </h2>
              <CTA to="/insights" tone="quiet">
                All articles →
              </CTA>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {relatedArticles.map((rel: Article) => (
                <Link
                  key={rel.slug}
                  to="/insights/$slug"
                  params={{ slug: rel.slug }}
                  className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-semibold text-primary backdrop-blur">
                      {rel.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="text-[11px] text-muted-foreground">
                        {rel.date} · {rel.readTime}
                      </div>
                      <h3 className="mt-2 text-base font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary">
                      <span>Read article</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
