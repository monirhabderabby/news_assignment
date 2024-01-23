import md5 from "md5";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schemas";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export default {
  providers: [
    Credentials({
      async authorize(credentials, request) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user) return null;

          const dbPass = user.password;

          const passwordMatch = dbPass === md5(password);

          if (passwordMatch) {
            const userWithCorrectType: User = {
              ...user,
              id: user.id.toString(),
            };
            return userWithCorrectType;
          }
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
