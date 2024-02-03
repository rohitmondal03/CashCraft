import { Client, Storage } from "appwrite";

import { env } from "~/env";


export const appwriteClient = new Client()
  .setEndpoint(env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(env.NEXT_PUBLIC_APPWRITE_PROJECT)


export const appwriteStorage= new Storage(appwriteClient);