import { prismaDb } from "@/lib/db";

export const getUserById = async (id: number) => {
  const user = await prismaDb.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
};
export const getUserByEmail = async (email: string) => {
  const user = await prismaDb.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
};
