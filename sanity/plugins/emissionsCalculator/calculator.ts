import { co2 } from "@tgwf/co2";

// Initiate a new co2 object using the Sustainable Web Design (SWD) model.
const swd = new co2({ model: "swd" });

/*
 * TODO:
 * - Second param in `perByte` is a bool for whether or not the bytes are
 *   transferred from a green host. I know this is false for me right now,
 *   so the default `false` param is fine. In building this out as a plugin,
 *   though, we could allow for and/or check for green hosting.
 */

/** 1GB, expressed in bytes */
const oneGb = 1000 * 1000 * 1000;

/**
 * Using CO2.js's `perByte` method and the Sustainable Web Design model,
 * calculate the estimated amount of CO2 (in grams) emitted from transferring
 * a given amount of data (in bytes).
 *
 * @param bytesSent amount of transferred bytes to measure
 * @param isGreenHost whether or not the bytes are transferred from a green host
 * @returns estimated amount of CO2 emissions in grams, returned as a floating point number
 *
 * @see https://developers.thegreenwebfoundation.org/co2js/methods/#perbyte
 */
export const getEmissions = (bytesSent = oneGb, isGreenHost = false) => {
  /** Use the perByte method to calculate emissions for bytes of data passed  */
  const emissions: number = swd.perByte(bytesSent, isGreenHost);

  return emissions;
};
