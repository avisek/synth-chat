import { Router } from 'express'
import {
  getAllUsers,
  userLogin,
  userLogout,
  userSignup,
  verifyUser,
} from '../controllers/User'
import {
  userLoginValidator,
  userSignupValidator,
  validate,
} from '../middlewares/validators'
import { verifyToken } from '../utils/tokenManager'

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/signup', validate(userSignupValidator), userSignup)
userRouter.post('/login', validate(userLoginValidator), userLogin)
userRouter.get('/auth-status', verifyUser)
userRouter.get('/logout', verifyToken, userLogout)

export default userRouter
