import { z } from "zod";

export const loginScema = z.object({
  username: z.string().min(3, 'Username is required').max(255),
  password: z.string().min(3, 'Password is required').max(255),
})
