import type { TUpdateUserDetails } from "types";
import { appwriteAccount } from "../appwrite";


export async function updateUserDetails(val: TUpdateUserDetails) {
  // await appwriteAccount.updateName(val.name);
  await appwriteAccount.updateEmail(val.email, val.password);
  // console.log(val)
}