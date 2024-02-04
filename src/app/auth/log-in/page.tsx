"use client"

import { useState } from "react";
import { Button } from "~/components/ui/button";

import { useAuth } from "~/hooks/use-auth";


export default function LogInPage() {
  const { login } = useAuth();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  })

  return (
    <section className="mx-auto">
      <form onSubmit={(e) => {
        e.preventDefault();
        login(userDetails.email, userDetails.password);
      }}>
        <input
          type="text"
          placeholder="Enter email"
          value={userDetails.email}
          onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={userDetails.password}
          onChange={(e) => setUserDetails(prev => ({ ...prev, password: e.target.value }))}
        />

        <Button>Log In</Button>
      </form>
    </section>
  )
}
