import { type ReactNode } from "react"
import { z } from "zod";

import { newBillSchema } from "~/schemas/new-bill-schema";


type TLayout = {
  children: ReactNode
}

type TUser = {
  name: string;
  email: string;
}

type TBill = {
  title: string;
  amount: number;
  recurrance: z.infer<typeof newBillSchema>["recurrance"]
}