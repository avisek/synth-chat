import { Router } from 'express'
import { verifyToken } from '../utils/tokenManager'
import { chatCompletionValidator, validate } from '../middlewares/validators'
import {
  deleteChats,
  generateChatCompletion,
  sendChatsToUser,
} from '../controllers/Chat'

const chatRoutes = Router()
chatRoutes.post(
  '/new',
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
)
chatRoutes.get('/all-chats', verifyToken, sendChatsToUser)
chatRoutes.delete('/delete', verifyToken, deleteChats)

export default chatRoutes
