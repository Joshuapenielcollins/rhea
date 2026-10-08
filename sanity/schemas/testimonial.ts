/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: "testimonial",
  title: "Client Testimonial",
  type: "document",
  fields: [
    {
      name: "pull",
      title: "Pull Quote (Headline Insight)",
      type: "text",
      rows: 2,
      description:
        "e.g. 'That shift, from expecting answers to discovering my own, was eye-opening.'",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Leadership & Politics", value: "Leadership & Politics" },
          { title: "Emotional Agility", value: "Emotional Agility" },
          { title: "Founders & Business", value: "Founders & Business" },
          { title: "Resilience & Team", value: "Resilience & Team" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Client Role / Title",
      type: "string",
      description:
        "Do NOT include personal names. Use professional titles (e.g. 'Manufacturing Leader | Global Operations')",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "breakthrough",
      title: "Breakthrough Story",
      type: "text",
      rows: 5,
      description: "The background, the coaching intervention, and the tangible shift experienced.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "keyLearning",
      title: "Key Learning (Highlight Callout)",
      type: "text",
      rows: 2,
      description: "The core takeaway or principle derived from the session.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers display first (e.g. 1, 2, 3)",
      initialValue: 10,
    },
  ],
  preview: {
    select: {
      title: "role",
      subtitle: "pull",
    },
  },
};
