import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "g31vrzho",
  dataset: "production",
  title: "Personal v2 Website",
  apiVersion: "2023-04-11",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
