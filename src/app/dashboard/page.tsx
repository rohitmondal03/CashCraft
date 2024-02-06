"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import classNames from "classnames";

import { cn } from "~/lib/utils";
import { useAuth } from "~/hooks/use-auth";
import { routes } from "~/lib/config/route-config";
import { buttonVariants } from "~/components/ui/button";


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
        "flex flex-row items-center justify-around": true
      })}>
        <Link
          href={spending()}
          className={cn(buttonVariants({
            variant: "default",
            size: "lg"
          }))}
        >
          Add Spending
        </Link>

        <Link
          href={bills()}
          className={cn(buttonVariants({
            variant: "default",
            size: "lg"
          }))}
        >
          Add Bills
        </Link>

        <Link
          href={goals()}
          className={cn(buttonVariants({
            variant: "default",
            size: "lg"
          }))}
        >
          Financial Goals
        </Link>
      </div>
    </section>
  )
}
