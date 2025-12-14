"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { profileFormSchema } from "@/lib/zodSchema";
import { ProfileFormSchemaType, User } from "@/lib/types";
import editProfile from "@/hooks/editProfile";

const EditProfileForm = ({
  userId,
  userD,
}: {
  userId: number;
  userD: User;
}) => {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "John",
      bio: "Full Stack Developer",
      email: "john@gmail.com",
      location: "Mumbai, India",
    },
  });

  const onSubmit = async (data: ProfileFormSchemaType) => {
    console.log("Updated Profile:", data);
    const abc = await editProfile(data, userId);

    console.log(abc);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto  p-6  bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Edit Profile
        </h2>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter your name" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Full Stack Developer" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="email@example.com"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="City, Country" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Save Changes
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default EditProfileForm;
