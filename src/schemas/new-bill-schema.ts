import { z } from "zod"


export const newBillSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title should not be empty.",
    }),
  amount: z
    .number()
    .min(0, {
      message: "Amount must be a positive number or zero.",
    }),
  recurrance: z.enum([
    "ONE-TIME",
    "WEEKLY",
    "MONTHLY",
    "BI-MONTHLY",
    "TRI-MONTHLY",
    "YEARLY",
  ])
})