import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { articlesData, resolveArticleSlug, type Article } from "./articles";
import { testimonialsData, type Testimonial } from "./testimonials";

export interface SanitySiteSettings {
  coachingHours: string;
  corporateExperienceYears: string;
  countriesCount: number;
}

export const defaultSiteSettings: SanitySiteSettings = {
  coachingHours: "500+",
  corporateExperienceYears: "14+",
  countriesCount: 4,
};

const defaultFallbackArticle: Article = articlesData[0]!;

function getFallbackArticle(slug?: string): Article {
  if (!slug) return defaultFallbackArticle;
  const canonical = resolveArticleSlug(slug);
  return articlesData.find((a) => a.slug === canonical) ?? defaultFallbackArticle;
}

const env = import.meta.env as Record<string, string | undefined>;
const projectId = env["VITE_SANITY_PROJECT_ID"];
const dataset = env["VITE_SANITY_DATASET"] || "production";
const apiVersion = env["VITE_SANITY_API_VERSION"] || "2024-01-01";

export const isSanityConfigured = Boolean(
  projectId &&
  typeof projectId === "string" &&
  projectId.trim().length > 0 &&
  projectId !== "your_project_id_here",
);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId as string,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

const CACHE_TTL_MS = 60 * 1000; // 60 seconds
let cachedArticles: { data: Article[]; time: number } | null = null;
let cachedTestimonials: { data: Testimonial[]; time: number } | null = null;
let cachedSettings: { data: SanitySiteSettings; time: number } | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder || !source || !source.asset) return "";
  try {
    return builder.image(source).auto("format").fit("max").url();
  } catch (err) {
    console.warn("Unable to resolve Sanity image source:", err);
    return "";
  }
}

/**
 * Fetch all articles, strictly returning ONLY the 16 given blogs.
 */
export async function getArticles(): Promise<Article[]> {
  if (cachedArticles && Date.now() - cachedArticles.time < CACHE_TTL_MS) {
    return cachedArticles.data;
  }

  if (!sanityClient) {
    return articlesData;
  }

  try {
    const query = `*[_type == "post"] | order(isoDate desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      pillar,
      readTime,
      date,
      isoDate,
      excerpt,
      pullQuote,
      keyTakeaway,
      featured,
      mainImage,
      sections[] {
        heading,
        paragraphs
      }
    }`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sanityPosts = await sanityClient.fetch<any[]>(query);

    if (!sanityPosts || sanityPosts.length === 0) {
      return articlesData;
    }

    // Filter to only match our 16 authentic given blogs
    const validSlugs = new Set(articlesData.map((a) => a.slug));
    const matchedSanityMap = new Map<string, any>();
    for (const post of sanityPosts) {
      const canonical = resolveArticleSlug(post.slug);
      if (validSlugs.has(canonical)) {
        matchedSanityMap.set(canonical, post);
      }
    }

function cleanCategory(cat?: string, fallbackCat: string = "Method"): string {
  if (!cat) return fallbackCat;
  const trimmed = cat.trim();
  if (/mental\s*health/i.test(trimmed)) {
    return fallbackCat && !/mental\s*health/i.test(fallbackCat) ? fallbackCat : "Method";
  }
  return trimmed;
}

    // Always return all 16 given blogs, enriched with Sanity data if present
    const result = articlesData.map((fallback) => {
      const post = matchedSanityMap.get(fallback.slug);
      if (!post) return fallback;

      const imageUrl = post.mainImage ? urlFor(post.mainImage) : fallback.image;
      return {
        ...fallback,
        title: post.title || fallback.title,
        category: cleanCategory(post.category, fallback.category),
        pillar: post.pillar || fallback.pillar,
        readTime: post.readTime || fallback.readTime,
        date: post.date || fallback.date,
        isoDate: post.isoDate || fallback.isoDate,
        featured: post.featured !== undefined ? Boolean(post.featured) : fallback.featured,
        image: imageUrl || fallback.image,
        excerpt: post.excerpt || fallback.excerpt,
        pullQuote: post.pullQuote || fallback.pullQuote,
        keyTakeaway: post.keyTakeaway || fallback.keyTakeaway,
        sections: post.sections && post.sections.length > 0 ? post.sections : fallback.sections,
      };
    });

    cachedArticles = { data: result, time: Date.now() };
    return result;
  } catch (err) {
    console.warn("Sanity fetch failed for articles, using local articles fallback:", err);
    return articlesData;
  }
}

/**
 * Fetch a single article by slug, resolving aliases and guaranteeing only the 16 given blogs.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const canonicalSlug = resolveArticleSlug(slug);
  const fallback = articlesData.find((a) => a.slug === canonicalSlug);

  if (!fallback) {
    return null;
  }

  if (!sanityClient) {
    return fallback;
  }

  try {
    const query = `*[_type == "post" && (slug.current == $canonicalSlug || slug.current == $slug)][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      pillar,
      readTime,
      date,
      isoDate,
      excerpt,
      pullQuote,
      keyTakeaway,
      featured,
      mainImage,
      sections[] {
        heading,
        paragraphs
      }
    }`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post = await sanityClient.fetch<any>(query, { canonicalSlug, slug });

    if (!post) {
      return fallback;
    }

    const imageUrl = post.mainImage ? urlFor(post.mainImage) : fallback.image;

    return {
      ...fallback,
      title: post.title || fallback.title,
      category: cleanCategory(post.category, fallback.category),
      pillar: post.pillar || fallback.pillar,
      readTime: post.readTime || fallback.readTime,
      date: post.date || fallback.date,
      isoDate: post.isoDate || fallback.isoDate,
      featured: post.featured !== undefined ? Boolean(post.featured) : fallback.featured,
      image: imageUrl || fallback.image,
      excerpt: post.excerpt || fallback.excerpt,
      pullQuote: post.pullQuote || fallback.pullQuote,
      keyTakeaway: post.keyTakeaway || fallback.keyTakeaway,
      sections: post.sections && post.sections.length > 0 ? post.sections : fallback.sections,
    };
  } catch (err) {
    console.warn(`Sanity fetch failed for slug "${slug}", using fallback:`, err);
    return fallback;
  }
}

/**
 * Fetch all testimonials from Sanity, falling back to local testimonialsData
 */
export async function getTestimonials(): Promise<Testimonial[]> {
  if (cachedTestimonials && Date.now() - cachedTestimonials.time < CACHE_TTL_MS) {
    return cachedTestimonials.data;
  }

  if (!sanityClient) {
    return testimonialsData;
  }

  try {
    const query = `*[_type == "testimonial"] | order(order asc, _createdAt asc) {
      _id,
      pull,
      category,
      role,
      breakthrough,
      keyLearning
    }`;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sanityTestimonials = await sanityClient.fetch<any[]>(query);

    if (!sanityTestimonials || sanityTestimonials.length === 0) {
      return testimonialsData;
    }

    const result = sanityTestimonials.map((t) => {
      let category = t.category;
      if (category === "Leadership & Politics" || (category && category.toLowerCase().includes("politics"))) {
        category = "Leadership & Influence";
      }
      const breakthrough = t.breakthrough
        ? t.breakthrough
            .replace(/politics and flattery/gi, "favoritism and flattery")
            .replace(/workplace politics/gi, "organizational dynamics")
        : t.breakthrough;
      const keyLearning = t.keyLearning
        ? t.keyLearning
            .replace(/workplace politics/gi, "organizational dynamics")
            .replace(/politics/gi, "organizational dynamics")
        : t.keyLearning;

      return {
        id: t._id,
        pull: t.pull,
        category,
        role: t.role,
        breakthrough,
        keyLearning,
      };
    });

    cachedTestimonials = { data: result, time: Date.now() };
    return result;
  } catch (err) {
    console.warn("Sanity fetch failed for testimonials, using local fallback:", err);
    return testimonialsData;
  }
}

/**
 * Fetch global site settings (coaching hours, experience years, countries count)
 */
export async function getSiteSettings(): Promise<SanitySiteSettings> {
  if (cachedSettings && Date.now() - cachedSettings.time < CACHE_TTL_MS) {
    return cachedSettings.data;
  }

  if (!sanityClient) {
    return defaultSiteSettings;
  }

  try {
    const query = `*[_type == "siteSettings"][0] {
      coachingHours,
      corporateExperienceYears,
      countriesCount
    }`;

    const settings = await sanityClient.fetch<Partial<SanitySiteSettings>>(query);

    if (!settings) {
      return defaultSiteSettings;
    }

    const result = {
      coachingHours: settings.coachingHours || defaultSiteSettings.coachingHours,
      corporateExperienceYears:
        settings.corporateExperienceYears || defaultSiteSettings.corporateExperienceYears,
      countriesCount: settings.countriesCount || defaultSiteSettings.countriesCount,
    };

    cachedSettings = { data: result, time: Date.now() };
    return result;
  } catch (err) {
    console.warn("Sanity fetch failed for siteSettings, using local fallback:", err);
    return defaultSiteSettings;
  }
}
