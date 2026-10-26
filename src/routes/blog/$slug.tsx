import { createFileRoute, redirect } from "@tanstack/react-router";
import { resolveArticleSlug } from "@/lib/articles";

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    const canonicalSlug = resolveArticleSlug(params.slug);
    throw redirect({
      to: "/insights/$slug",
      params: { slug: canonicalSlug },
    });
  },
  component: () => null,
});
