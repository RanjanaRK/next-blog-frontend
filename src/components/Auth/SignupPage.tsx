import { RegisterFormType } from "@/lib/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { registerFormSchema } from "@/lib/zodSchema";

const RegisterForm = () => {
  const [vis, setVis] = useState(false);

  const [cVis, setCVis] = useState(false); // confirm password visibility

  const router = useRouter();

  const rhform = useForm<RegisterFormType>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmed: "",
    },
    resolver: zodResolver(registerFormSchema),
    mode: "all",
  });

  const { isSubmitting, isValid } = rhform.formState;

  const registerFormFunc = async (rfData: RegisterFormType) => {
    console.log(rfData);
  };

  return (
    <Form {...rhform}>
      <form
        onSubmit={rhform.handleSubmit(registerFormFunc)}
        className="space-y-4"
      >
        <FormField
          control={rhform.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your username"
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
                <div className="flex items-center justify-end relative">
                  <Input
                    type={vis ? "text" : "password"}
                    placeholder="Create a password"
                    className="bg-white/60"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-2"
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

        <FormField
          control={rhform.control}
          name="confirmed"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-900">Confirm Password</FormLabel>
              <FormControl>
                <div className="flex items-center justify-end relative">
                  <Input
                    type={cVis ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="bg-white/60"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-2"
                    onClick={() => setCVis(!cVis)}
                  >
                    {cVis ? (
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
          className="w-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 mt-6 "
          disabled={!isValid || isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin me-2 h-4 w-4" />
          ) : (
            <UserPlus className="me-2 h-4 w-4" />
          )}
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
