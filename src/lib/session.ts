"use server";

export type SessionPayload = {
  documentId: string;
  email: string;
  jwt: string; // add this
};

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encryptSession(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decryptSession(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });

    console.log(payload);

    return payload;
  } catch (error) {}
}

export async function createSession(payload: SessionPayload) {
  // Set cookie to expire in 7 days
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  // Encrypt the session payload
  const session = await encryptSession(payload);
  // Set the session cookie with the encrypted payload
  const cookieStore = await cookies();

  // Set the cookie with the session token
  cookieStore.set("mysession", session, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: false,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  console.log(cookieStore.get);
}

// Deletes the session cookie to log out the user
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("mysession");
}
