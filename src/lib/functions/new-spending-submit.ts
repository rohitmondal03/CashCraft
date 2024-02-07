import { ID } from "appwrite";

import type { TSpending } from "types";
import { env } from "~/env";
import { appwriteDatabase } from "../appwrite";


export async function submitNewSpending(val: TSpending, userId: string) {
  try {
    await appwriteDatabase.createDocument(
      env.NEXT_PUBLIC_APPWRITE_DB,
      env.NEXT_PUBLIC_APPWRITE_SPENDINGS_COLLECTION,
      ID.unique(),
      {
        ...val,
        userId: userId,
      }
    )
  }
  catch (error) {
    console.log(error);
  }
}