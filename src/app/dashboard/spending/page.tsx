import classNames from 'classnames'

import NewSpendingForm from './_components/new-spending-form'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '~/components/ui/dialog'


export default function SpendingPage() {
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
