import { z } from "zod"


export const billSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Title cannot be empty.",
    }),
  amount: z
    .string()
    .min(0, {
      message: "Amount must be a positive number.",
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