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
} from '../middlewares/dataValidators'
import { verifyToken } from '../utils/tokenManager'

const router = Router()

router.get('/', getAllUsers)
router.post('/signup', validate(userSignupValidator), userSignup)
router.post('/login', validate(userLoginValidator), userLogin)
router.get('/auth-status', verifyToken, verifyUser)
router.get('/logout', verifyToken, userLogout)

export default router
