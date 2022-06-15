import { createClient } from "microcms-js-sdk";

if (!process.env.MICROCMS_DOMAIN_NAME || !process.env.MICROCMS_API_KEY) {
  throw new Error("Microcms api key does not exist");
}

export const microcmsClient = createClient({
  serviceDomain: process.env.MICROCMS_DOMAIN_NAME,
  apiKey: process.env.MICROCMS_API_KEY,
});
