"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginFormType } from "@/lib/types";
import { loginFormSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [vis, setVis] = useState(false);

  const rhform = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginFormSchema),
    mode: "all",
  });

  const { isSubmitting, isValid } = rhform.formState;

  const loginFormFunc = async (lfData: LoginFormType) => {
    console.log(lfData);
  };

  return (
    <Form {...rhform}>
      <form onSubmit={rhform.handleSubmit(loginFormFunc)} className="space-y-4">
        <FormField
          control={rhform.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className="bg-white/60"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={rhform.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Password</FormLabel>
              <FormControl>
                <div className="flex items-center justify-end">
                  <Input
                    type={vis ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-white/60"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute pe-2"
                    onClick={() => setVis(!vis)}
                  >
                    {vis ? (
                      <Eye size={16} className="text-gray-600" />
                    ) : (
                      <EyeOff size={16} className="text-gray-600" />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 mt-6"
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin me-2 h-4 w-4" />
          ) : (
            <LogIn className="me-2 h-4 w-4" />
          )}
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
