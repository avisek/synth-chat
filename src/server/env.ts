/**
 * Load and validate environment variables
 */

import { z } from 'zod'
import { loadEnv } from 'vite'

const envSchema = z.object({
  PORT: z.string().min(1),
  PUBLIC_BACKEND_URL: z.string().min(1),
  SESSION_SECRET: z.string().min(1),
  MONGO_URL: z.string().url(),
})

export const env = envSchema.parse({
  ...process.env,
  ...loadEnv(import.meta.env.mode, process.cwd(), ''),
})

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

// type schema = typeof envSchema['shape']

// type PublicEnvKeys<T> = {
//   [K in keyof T]: K extends `PUBLIC_${string}` ? K : never
// }[keyof T]

// type PublicEnv = Pick<z.infer<typeof envSchema>, PublicEnvKeys<z.infer<typeof envSchema>>>
