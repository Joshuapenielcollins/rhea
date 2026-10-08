/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: "post",
  title: "Blog & Insights Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Mindset", value: "Mindset" },
          { title: "Identity", value: "Identity" },
          { title: "Execution", value: "Execution" },
          { title: "Mental Health", value: "Mental Health" },
          { title: "Perspective", value: "Perspective" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "readTime",
      title: "Reading Time",
      type: "string",
      description: "e.g. '4 min read'",
      initialValue: "4 min read",
    },
    {
      name: "date",
      title: "Display Date",
      type: "string",
      description: "e.g. 'Sep 28, 2026'",
    },
    {
      name: "isoDate",
      title: "Publication Date (ISO)",
      type: "date",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Display in the featured banner at the top of the Insights page",
      initialValue: false,
    },
    {
      name: "mainImage",
      title: "Main Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt / Lead Summary",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "pullQuote",
      title: "Pull Quote (Featured Callout)",
      type: "text",
      rows: 2,
    },
    {
      name: "keyTakeaway",
      title: "Key Takeaway (Highlight Box)",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sections",
      title: "Article Sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            {
              name: "heading",
              title: "Section Heading (Optional)",
              type: "string",
            },
            {
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [{ type: "text", rows: 4 }],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
  },
};
