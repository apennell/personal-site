import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./sanity/schemas";
import { emissionsCalculatorTool } from "./sanity/plugins";

const config = defineConfig({
  projectId: "g31vrzho",
  dataset: "production",
  title: "Personal v2 Website",
  apiVersion: "2023-04-11",
  basePath: "/admin",
  plugins: [deskTool(), emissionsCalculatorTool()],
  schema: { types: schemas },
});

export default config;
