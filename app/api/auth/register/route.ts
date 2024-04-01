import prisma from "@/utils/db";
import { NextResponse } from "next/server";
import { z } from "zod";
const userSchema = z.object({
  username: z.string().min(3, "The name is too small"),
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();
    const validate = userSchema.safeParse({
      username: username,
      email: email,
      password: password,
    });
    if (!validate) {
      return NextResponse.json({ message: "Invalid user data" });
    }

    console.log(email);
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    return NextResponse.json({ message: "user is created" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse JSON input" },
      { status: 400 }
    );
  }
}
