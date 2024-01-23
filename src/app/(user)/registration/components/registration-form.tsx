"use client";

import { register } from "@/actions/auth/register";
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
import { registrationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { CldUploadWidget } from "next-cloudinary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const RegistrationForm = () => {
  const [mount, setMount] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMount(true);
  }, []);
  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      image: "",
    },
    mode: "onChange",
  });

  if (!mount) {
    return null;
  }

  const router = useRouter();

  const onSubmit = (values: z.infer<typeof registrationSchema>) => {
    const toastId = toast.loading("Please wait...");

    startTransition(() => {
      register(values).then((res) => {
        if (res?.error) {
          toast.error(res.error, {
            id: toastId,
          });
        }

        if (res?.success) {
          toast.success(res.success, {
            id: toastId,
          });
          form.reset();
          router.push("/");
        }
      });
    });
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
          <Button type="submit" className="w-full" disabled={isPending}>
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
