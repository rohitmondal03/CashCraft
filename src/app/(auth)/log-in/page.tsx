"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import classNames from "classnames";

import { routes } from "~/lib/config/route-config";
import { useAuth } from "~/hooks/use-auth";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import LoginForm from "./_components/login-form";


export default function LogInPage() {
  const { user } = useAuth();
  const { push } = useRouter();
  const { dashboard, signup } = routes;


  useEffect(() => {
    if (user) {
      push(dashboard())
    }
  }, [user])


  return (
    <section className="mx-auto">
      <div className={classNames({
        "space-y-4": true,
      })}>
        <h1 className="page_heading">
          Welcome Back to CashCraft
        </h1>

        <p className={classNames({
          "text-muted-foreground": true,
        })}>
          Log in to your CashCraft account to gain access to your personalized financial dashboard. Take control of your expenses, set budgets, and achieve your financial goals with ease.
        </p>
      </div>


      <LoginForm />


      <div>
        <p className="text-red-500 font-bold">
          Don’t have an account?
        </p>

        <Link
          href={signup()}
          className={cn(buttonVariants({
            variant: "link",
            className: "flex items-center justify-center w-fit mx-auto"
          }))}
        >
          Sign Up
        </Link>
      </div>
    </section>
  )
}
