import { getServerSession } from "next-auth";

import { Landing } from "@/components/landing";

export default async function Home() {
  const session = await getServerSession();
  console.log(session);

  return <Landing />;
}
