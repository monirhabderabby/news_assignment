"use client";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { commentSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CommentFormProps {
  userId: number;
  newsId: number;
}
const CommentForm: React.FC<CommentFormProps> = ({ userId, newsId }) => {
  const [isLoading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof commentSchema>) => {
    setLoading(true);
    const data = {
      test: values.text,
      userId,
      newsId,
    };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/comment`, data);
      form.reset();
    } catch (error) {
      toast.error("Failed to submit comment!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <Textarea
                  disabled={isLoading}
                  placeholder="Write your comment here..."
                  {...field}
                />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button disabled={isLoading}>Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
