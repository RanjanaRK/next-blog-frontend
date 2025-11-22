import ky from "ky";

const kyServer = ky.create({
  prefixUrl: process.env.STRAPI_URL, // example: http://localhost:1337/api
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    "Content-Type": "application/json",
  },

  //   timeout: 8000,
  //   hooks: {
  //     beforeError: [
  //       (error) => {
  //         console.error("KY SERVER ERROR:", error);
  //         return error;
  //       },
  //     ],
  //   },
});

export default kyServer;
