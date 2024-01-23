"use server";
import { signIn } from "@/auth";
import { prismaDb } from "@/lib/db";
import { LoginSchema } from "@/schemas";
import md5 from "md5";
import { AuthError } from "next-auth";
import * as z from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  const user = await prismaDb.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return { error: "User not found!" };
  }

  const dbPass = user.password;
  const passwordMatch = dbPass === md5(password);

  if (!passwordMatch) {
    return { error: "password mismatch!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    return {
      success: "Login successful",
    };
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };

        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};
