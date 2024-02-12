"use client"

import { useRouter } from "next/navigation"
import { useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { useAuth } from "~/hooks/use-auth"
import { routes } from "~/lib/config/route-config"
import { updateUserDetailsSchema } from "~/schemas/auth-schemas"
import { updateUserDetails } from "~/lib/functions/user-details-update"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { useToast } from "~/components/ui/use-toast"
import {
  Form,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
  FormControl
} from "~/components/ui/form"


export default function UpdateUserDetailsForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const { dashboard } = routes;
  const { push } = useRouter();
  const form = useForm<z.infer<typeof updateUserDetailsSchema>>({
    resolver: zodResolver(updateUserDetailsSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: ""
    }
  });


  // Is button disabled ?
  const isButtonDisabled = useMemo(() => {
    const formValues = form.getValues();

    return String(formValues.email).length < 1 ||
      String(formValues.name).length < 1 ||
      formValues.name === String(user?.name) ||
      formValues.email === String(user?.email)

  }, [form.getValues()])


  // For updating user details
  const handleSubmit = () => {
    try {
      updateUserDetails(form.getValues());
      push(dashboard());
      toast({
        title: "Details updated successfully !!"
      })
    }
    catch (error) {
      toast({
        title: "Error !!",
        description: "There is an error updating details !! Try again later."
      });
    }
  }


  return (
    <form
      className="space-y-6"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Form {...form}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Update your Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. johndoe@gmail.com"
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
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  Update your Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. John Doe"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="mx-auto w-96" />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="New Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )
          }}
        />

        <Button disabled={isButtonDisabled} type="submit">
          Submit
        </Button>
      </Form>
    </form>
  )
}
