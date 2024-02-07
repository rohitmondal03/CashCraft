"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { useAuth } from "~/hooks/use-auth"
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
    <form>
      <Form {...form}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Enter title...
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Enter amount...
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
          name="title"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>
                  Enter amount...
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
