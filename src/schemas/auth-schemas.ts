import { z } from "zod"


export const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email !!"
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be atleast 8 characters long !!",
    }),
})


export const signupSchema = z.object({
  email: z
    .string()
    .email({
      message: "Enter a valid email !!"
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be atleast 8 characters long !!",
    }),
  name: z
    .string()
    .min(2, {
      message: 'Name should have more than one character'
    })
})