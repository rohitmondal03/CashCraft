"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import classNames from "classnames";

import { cn } from "~/lib/utils";
import { useAuth } from "~/hooks/use-auth";
import { routes } from "~/lib/config/route-config";
import UpdateUserDetailsForm from "./_components/user-details-form";
import { buttonVariants } from "~/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { MessageCircleWarning } from "lucide-react";


export default function DashboardPage() {
  const { user } = useAuth();
  const { push } = useRouter();
  const { login, bills, spending, goals } = routes;


  useEffect(() => {
    if (!user) {
      push(login());
    }
  }, [user])


  return (
    <section className="mx-auto">
      <div className={classNames({
        "space-y-6": true,
      })}>
        <h1 className="page_heading">
          Welcome to Your CashCraft Dashboard,
          <br />
          <span className="underline text-rose-500">{user?.name}</span>
        </h1>

        <p className={classNames({
          "text-muted-foreground": true,
        })}>
          Here's a snapshot of your financial world at a glance. Take control, set goals, and let CashCraft guide you toward financial success.
        </p>
      </div>


      <div className={classNames({
        "space-y-5": true,
        "border-2 border-gray-500 rounded-lg": true,
        "p-5": true,
      })}>
        <Alert className="text-red-500">
          <MessageCircleWarning color="red" className="h-4 w-4" />
          <AlertTitle>
            Important Information
          </AlertTitle>
          <AlertDescription>
            Change you information carefully !!
          </AlertDescription>
        </Alert>

        <UpdateUserDetailsForm />
      </div>


      <div className={classNames({
        "flex flex-row items-center justify-around": true
      })}>
        <Link
          href={spending()}
          className={cn(buttonVariants({
            variant: "secondary",
            size: "lg"
          }))}
        >
          Your Spending
        </Link>

        <Link
          href={bills()}
          className={cn(buttonVariants({
            variant: "secondary",
            size: "lg"
          }))}
        >
          Your Bills
        </Link>

        <Link
          href={goals()}
          className={cn(buttonVariants({
            variant: "secondary",
            size: "lg"
          }))}
        >
          Financial Goals
        </Link>
      </div>
    </section>
  )
}
