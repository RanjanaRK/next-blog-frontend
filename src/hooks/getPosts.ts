import kyServer from "@/lib/ky/kyServer";
import { decryptSession } from "@/lib/session";
import { Item, StrapiResponse } from "@/lib/types";
import { cookies } from "next/headers";

const getPosts = async () => {
  const cookie = await (await cookies()).get("mysession")?.value;
  const session = await decryptSession(cookie);
  const strapiJwt = session?.jwt;

  try {
    const posts = await kyServer
      .get("api/posts?populate=*", {
        headers: { Authorization: `Bearer ${strapiJwt}` },
      })
      .json<StrapiResponse<Item>>();

    return posts; // now correct shape
  } catch (err) {
    console.error("Error fetching posts:", err);
  }
};

export default getPosts;
