/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  name: "siteSettings",
  title: "Site Metrics & Settings",
  type: "document",
  fields: [
    {
      name: "coachingHours",
      title: "Coaching Hours Metric",
      type: "string",
      description: "e.g. '500+' or '650+' (Displayed across Hero, About, and credentials)",
      initialValue: "500+",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "corporateExperienceYears",
      title: "Corporate Experience Metric",
      type: "string",
      description: "e.g. '14+' (Years inside global HR at BP, Tata, Sainsbury's)",
      initialValue: "14+",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "countriesCount",
      title: "Countries Count",
      type: "number",
      description: "e.g. 4 (UK, UAE, India, Hong Kong)",
      initialValue: 4,
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Site Metrics & Global Credentials",
      };
    },
  },
};
