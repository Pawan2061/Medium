"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "./ui/button";

import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form";
import { Input } from "./ui/input";
const FormSchema = z.object({
  username: z.string().min(2, { message: "Username must be bigger than 2" }),
  email: z.string().email(),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

// type FormData = z.infer<typeof FormSchema>;
export default function FormPage() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: FormData) {
    // @ts-ignore

    const { email, username, password } = data;

    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
        username,
      });

      console.log(response.status);

      if (!response) {
        throw new Error("Network response was not ok");
      }
      router.push("/");
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  }

  return (
    <>
      <div className="flex p-4">
        <h1 className="text-4xl">
          Lets get started with us.
          <Link href="/" className="underline">
            Join us
          </Link>
        </h1>
      </div>
      {/* @ts-ignore */}

      <Form {...form} className="w-2/3 space-y-6">
        {/* @ts-ignore */}

        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display email.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
