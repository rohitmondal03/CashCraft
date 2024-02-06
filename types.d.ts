import { type ReactNode } from "react"
import { z } from "zod";

import type { billSchema } from "~/schemas/bill-schema";
import type { spendingSchema } from "~/schemas/spending-schema";


type TLayout = {
  children: ReactNode
}

type TUser = {
  name: string;
  email: string;
}

type TBill= z.infer<typeof billSchema>;

type TSpending = z.infer<typeof spendingSchema>