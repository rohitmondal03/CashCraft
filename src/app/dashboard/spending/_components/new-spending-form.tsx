"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { spendingSchema } from "~/schemas/spending-schema"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "~/components/ui/form"


export default function NewSpendingForm() {
  const form = useForm<z.infer<typeof spendingSchema>>({
    resolver: zodResolver(spendingSchema),
    defaultValues: {
      title: "",
      amount: "100",
      category: "BILLS",
    }
  })


  return (
    <form
      className="space-y-6"
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
            <>
              <FormItem>
                <FormLabel>
                  Select category of bill payment
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

              <div>
                {/* {catogoryValues.map} */}
              </div>
            </>
          )}
        />
      </Form>

      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}
