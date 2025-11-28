"use server";

import kyServer from "@/lib/ky/kyServer";
import { decryptSession } from "@/lib/session";
import { cookies } from "next/headers";

const getAuthUser = async () => {
  const cookie = await (await cookies()).get("mysession")?.value;

  const session = await decryptSession(cookie);
  const strapiJwt = session?.jwt;

  try {
    const res = await kyServer
      .get("api/users/me", {
        headers: {
          Authorization: `Bearer ${strapiJwt}`,
        },
      })
      .json();

    console.log(res);

    return res;
  } catch (error) {}
};

export default getAuthUser;
