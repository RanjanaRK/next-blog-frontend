import "server-only";

import { cookies } from "next/headers";

import { redirect } from "next/navigation";

import { cache } from "react";
import { decryptSession } from "./session";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;

  console.log(cookie);

  const session = await decryptSession(cookie);

  if (!session) {
    return { isAuth: false, session };
  }

  if (!session?.jwt) {
    redirect("/auth");
  }

  return { isAuth: true, session };
});
