import { ID } from "appwrite";

import type { TBill } from "types";
import { env } from "~/env";
import { appwriteDatabase } from "../appwrite";


export async function submitNewBill(val: TBill, userId: string) {
  try {
    const data = await appwriteDatabase.createDocument(
      env.NEXT_PUBLIC_APPWRITE_DB,
      env.NEXT_PUBLIC_APPWRITE_BILL_COLLECTION,
      ID.unique(),
      {
        ...val,
        userId: userId,
      }
    )

    console.log(data)
  }
  catch (error) {
    console.log(error)
  }
}