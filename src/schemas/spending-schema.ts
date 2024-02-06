import { z } from "zod";

export const spendingSchema= z.object({
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
  tags: z
    .array(z.string())
})