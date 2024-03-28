"use client";
import { Signuppage } from "@/components/signuppage";
import { getServerSession } from "next-auth";

export default async function Login() {
  const session = await getServerSession();
  if (!session) {
    return <Signuppage />;
  }
  return <h1>Welcome {session.user.name}</h1>;
}
