import express from 'express'
import cookieParser from 'cookie-parser'
import userRoutes from './User'
import chatRoutes from './Chat'
import { env } from '../env'

const api = express.Router()

api.use(express.json())
api.use(cookieParser(env.COOKIE_SECRET))

api.get('/hi', (_, res) => res.json('hello'))

api.use('/user', userRoutes)
api.use('/chat', chatRoutes)

export default api
