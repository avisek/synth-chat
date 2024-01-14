import { Router } from "express"
import { getAllUsers, logIn, signUp } from "../controllers/User"
import validate, { userLoginValidator, userSignupValidator } from "../middlewares/dataValidators"

const router = Router()

router.get('/', getAllUsers)

router.post('/signup', validate(userSignupValidator), signUp)

router.post('/login', validate(userLoginValidator), logIn)

export default router
