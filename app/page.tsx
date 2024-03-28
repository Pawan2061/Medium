import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return <h1>welcome to the club {session.user.name}</h1>;
  }
  return <h1>hei</h1>;
}
