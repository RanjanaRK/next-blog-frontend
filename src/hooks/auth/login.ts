"use server";

import kyClient from "@/lib/ky/kyClient";
import { createSession } from "@/lib/session";

import ky from "ky";
import { cookies } from "next/headers";

export async function login(data: { identifier: string; password: string }) {
  try {
    const response: any = await kyClient
      .post("api/auth/local", {
        json: data,
      })
      .json();

    const jwt = response.jwt;
    const user = response.user;

    await createSession({ documentId: user.id, email: user.email, jwt });
    // const token = response.jwt;

    // (await cookies()).set("token", token, {
    //   httpOnly: true,
    //   secure: true,
    //   path: "/",
    // });

    return { success: true, data: response, message: "login successfully" };
  } catch (err) {
    return { success: false };
  }
}
