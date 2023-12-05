import { Container } from "@sanity/ui";

import { EmissionsCalculatorProps } from "./types";
import { getEmissions } from "./calculator";
import { useMemo } from "react";

export function EmissionsCalculator(props: EmissionsCalculatorProps) {
  /*
   * TODO:
   * - Get total size of stored assets from Sanity
   * - Get total bandwidth from Sanity (this month?)
   *
   * Maybe also:
   * - Get the size of the dataset from Sanity (is this a thing? I think it's
   *   the "Size" column in the "Datasets -> {Dataset}" tab of the account dash)
   * - Get other bandwidth counts (last month, YTD, etc.)
   * - Get attributes count (this is in the "Datasets -> {Dataset}" tab of the
   *   account dash and shows `x / 2k`; is this possible to translate to a
   *   meaningful byte count?)
   * - Get the API requests amount (is it possible to translate this
   *   to a meaningful byte count? Is bandwidth a better metric?)
   */
  const estEmissions = useMemo(() => {
    return getEmissions();
  }, []);

  return (
    <Container>
      <h1>🪴 Carbon Emissions Calculator</h1>
      <p>
        Let&apos;s use co2.js to calculate the carbon footprint of our Sanity
        Content Lake.
      </p>

      <h2>Estimated Emissions</h2>
      <p>
        Sending one gigabyte has a carbon footprint of {estEmissions} grams of
        CO2.
      </p>
    </Container>
  );
}
