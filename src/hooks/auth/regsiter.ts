import kyClient from "@/lib/ky/kyClient";
import { RegisterFormType } from "@/lib/types";
import { json } from "zod";

const regsiter = async (fdata: RegisterFormType) => {
  try {
    const abc = await kyClient
      .post("api/auth/local/register", {
        json: {
          username: fdata.username,
          email: fdata.email,
          password: fdata.password,
        },
      })
      .json();
    console.log(abc);
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export default regsiter;
