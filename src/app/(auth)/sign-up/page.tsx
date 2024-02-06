"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import classNames from "classnames";

import { routes } from "~/lib/config/route-config";
import { useAuth } from "~/hooks/use-auth"
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import SignUpForm from "./_components/signup-form";


export default function SignUpPage() {
  const { user } = useAuth();
  const { push } = useRouter();
  const { dashboard, login } = routes;


  useEffect(() => {
    if (user) {
      push(dashboard())
    }
  }, [user])


  return (
    <section>
      <div className={classNames({
        "space-y-4": true,
      })}>
        <h1 className="page_heading">
          Join CashCraft Today
        </h1>

        <p className={classNames({
          "text-muted-foreground": true,
        })}>
          Create your free CashCraft account to take the first step towards mastering your finances. Experience hassle-free expense tracking, insightful budgeting, and powerful financial insights.
        </p>
      </div>


      <SignUpForm />


      <div>
        <p className="text-red-500 font-bold">
          Already have an account?
        </p>

        <Link
          href={login()}
          className={cn(buttonVariants({
            variant: "link",
            className: "flex items-center justify-center w-fit mx-auto"
          }))}
        >
          Log In
        </Link>
      </div>
    </section>
  )

}
