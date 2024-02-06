import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import type { TBill } from "types"
import { useAuth } from "~/hooks/use-auth"
import { newBillSchema } from "~/schemas/new-bill-schema"
import { submitNewBill } from "~/lib/functions/new-bill-submit"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "~/components/ui/select"
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormControl,
} from "~/components/ui/form"


export default function NewBillForm() {
  const { user } = useAuth();
  const form = useForm<z.infer<typeof newBillSchema>>({
    resolver: zodResolver(newBillSchema),
    defaultValues: {
      title: "",
      amount: 100,
      recurrance: "MONTHLY",
    }
  })


  function submitBill() {
    submitNewBill(form.getValues(), String(user?.$id))
  }


  return (
    <form
      className="space-y-6"
      onSubmit={form.handleSubmit(submitBill)}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Enter you bill title
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter title..."
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
                Enter bill amount (in Rs.)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter amount..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="mx-auto w-96" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="recurrance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Select recurrance frequency:
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={(val) => field.onChange(val)}
                  {...field}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select recurrance type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ONE-TIME">One Time</SelectItem>
                    <SelectItem value="WEEKLY">Weekly</SelectItem>
                    <SelectItem value="MONTHLY">Monthly</SelectItem>
                    <SelectItem value="BI-MONTHLY">Bi-Monthly</SelectItem>
                    <SelectItem value="TRI-MONTHLY">Tri-Monthly</SelectItem>
                    <SelectItem value="YEARLY">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </form>
  )
}
