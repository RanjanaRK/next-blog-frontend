import z from "zod";
import { loginFormSchema, registerFormSchema } from "./zodSchema";

export type LoginFormType = z.infer<typeof loginFormSchema>;
export type RegisterFormType = z.infer<typeof registerFormSchema>;

export interface StrapiResponse<T> {
  data: T[];
  meta: any;
}

export interface Item {
  id: number;
  documentId: string;
  title: string;
  slug: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  users_permissions_user: User | null;
  category: Category;
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
