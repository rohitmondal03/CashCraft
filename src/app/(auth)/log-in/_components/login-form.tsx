import { useForm } from "react-hook-form"
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import classNames from 'classnames';

import { useAuth } from '~/hooks/use-auth';
import { loginSchema } from '~/schemas/auth-schemas';
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import Link from "next/link";


export default function LoginForm() {
  const { login } = useAuth();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })


  function submitLoginForm(values: z.infer<typeof loginSchema>) {
    login(values.email, values.password);
  }


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitLoginForm)}
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

        <Button type="submit" className='w-full'>
          Log In
        </Button>
      </form>
    </Form>
  )
}
