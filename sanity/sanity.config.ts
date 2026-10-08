import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "RheAligned Coaching CMS",
  projectId: "nfzvcsrt",
  dataset: "production",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
