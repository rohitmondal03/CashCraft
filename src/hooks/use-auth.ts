"use client"

import { useContext } from "react";

import { UserContext } from "~/components/providers/auth-provider";


export function useAuth() {
  const context = useContext(UserContext);
  if(!context) {
    throw new Error("useAuth must be wrapped with AuthProvider");
  }

  return context;
}