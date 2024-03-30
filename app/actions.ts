"use server";

import prisma from "@/utils/db";

import { NextResponse } from "next/server";

export async function CreateBlog(values: any) {
  console.log(prisma);
  console.log("heaha");

  const { name, description } = values;
  console.log(name);

  try {
    console.log("hello");

    await prisma.blog.create({
      data: {
        name,
        description,
      },
    });

    console.log("hi there");

    return {
      message: "blog created",
    };
  } catch (error) {
    console.log("some error is therw");

    return NextResponse.json({ msg: error });
  }
}
