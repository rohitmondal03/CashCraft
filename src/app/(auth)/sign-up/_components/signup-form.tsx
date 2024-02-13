import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";

import { useAuth } from "~/hooks/use-auth";
import { signupSchema } from "~/lib/validators/auth-schemas";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';


export default function SignUpForm() {
  const { signup } = useAuth();
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    }
  })


  function submitSignupForm(values: z.infer<typeof signupSchema>) {
    signup(values.email, values.password, values.password)
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitSignupForm)}
        className={classNames({
          "space-y-8": true,
          "w-96": true,
          "mx-auto": true,
        })}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g. johndoe@email.com"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage className="w-fit" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  {...field}
                />
              </FormControl>
              <FormMessage className="w-fit" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your Name</FormLabel>
              <FormControl>
                <Input type="text"
                  placeholder="e.g., John Doe"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage className="w-fit" />
            </FormItem>
          )}
        />

        <Button type="submit" className='w-full'>
          Sign Up
        </Button>
      </form>
    </Form>
  )
}