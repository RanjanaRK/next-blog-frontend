// import { kyServer } from "@/lib/ky/kyServer";
"use server";

import kyServer from "@/lib/ky/kyServer";
import { decryptSession } from "@/lib/session";
import { cookies } from "next/headers";

const getPosts = async () => {
  const cookie = await (await cookies()).get("mysession")?.value;
  const session = await decryptSession(cookie);
  const strapiJwt = session?.jwt;

  try {
    const posts = await kyServer
      .get("api/posts?populate=*", {
        headers: {
          Authorization: `Bearer ${strapiJwt}`,
        },
      })
      .json();

    return posts as any[];
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw err;
  }
};

export default getPosts;
