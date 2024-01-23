import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import authConfig from "./auth.config";
import { getUserById } from "./data/user";
import { prismaDb } from "./lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    // @ts-ignore
    async session({ token, session }: { session: Session; token: JWT }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.name && session.user) {
        session.user.name = token.name;
      }

      if (token.avatar && session.user) {
        session.user.image = token.image as string;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(Number(token.sub));

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.image = existingUser.image;

      return token;
    },
  },

  secret: process.env.AUTH_SECRET,
  adapter: PrismaAdapter(prismaDb),
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});
