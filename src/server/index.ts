import { env } from './env'
import express from 'express'
import { join } from 'node:path/posix'

const BASE_URL = '/' ?? import.meta.env.BASE_URL
const PORT = env.PORT ?? 8000

export const app = express()

const api = express.Router()
app.use(join(BASE_URL, '/api'), api)

api.get('/hi', (_, res) => res.send('hello'))


const runningInVite = process.env['VITE'] === 'true'
if (!runningInVite) {
  const clientDir = process.cwd() + '/dist/client'
  app.use(express.static(clientDir))
  app.get('/*', (_, res) => {
    res.sendFile(clientDir + '/index.html')
  })
  app.listen(PORT, () =>
    console.log(`Server started at http://localhost:${PORT}/`)
  )
}
