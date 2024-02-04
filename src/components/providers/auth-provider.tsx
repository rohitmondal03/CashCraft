"use client"

import { createContext, useEffect, useState } from "react";
import { type Models, ID } from "appwrite"

import type { TLayout } from "types";
import { appwriteAccount } from "~/lib/appwrite";


type TUserContext = {
  user: Models.Session | Models.User<Models.Preferences> | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}


export const UserContext = createContext<TUserContext | undefined>(undefined);


export function AuthProvider({ children }: TLayout) {
  const [user, setUser] = useState<Models.Session | Models.User<Models.Preferences> | null>(null);


  async function login(email: string, password: string) {
    const loggedIn = await appwriteAccount.createEmailSession(email, password);
    setUser(loggedIn);
  }


  async function logout() {
    await appwriteAccount.deleteSession("current")
    setUser(null)
  }


  async function signup(email: string, password: string) {
    await appwriteAccount.create(ID.unique(), email, password);
    await login(email, password);
  }


  async function init() {
    try {
      const loggedIn = await appwriteAccount.get();
      setUser(loggedIn)
    } catch (error) {
      setUser(null)
    }
  }


  useEffect(() => {
    void init();
  }, [])


  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}