import kyServer from "@/lib/ky/kyServer";
import { decryptSession } from "@/lib/session";
import { Category, StrapiResponse } from "@/lib/types";
import { cookies } from "next/headers";

const getCategory = async () => {
  const cookie = await (await cookies()).get("mysession")?.value;
  const session = await decryptSession(cookie);
  const strapiJwt = session?.jwt;
  try {
    const categories = await kyServer
      .get("api/categories", {
        headers: { Authorization: `Bearer ${strapiJwt}` },
      })
      .json<StrapiResponse<Category>>();

    console.log(categories);

    return categories;
  } catch (error) {
    console.log(error);
  }
};

export default getCategory;
