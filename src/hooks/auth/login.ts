// "use server";

// import kyClient from "@/lib/ky/kyClient";
// import { LoginFormType } from "@/lib/types";

// const login = async (fdata: LoginFormType) => {
//   try {
//     const abc = await kyClient
//       .post("api/auth/local", {
//         json: {
//           identifier: fdata.identifier,
//           password: fdata.password,
//         },
//       })
//       .json();

//     const token = abc.jwt;

//     // return {
//     //   success: true,
//     //   message: "Login successful",
//     //   data: abc,
//     // };
//   } catch (error: any) {
//     let errorMessage = "Login failed";

//     if (error.response) {
//       const err = await error.response.json();
//       errorMessage = err.error?.message || errorMessage;
//     }

//     return {
//       success: false,
//       message: errorMessage,
//     };
//   }
// };

// export default login;

"use server";

import kyClient from "@/lib/ky/kyClient";
import ky from "ky";
import { cookies } from "next/headers";

export async function login(data: { identifier: string; password: string }) {
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
