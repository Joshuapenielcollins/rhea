import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { articlesData, type Article } from "./articles";
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
  return articlesData.find((a) => a.slug === slug) ?? defaultFallbackArticle;
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
 * Fetch all articles from Sanity, falling back gracefully to local articlesData
 */
export async function getArticles(): Promise<Article[]> {
  if (!sanityClient) {
    return articlesData;
  }

  try {
    const query = `*[_type == "post"] | order(isoDate desc) {
      _id,
      title,
      "slug": slug.current,
      category,
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

    return sanityPosts.map((post) => {
      const fallback = getFallbackArticle(post.slug);
      const imageUrl = post.mainImage ? urlFor(post.mainImage) : fallback.image;

      return {
        id: post.slug || post._id,
        slug: post.slug || post._id,
        title: post.title,
        category: post.category || fallback.category,
        readTime: post.readTime || fallback.readTime,
        date: post.date || fallback.date,
        isoDate: post.isoDate || fallback.isoDate,
        featured: Boolean(post.featured),
        image: imageUrl || fallback.image,
        excerpt: post.excerpt || fallback.excerpt,
        pullQuote: post.pullQuote || fallback.pullQuote,
        keyTakeaway: post.keyTakeaway || fallback.keyTakeaway,
        sections: post.sections && post.sections.length > 0 ? post.sections : fallback.sections,
      };
    });
  } catch (err) {
    console.warn("Sanity fetch failed for articles, using local articles fallback:", err);
    return articlesData;
  }
}

/**
 * Fetch a single article by slug from Sanity, falling back to local articlesData
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!sanityClient) {
    return articlesData.find((a) => a.slug === slug) || null;
  }

  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
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
    const post = await sanityClient.fetch<any>(query, { slug });

    if (!post) {
      return articlesData.find((a) => a.slug === slug) || null;
    }

    const fallback = getFallbackArticle(slug);
    const imageUrl = post.mainImage ? urlFor(post.mainImage) : fallback.image;

    return {
      id: post.slug || post._id,
      slug: post.slug || post._id,
      title: post.title,
      category: post.category || fallback.category,
      readTime: post.readTime || fallback.readTime,
      date: post.date || fallback.date,
      isoDate: post.isoDate || fallback.isoDate,
      featured: Boolean(post.featured),
      image: imageUrl || fallback.image,
      excerpt: post.excerpt || fallback.excerpt,
      pullQuote: post.pullQuote || fallback.pullQuote,
      keyTakeaway: post.keyTakeaway || fallback.keyTakeaway,
      sections: post.sections && post.sections.length > 0 ? post.sections : fallback.sections,
    };
  } catch (err) {
    console.warn(`Sanity fetch failed for slug "${slug}", using fallback:`, err);
    return articlesData.find((a) => a.slug === slug) || null;
  }
}

/**
 * Fetch all testimonials from Sanity, falling back to local testimonialsData
 */
export async function getTestimonials(): Promise<Testimonial[]> {
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

    return sanityTestimonials.map((t) => ({
      id: t._id,
      pull: t.pull,
      category: t.category,
      role: t.role,
      breakthrough: t.breakthrough,
      keyLearning: t.keyLearning,
    }));
  } catch (err) {
    console.warn("Sanity fetch failed for testimonials, using local fallback:", err);
    return testimonialsData;
  }
}

/**
 * Fetch global site settings (coaching hours, experience years, countries count)
 */
export async function getSiteSettings(): Promise<SanitySiteSettings> {
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

    return {
      coachingHours: settings.coachingHours || defaultSiteSettings.coachingHours,
      corporateExperienceYears:
        settings.corporateExperienceYears || defaultSiteSettings.corporateExperienceYears,
      countriesCount: settings.countriesCount || defaultSiteSettings.countriesCount,
    };
  } catch (err) {
    console.warn("Sanity fetch failed for siteSettings, using local fallback:", err);
    return defaultSiteSettings;
  }
}
