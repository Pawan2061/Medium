import prisma from "@/utils/db";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const userFromDb = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!userFromDb) return null;

        if (userFromDb.password !== credentials.password) return null;

        return {
          id: userFromDb.id,
          email: userFromDb.email,
          username: userFromDb.username,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
