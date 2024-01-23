"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address!",
  }),
  password: z.string(),
  name: z.string().min(4),
  image: z.string(),
});

const RegistrationForm = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      image: "",
    },
    mode: "onChange",
  });
  const watch = form.watch;

  if (!mount) {
    return null;
  }

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    const isValid = loginSchema.safeParse(values);
    console.log(values);
  };

  const onUpload = (result: any) => {
    const imageUrl = result.info.secure_url;
    form.setValue("image", imageUrl);
  };
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create new Account</CardTitle>
        <CardDescription>Fill up the form</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your name"
              onChange={(e) => form.setValue("name", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              onChange={(e) => form.setValue("email", e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Your password"
              onChange={(e) => form.setValue("password", e.target.value)}
            />
          </div>
          <CldUploadWidget onUpload={onUpload} uploadPreset="tjd9rj5t">
            {({ open, isLoading }) => {
              const onClick = () => {
                open();
              };

              return (
                <div className="space-y-1.5">
                  <Label>Profile</Label>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    disabled={isLoading}
                    onClick={onClick}
                  >
                    Upload Your photo
                  </Button>
                </div>
              );
            }}
          </CldUploadWidget>
          <Button type="submit" className="w-full">
            Registration
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <div className="text-[14px] text-center font-normal">
          Already have an account?{" "}
          <Link
            className="text-orange-500 hover:text-orange-600 font-semibold"
            href="/login"
          >
            Log In
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RegistrationForm;
