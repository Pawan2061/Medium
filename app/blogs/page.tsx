import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GETBLOGS } from "../actions";

export default async function Blogs() {
  const blogs = await GETBLOGS();
  // @ts-ignore
  const mappedBlogs = blogs.slice(0, 5);

  return (
    <div>
      <h1 className="text-4xl flex justify-center">
        The blogs updated by our users
      </h1>
      {/* @ts-ignore */}

      {mappedBlogs.map((blog: any) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
      <Link href="/ourstory " className="flex justify-center">
        <Button>Add your blogs</Button>
      </Link>
    </div>
  );
}
