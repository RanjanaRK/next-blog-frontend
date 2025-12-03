import kyClient from "@/lib/ky/kyClient";
import { BlogFormSchemaType } from "@/lib/types";

const createBlog = async (bData: BlogFormSchemaType) => {
  try {
    const createBlog = await kyClient.post("api/posts", {
      json: {},
    });
  } catch (error) {}
};

export default createBlog;
