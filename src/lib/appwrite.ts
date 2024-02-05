import { Account, Client, Databases, Storage } from "appwrite";

import { env } from "~/env";


export const appwriteClient = new Client()
  .setEndpoint(env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(env.NEXT_PUBLIC_APPWRITE_PROJECT)


export const appwriteAccount= new Account(appwriteClient);
export const appwriteStorage= new Storage(appwriteClient);
export const appwriteDatabase= new Databases(appwriteClient);