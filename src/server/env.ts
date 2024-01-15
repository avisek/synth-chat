/**
 * Load and validate environment variables
 */

import { z } from 'zod'
import { loadEnv } from 'vite'

const envSchema = z.object({
  // .env
  PORT: z.string().min(1),
  OFFICIAL_BACKEND_URL: z.string().min(1),
  
  // .env.local
  MONGODB_URL: z.string().url(),
  OPENAI_API_KEY: z.string().min(1),
  OPENAI_ORGANIZATION_ID: z.string().min(1),
  JWT_SECRET: z.string().min(1),
  COOKIE_SECRET: z.string().min(1),
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
