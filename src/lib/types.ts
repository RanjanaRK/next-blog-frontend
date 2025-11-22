import z from "zod";
import { loginFormSchema, registerFormSchema } from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type RegisterFormType = z.infer<typeof registerFormSchema>;
