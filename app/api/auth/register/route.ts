import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    console.log(email);
    const user = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    return NextResponse.json({ user: user });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse JSON input" },
      { status: 400 }
    );
  }
}
