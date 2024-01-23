"use server";
import { prismaDb } from "@/lib/db";
import { registrationSchema } from "@/schemas";
import md5 from "md5";
import * as z from "zod";

export const register = async (values: z.infer<typeof registrationSchema>) => {
  const validatedFields = registrationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, image, name, password } = validatedFields.data;

  const existingUser = await prismaDb.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Account already exists!" };
  }

  const hashedPassword = md5(password);

  try {
    await prismaDb.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        image,
      },
    });
    return { success: "Account has been created!" };
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
