import express from 'express'
import cookieParser from 'cookie-parser'
import userRoutes from './User'

const api = express.Router()

api.use(express.json())
api.use(cookieParser(process.env.COOKIE_SECRET))

api.get('/hi', (_, res) => res.json('hello'))

api.use('/user', userRoutes)

export default api
