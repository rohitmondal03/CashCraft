"use client"

import Link from "next/link";
import classNames from "classnames";

import { routes } from "~/lib/route-config";
import { useAuth } from "~/hooks/use-auth";



export default function Navbar() {
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
        "flex gap-x-10" : true,
      })}>
        <Link href={pricing()}>Pricing</Link>
        {!user ? (
          <>
            <Link href={signup()}>Sign Up</Link>
            <Link href={login()}>Log In</Link>
          </>
        ) : (
          <Link href={dashboard()}>Dashboard</Link>
        )}
      </div>
    </nav>
  )
}
