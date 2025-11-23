"use server";

import kyClient from "@/lib/ky/kyClient";
import { cookies } from "next/headers";

const logout = async () => {
  try {
    (await cookies()).delete("token");

    return {
      success: true,
      message: "Logout successful",
    };
  } catch (err) {
    return {
      success: false,
      message: "Logout failed",
    };
  }
};

export default logout;
