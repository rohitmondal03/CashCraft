"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import {
  Goal,
  User2,
  ArrowDown,
  List,
  IndianRupee,
} from "lucide-react"

import { cn } from "~/lib/utils";
import { routes } from "~/lib/config/route-config";
import { useAuth } from "~/hooks/use-auth";
import { LogOutButton } from "../buttons/sign-out-button";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup
} from "../ui/dropdown-menu"


export default function Navbar() {
  const pathName = usePathname();
  const { user } = useAuth();
  const {
    home,
    dashboard,
    login,
    signup,
    pricing,
    bills,
    goals,
    spending,
  } = routes;


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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={pathName.startsWith(dashboard()) ? "secondary" : "link"}>
                  Dashboard <ArrowDown className="ml-1 scale-75" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href={dashboard()}
                      className="flex items-center justify-center"
                    >
                      <User2 className="mr-2 scale-75" /> View Dashboard
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href={bills()}
                      className="flex items-center justify-center"
                    >
                      <List className="mr-2 scale-75" /> Bills
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Link
                      href={goals()}
                      className="flex items-center justify-center"
                    >
                      <Goal className="mr-2 scale-75" /> Financal Goals
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href={spending()}
                      className="flex items-center justify-center"
                    >
                      <IndianRupee className="mr-2 scale-75" /> Spending
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <LogOutButton />
          </>
        )}
      </div>
    </nav>
  )
}