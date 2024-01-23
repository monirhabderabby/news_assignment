"use client";

import { login } from "@/actions/auth/login";
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
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const LoginForm = () => {
  const [mount, setMount] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMount(true);
  }, []);
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (!mount) {
    return null;
  }

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    const toastId = toast.loading("logging...");

    startTransition(() => {
      login(values).then((res) => {
        if (res.error) {
          toast.error(res.error, {
            id: toastId,
          });
        }

        if (res.success) {
          toast.success(res.success, {
            id: toastId,
          });
        }
      });
    });
  };
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>

      <CardFooter>
        <div className="text-[14px] text-center font-normal">
          Don't have an account?{" "}
          <Link
            className="text-orange-500 hover:text-orange-600 font-semibold"
            href="/registration"
          >
            Registration
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
