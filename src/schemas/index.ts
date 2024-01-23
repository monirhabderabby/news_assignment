import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address!",
  }),
  password: z.string(),
});

export const registrationSchema = z.object({
  email: z.string().email({
    message: "Invalid email address!",
  }),
  password: z.string(),
  name: z.string().min(4),
  image: z.string(),
});

export const commentSchema = z.object({
  text: z.string().max(250, {
    message: "Comment can be highest 250 characters",
  }),
});
