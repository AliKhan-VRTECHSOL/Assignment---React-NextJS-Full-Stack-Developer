import { z } from "zod"

export const LoginFormValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})

export const CreateMovieFormValidation = z.object({
  title: z
    .string()
    .min(8, { message: "Movie title must be at least 8 characters long" }),
  year: z.string().min(4, { message: "Movie year must be a valid year" }),
})
