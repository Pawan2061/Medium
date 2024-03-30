/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6fhFc7m6yiJ
 */
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "./ui/button";

export async function Cong() {
  const session = await getServerSession();

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">
            Congratulations! {session.user.name}
          </CardTitle>
          <CardDescription>You did it!</CardDescription>
        </CardHeader>
        <CardFooter className="justify-center">
          <Link href="/ourstory">
            <Button> Add more to the tally</Button>
          </Link>
        </CardFooter>
      </Card>
    </>
  );
}
