import { definePlugin } from "sanity";
import { EmissionsCalculatorToolConfig } from "./types";
import { EmissionsCalculator } from "./EmissionsCalculator";

export const emissionsCalculatorTool =
  definePlugin<EmissionsCalculatorToolConfig | void>((options) => {
    const { name, title, icon, ...config } = options || {};

    return {
      name: "emissions-calculator",
      tools: [
        {
          name: name || "emissions-calculator-tool",
          title: title || "Emissions",
          icon: Boolean(icon) ? icon : () => <span>🪴</span>,
          component: EmissionsCalculator,
          options: config,
        },
      ],
    };
  });
