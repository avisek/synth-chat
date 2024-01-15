import { env } from './env'
import express from 'express'
import { join } from 'node:path/posix'
import colors from 'picocolors'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const BASE_URL = import.meta.env.BASE_URL
const PORT = env.PORT ?? 8000

import { connect } from './connections/mongoDb'
connect()

export const app = express()

app.use(cors())

const api = express.Router()
app.use(join(BASE_URL, '/api'), api)

api.use(express.json())

api.use(cookieParser(process.env.COOKIE_SECRET))

api.get('/hi', (_, res) => res.json('hello'))


import userRouter from './routes/User'
api.use('/user', userRouter)


const runningInVite = process.env['VITE'] === 'true'
if (!runningInVite) {
  const clientDir = process.cwd() + '/dist/client'
  app.use(express.static(clientDir))
  app.get('/*', (_, res) => {
    res.sendFile(clientDir + '/index.html')
  })
  app.listen(PORT, () =>
    console.log(colors.cyan(`Server started at http://localhost:${PORT}/`))
  )
}
