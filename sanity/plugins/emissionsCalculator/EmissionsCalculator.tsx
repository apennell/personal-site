import { Container } from "@sanity/ui";

import { EmissionsCalculatorProps } from "./types";

export function EmissionsCalculator(props: EmissionsCalculatorProps) {
  return (
    <Container>
      <h1>🪴 Carbon Emissions Calculator</h1>
      <p>
        Let&apos;s use co2.js to calculate the carbon footprint of our Sanity
        Content Lake.
      </p>
    </Container>
  );
}
