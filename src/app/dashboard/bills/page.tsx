"use client"

import { type Models } from "appwrite"
import { useEffect, useState } from "react"

import { env } from "~/env"
import { useAuth } from "~/hooks/use-auth"
import { appwriteDatabase } from "~/lib/appwrite"


export default function BillsPage() {
  const { user } = useAuth();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [billList, setBillList] = useState<Models.Document[]>()


  useEffect(() => {
    async function getUsersBills() {
      setLoading(true);

      const bills = await appwriteDatabase.listDocuments(
        env.NEXT_PUBLIC_APPWRITE_DB,
        env.NEXT_PUBLIC_APPWRITE_BILL_COLLECTION,
      )
      setBillList(bills.documents.filter(doc => doc.userId === user?.$id));

      setLoading(false);
    }
    void getUsersBills();
  }, [user])


  return (
    <section>
      <div>
        <h1 className="text-4xl font-bold">
          Bills Page
        </h1>
      </div>


      {isLoading ? (
        <p>Loading...</p>
      ) :
        Number(billList?.length) > 0 ?
          billList?.map((doc, idx) => (
            <>
            <p>{idx + 1 + "." + " "}{doc.title}</p>
            <p>{doc.bill}</p>
            </>
          ))
          :
          <p>No  Bill Found!</p>
      }
    </section>
  )
}
