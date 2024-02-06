"use client"

import { type Models } from "appwrite"
import Link from "next/link"
import { useEffect, useState } from "react"

import { env } from "~/env"
import { useAuth } from "~/hooks/use-auth"
import { appwriteDatabase } from "~/lib/appwrite"
import NewBillForm from "./_components/new-bill-form"
import { Button } from "~/components/ui/button"
import { Dialog, DialogTrigger, DialogHeader, DialogTitle, DialogContent } from "~/components/ui/dialog"


export default function BillsPage() {
  const { user } = useAuth();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [billList, setBillList] = useState<Models.Document[]>([])


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
    <section className="mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">
          Manage Your Bills with Ease
        </h1>

        <p className="text-muted-foreground">
          Welcome to your Bills Page! Stay on top of your financial commitments by adding and managing your bills effortlessly. Here, you have complete control over your recurring expenses.
        </p>
      </div>


      {isLoading ? (
        <p>Loading...</p>
      ) :
        billList?.length > 0 ?
          billList?.map((doc, idx) => (
            <>
              <p>{idx + 1 + "." + " "}{doc.title}</p>
              <p>{doc.bill}</p>
            </>
          ))
          :
          <p>No Bill Found!</p>
      }


      <Dialog>
        <DialogTrigger asChild>
          <Button>
            {billList?.length > 0 ? "Add new Bill" : "Add first bill"}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <NewBillForm />
        </DialogContent>
      </Dialog>
    </section>
  )
}
