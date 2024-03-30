import { Cong } from "@/components/cong";
import { Loading } from "@/components/loading";
import { Suspense } from "react";

export default function Info() {
  return (
    <div className="flex justify-center">
      <Suspense fallback={<Loading />}>
        <Cong />;
      </Suspense>
    </div>
  );
}
