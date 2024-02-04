"use client"

import { useAuth } from '~/hooks/use-auth'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogContent
} from '../ui/dialog';


export function LogOutButton() {
  const { logout } = useAuth();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"}>Log Out</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to log out?</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={logout}>Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
