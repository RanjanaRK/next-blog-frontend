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

export const blogFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title must be at least 5 characters." })
    .max(100, { message: "Title must not be longer than 100 characters." }),
  content: z.string().min(200, {
    message: "Blog content must be at least 200 characters.",
  }),
  slug: z
    .string()
    .min(5, { message: "Slug must be at least 5 characters." })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must be lowercase and hyphenated (e.g., my-awesome-post).",
    }),

  category: z.string(),
});

export const profileFormSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  bio: z.string(),
  location: z.string().optional(),
});
