"use server";

import kyServer from "@/lib/ky/kyServer";
import { decryptSession } from "@/lib/session";
import { cookies } from "next/headers";
import { ProfileFormSchemaType } from "@/lib/types";

const editProfile = async (data: ProfileFormSchemaType, userId: number) => {
  const cookie = (await cookies()).get("mysession")?.value;

  if (!cookie) {
    return { success: false, message: "No session cookie found" };
  }

  const session = await decryptSession(cookie);
  const strapiJwt = session?.jwt;

  if (!strapiJwt) {
    return { success: false, message: "JWT missing from session" };
  }

  try {
    const res = await kyServer.put(`api/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${strapiJwt}`,
      },
      json: {
        username: data.username,
        bio: data.bio,
        email: data.email,
        location: data.location,
      },
    });

    return {
      success: true,
      message: "Profile updated",
    };
  } catch (error: any) {
    console.log("Edit Profile Error:", error);
    return { success: false, message: "Failed to update profile" };
  }
};

export default editProfile;
