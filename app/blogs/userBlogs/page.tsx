import { findBlogs } from "@/app/actions";

export default async function UserBlog() {
  const blogs = await findBlogs();
  console.log(blogs);

  return (
    <div>
      {/* @ts-ignore */}
      {blogs.map((blog: any) => (
        // @ts-ignore

        <UserBlog key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
