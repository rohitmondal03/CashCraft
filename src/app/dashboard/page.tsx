"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { env } from "~/env";
import { useAuth } from "~/hooks/use-auth";
import { routes } from "~/lib/config/route-config";
import { appwriteDatabase } from "~/lib/appwrite";


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
