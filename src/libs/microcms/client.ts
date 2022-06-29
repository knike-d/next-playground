import * as ms from "microcms-js-sdk";

export type MicroCMSQueries = ms.MicroCMSQueries;

if (!process.env.MICROCMS_DOMAIN_NAME || !process.env.MICROCMS_API_KEY) {
  throw new Error("Microcms api key does not exist");
}

export const microcmsClient = ms.createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN_NAME,
  apiKey: process.env.MICROCMS_API_KEY,
});
