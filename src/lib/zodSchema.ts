import z from "zod";

export const loginFormSchema = z.object({
  identifier: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const registerFormSchema = z
  .object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirmed: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmed, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
