"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Form, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().email(),
});

const NewsLetter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/subscription`, values)
      .then((res) => console.log(res))
      .catch((error) => {
        if (error.response.data.includes("Detect duplicate subscription!")) {
          toast.error(error.response.data);
        } else {
          toast.error("Something went wrong!");
        }
      })
      .finally(() => {
        router.refresh();
        setIsLoading(false);
      });
  };
  return (
    <Card className="sticky top-0">
      <CardHeader>
        <CardTitle>Newsletter</CardTitle>
        <CardDescription>You will never miss our latest news</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    disabled={isLoading}
                    {...field}
                    type="email"
                    placeholder="Enter your email address"
                  />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              Subscribe
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <p className="text-slate-400 text-[14px]">
          We promise not to spam you!
        </p>
      </CardFooter>
    </Card>
  );
};

export default NewsLetter;
