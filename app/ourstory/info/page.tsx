import { options } from "@/app/api/auth/[...nextauth]/options";
import { Cong } from "@/components/cong";
import { Loading } from "@/components/loading";
import { getServerSession } from "next-auth";
import { Suspense } from "react";

export default async function Info() {
  const session = await getServerSession(options);

  return (
    <div className="flex justify-center">
      <Suspense fallback={<Loading />}>
        <Cong />;
      </Suspense>
    </div>
  );
}
