import { ComponentType } from "react";
import type { Tool } from "sanity";

export interface EmissionsCalculatorConfig {
  defaultApiVersion: string;
  defaultDataset?: string;
}

export interface EmissionsCalculatorToolConfig
  extends Partial<EmissionsCalculatorConfig> {
  name?: string;
  title?: string;
  icon?: ComponentType;
}

export interface EmissionsCalculatorProps {
  tool: Tool<EmissionsCalculatorConfig>;
}
