// import { kyServer } from "@/lib/ky/kyServer";

import kyServer from "@/lib/ky/kyServer";

const getPosts = async () => {
  try {
    const posts = await kyServer.get("api/posts?populate=*").json();

    return posts;
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw err;
  }
};

export default getPosts;
