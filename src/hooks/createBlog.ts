"use server";

// import kyClient from "@/lib/ky/kyClient";
import kyServer from "@/lib/ky/kyServer";
import { decryptSession } from "@/lib/session";
import { BlogFormSchemaType } from "@/lib/types";
import { cookies } from "next/headers";

const createBlog = async (bData: BlogFormSchemaType, userId: string) => {
  const cookie = (await cookies()).get("mysession")?.value;
  const session = await decryptSession(cookie);
  const strapiJwt = session?.jwt;

  try {
    const res = await kyServer.post("api/posts", {
      headers: {
        Authorization: `Bearer ${strapiJwt}`,
      },
      json: {
        data: {
          title: bData.title,
          content: bData.content,
          slug: bData.slug,
          category: bData.category,
          users_permissions_user: userId,
        },
      },
    });

    return {
      success: true,
      message: "Blog created!",
    };
  } catch (error) {
    console.log(error);
  }
};

export default createBlog;
