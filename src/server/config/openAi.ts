import { Configuration } from 'openai'
import { env } from '../env'

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: env.OPENAI_API_KEY,
    organization: env.OPENAI_ORGANIZATION_ID,
  })
  return config
}
