import { ComponentType } from "react";
import { SanityClient } from "@sanity/client";
import type { Tool } from "sanity";

export interface EmissionsCalculatorConfig {
  defaultApiVersion: string;
  defaultDataset?: string;
}

// export interface EmissionsCalculatorProps {
//   client: SanityClient;
//   config: EmissionsCalculatorConfig;
// }

export interface EmissionsCalculatorToolConfig
  extends Partial<EmissionsCalculatorConfig> {
  name?: string;
  title?: string;
  icon?: ComponentType;
}

export interface EmissionsCalculatorProps {
  tool: Tool<EmissionsCalculatorConfig>;
}
