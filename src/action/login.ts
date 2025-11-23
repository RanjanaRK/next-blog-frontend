"use server";

import kyClient from "@/lib/ky/kyClient";
import ky from "ky";
import { cookies } from "next/headers";

export async function loginAction(data: {
  identifier: string;
  password: string;
}) {
  try {
    const response: any = await kyClient
      .post("api/auth/local", {
        json: data,
      })
      .json();

    const token = response.jwt;

    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
    });

    return { success: true, data: response, message: "login successfully" };
  } catch (err) {
    return { success: false };
  }
}
