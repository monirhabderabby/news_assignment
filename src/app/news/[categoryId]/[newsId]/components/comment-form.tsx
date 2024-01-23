"use client";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { commentSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface CommentFormProps {}
const CommentForm: React.FC<CommentFormProps> = ({}) => {
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (values: z.infer<typeof commentSchema>) => {};
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
                <Textarea placeholder="Write your comment here..." {...field} />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button>Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
