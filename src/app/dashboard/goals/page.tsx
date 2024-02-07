"use client"

import { useRouter } from 'next/navigation';
import { useEffect } from 'react'
import classNames from 'classnames'

import { routes } from '~/lib/config/route-config';
import { useAuth } from '~/hooks/use-auth'


export default function GoalsPage() {
  const { push } = useRouter();
  const { user } = useAuth();
  const { login } = routes;


  useEffect(() => {
    if (!user) {
      push(login());
    }
  }, [user])


  return (
    <section className='mx-auto'>
      <div className={classNames({
        "space-y-6": true,
      })}>
        <h1 className="page_heading">
          Welcome to Your CashCraft Dashboard,
          {/* <br />
          <span className="underline text-rose-500">{user?.name}</span> */}
        </h1>
      </div>
    </section>
  )
}
