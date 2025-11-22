import ky from "ky";

const kyClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
  credentials: "include", // if you plan cookie login
  retry: 2,
});

export default kyClient;
