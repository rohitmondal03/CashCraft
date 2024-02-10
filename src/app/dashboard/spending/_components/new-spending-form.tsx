"use client"

import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { routes } from "~/lib/config/route-config"
import { useAuth } from "~/hooks/use-auth"
import { spendingSchema } from "~/schemas/spending-schema"
import { submitNewSpending } from "~/lib/functions/new-spending-submit"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useToast } from "~/components/ui/use-toast"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "~/components/ui/form"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent
} from "~/components/ui/select"
import { Textarea } from "~/components/ui/textarea"


export default function NewSpendingForm() {
  const { user } = useAuth();
  const { push } = useRouter();
  const { toast } = useToast();
  const { dashboard } = routes;
  const form = useForm<z.infer<typeof spendingSchema>>({
    resolver: zodResolver(spendingSchema),
    defaultValues: {
      title: "",
      description: "",
      amount: "100",
      category: "BILLS",
    }
  })


  // spending category array
  const spendingCategoryList = spendingSchema._def.shape().category._def.values;


  // submit function
  function submitSpendingBill() {
    try {
      submitNewSpending(form.getValues(), String(user?.$id));
      push(dashboard());
      toast({
        title: "New spending bill submitted successfully !!"
      })
    }
    catch (error) {
      toast({
        title: "Error submitting new spending bill !!",
        description: "Please try again."
      })
    }
  }


  return (
    <form
      className="space-y-6"
      onSubmit={form.handleSubmit(submitSpendingBill)}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter title..."
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Description
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Can write anything important of this spending..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Bill Amount
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter amount..."
                  type="number"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Select category of bill payment
              </FormLabel>
              <Select
                onValueChange={val => field.onChange(val)}
                {...field}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select bill category" />
                </SelectTrigger>
                <SelectContent>
                  {spendingCategoryList.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />
      </Form>

      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}
