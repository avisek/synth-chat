import mongoose from "mongoose"
import { env } from "../env"
import colors from 'picocolors'

export const connect = async () => {
  console.log(colors.cyan('Connecting to MongoDB...'))
  try {
    await mongoose.connect(env.MONGODB_URL)
    console.log(colors.green('Connected to MongoDB.'))
  } catch (error) {
    console.error(colors.red('Unable to connect to MongoDB.'))
    console.error(error)
  }
}
