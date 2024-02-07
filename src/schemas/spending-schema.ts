import { z } from "zod";

export const spendingSchema = z.object({
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
  category: z
    .enum(["SHOPPING", "FOOD", "CAB", "FUEL", "HOUSE_RENT", "ELECTRICITY", "BILLS", "PERSONAL_CARE", "ENTERTAINMENT", "HEALTHCARE", "TRAVEL", "EDUCATION", "DEBTS_LOANS", "SAVINGS", "INVESTMENT", "GIFT", "DONATION", "PETS", "OTHER"])
})