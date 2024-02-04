"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "~/hooks/use-auth";
import { routes } from "~/lib/config/route-config";


export default function DashboardPage() {
  const { user } = useAuth();
  const { push } = useRouter();
  const { login } = routes;


  useEffect(() => {
    if (!user) {
      push(login());
    }
  }, [user])


  return (
    <section>
      dashboard page
    </section>
  )
}
