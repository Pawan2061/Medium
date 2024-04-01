import prisma from "@/utils/db";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {},
        email: {},
        password: {},
        id: {},
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const userFromDb = await prisma.user.findUnique({
          where: {
            // @ts-ignore
            email: credentials.email,
          },
        });

        if (!userFromDb) return null;

        if (userFromDb.password !== credentials.password) return null;

        return {
          id: userFromDb.id,
          email: userFromDb.email,
          name: userFromDb.username,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session: ({ session, token, user }: any) => {
      console.log(session);
      if (session && session.user) {
        session.user.id = token.id;
      }
      console.log("session here");

      console.log(session);
      console.log("session ended");

      return session;
    },
  },
};
