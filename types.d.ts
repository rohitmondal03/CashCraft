import { type ReactNode } from "react"

type TLayout = {
  children: ReactNode
}

type TUser = Models.Session | Models.User<Models.Preferences> | null;