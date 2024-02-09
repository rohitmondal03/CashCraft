"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import classNames from 'classnames'

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

  // Redirect to Login page if not logged in.
  useEffect(() => {
    if (!user) {
      push(login())
    }
  }, [])

  
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

      <Dialog>
        <DialogTrigger asChild>
          <Button>Add spending</Button>
        </DialogTrigger>
        <DialogContent>
          <NewSpendingForm />
        </DialogContent>
      </Dialog>
    </section>
  )
}
