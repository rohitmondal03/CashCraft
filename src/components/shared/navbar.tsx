"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

import { routes } from "~/lib/route-config";
import { useAuth } from "~/hooks/use-auth";
import { cn } from "~/lib/utils";
import { buttonVariants } from "../ui/button";
import { LogOutButton } from "../buttons/sign-out-button";


export default function Navbar() {
  const pathName = usePathname();
  const { home, dashboard, login, signup, pricing } = routes;
  const { user } = useAuth();

  return (
    <nav className={classNames({
      "flex flex-row items-center justify-around": true,
      "z-50": true,
      "py-6 px-12": true,
      "border-b-2 border-gray-400": true,
      "backdrop-blur-2xl": true,
      "sticky top-0 left-0 w-full h-20": true,
    })}>
      <Link
        href={home()}
        className="text-3xl font-bold"
      >
        CashCraft
      </Link>


      <div className={classNames({
        "flex gap-x-8 items-center": true,
      })}>
        <Link
          href={pricing()}
          className={cn(buttonVariants({
            variant: pathName === pricing() ? "secondary" : "link"
          }))}
        >
          Pricing
        </Link>

        {!user ? (
          <>
            <Link
              href={signup()}
              className={cn(buttonVariants({
                variant: pathName === signup() ? "secondary" : "link"
              }))}
            >
              Sign Up
            </Link>

            <Link
              href={login()}
              className={cn(buttonVariants({
                variant: pathName === login() ? "secondary" : "link"
              }))}
            >
              Log In
            </Link>
          </>
        ) : (
          <>
            <Link
              href={dashboard()}
              className={cn(buttonVariants({
                variant: pathName === dashboard() ? "secondary" : "link"
              }))}
            >
              Dashboard
            </Link>

            <LogOutButton />
          </>
        )}
      </div>
    </nav>
  )
}