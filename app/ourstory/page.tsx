import { BlogForm } from "@/components/blog-form";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Blog() {
  const session = await getServerSession();
  if (!!session) {
    return (
      <div className="flex justify-center">
        <BlogForm />
      </div>
    );
  }
  if (!session) {
    return (
      <div className="flex justify-center  mt-4">
        <h1 className="text-2xl ">
          Youre not signed it. Please log in to continue
        </h1>
        <Button className="mx-2">
          <Link href="/login">Sign in</Link>
        </Button>
      </div>
    );
  }
}
