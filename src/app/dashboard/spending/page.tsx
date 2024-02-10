"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Models } from 'appwrite'
import classNames from 'classnames'

import { env } from '~/env'
import { appwriteDatabase } from '~/lib/appwrite'
import { routes } from '~/lib/config/route-config'
import { useAuth } from '~/hooks/use-auth'
import NewSpendingForm from './_components/new-spending-form'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '~/components/ui/dialog'


export default function SpendingPage() {
  const { user } = useAuth();
  const { push } = useRouter();
  const { login } = routes;
  const [isLoading, setLoading] = useState(false);
  const [spendingBillList, setSpendingBillList] = useState<Models.Document[]>([])


  // Redirect to Login page if not logged in.
  useEffect(() => {
    if (!user) {
      push(login())
    }
  }, [])


  // for getting all spending bills
  useEffect(() => {
    async function getUsersBills() {
      setLoading(true);

      const spendingBills = await appwriteDatabase.listDocuments(
        env.NEXT_PUBLIC_APPWRITE_DB,
        env.NEXT_PUBLIC_APPWRITE_SPENDINGS_COLLECTION,
      )
      setSpendingBillList(spendingBills.documents.filter(doc => doc.userId === user?.$id));

      setLoading(false);
    }
    void getUsersBills();
  }, [user])


  return (
    <section>
      <div className={classNames({
        "space-y-4": true,
      })}>
        <h1 className="page_heading">
          Track Your Spending
        </h1>

        <p className={classNames({
          "text-muted-foreground": true,
        })}>
          Welcome to your Spending Page! Keep tabs on your expenses, categorize your spending, and gain valuable insights into your financial habits.
        </p>
      </div>


      {isLoading ? (
        <p>Loading...</p>
      ) :
        spendingBillList?.length > 0 ?
          spendingBillList?.map((doc, idx) => (
            <div key={idx}>
              <p>{idx + 1 + "." + " "}{doc.title}</p>
              <p>{doc.bill}</p>
            </div>
          ))
          :
          <p>No Bill Found!</p>
      }


      <Dialog>
        <DialogTrigger asChild>
          <Button>Add spending bill</Button>
        </DialogTrigger>
        <DialogContent>
          <NewSpendingForm />
        </DialogContent>
      </Dialog>
    </section>
  )
}
