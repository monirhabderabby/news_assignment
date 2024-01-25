import { categories, user } from "@prisma/client";

export type NewsType = {
  id: number;
  title: string;
  short_des: string;
  image: string;
  keywords: string;
  type: string; // You might want to replace this with the actual type for newsType
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  catID: number;
  userID: number;
  createdAt: Date; // You might want to replace this with the actual type for DateTime
  updatedAt: string; // You might want to replace this with the actual type for DateTime
  categories: categories;
  user: user;
};

export type CommentType = {
  id: number;
  test: string;
  userId: number;
  newsId: number;
  user: user;
};
