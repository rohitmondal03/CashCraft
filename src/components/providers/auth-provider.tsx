"use client"

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { type Models, ID } from "appwrite"

import type { TLayout, TUser } from "types";
import { appwriteAccount } from "~/lib/appwrite";
import { routes } from "~/lib/config/route-config"
import { useToast } from "../ui/use-toast";


type TUserContext = {
  user: (Models.Session | Models.User<Models.Preferences>) & Partial<TUser> | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}


export const UserContext = createContext<TUserContext | undefined>(undefined);


export function AuthProvider({ children }: TLayout) {
  const [user, setUser] = useState<
    (Models.Session | Models.User<Models.Preferences>) & Partial<TUser> | null
  >(null);
  const { push } = useRouter();
  const { dashboard, home } = routes;
  const { toast } = useToast();


  async function login(email: string, password: string) {
    try {
      const loggedIn = await appwriteAccount.createEmailSession(email, password);
      setUser(loggedIn);
      push(dashboard());

      toast({
        title: "Successfully Logged in",
        description: `Welcome back to CashCraft`,
      })
    }
    catch (error) {
      toast({
        title: "Can't Login to CashCraft",
        description: String(error),
      })
    }
  }


  async function logout() {
    await appwriteAccount.deleteSession("current");
    setUser(null);
    push(home());

    toast({
      title: "Succcesfully Logged Out",
      description: "You've successfully logged out from your account"
    });
  }


  async function signup(email: string, password: string, name: string) {
    try {
      const signedUp = await appwriteAccount.create(ID.unique(), email, password, name);
      await login(email, password);

      toast({
        title: 'Signed Up successfully !!',
        description: `Welcome ${signedUp.name}`
      })
    }
    catch (error) {
      toast({
        title: "Cant make a new CashCraft account",
        description: String(error),
      })
    }
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