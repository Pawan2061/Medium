"use server";

import prisma from "@/utils/db";

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function CreateBlog(values: any) {
  const session = await getServerSession();

  console.log("heaha");

  const { name, description }: any = values;
  console.log(name);

  try {
    console.log("hello");

    const newBlog = await prisma.blog.create({
      data: {
        name,
        description,
        createdBy: {
          connect: {
            email: session.user.email,
          },
        },
      },
    });
    console.log(newBlog);

    return {
      message: "blog created",
    };
  } catch (error) {
    console.log("some error is therw");

    return {
      error: error.message,
    };
  }
}

export async function GETBLOGS() {
  const blogs = await prisma.blog.findMany();

  if (!blogs) {
    return NextResponse.json({ message: "The blogs are not registered yet" });
  }
  console.log(blogs);

  return blogs;
}
