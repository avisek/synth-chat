import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

export function validate(validations: any[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req)
      if (!result.isEmpty()) {
        break
      }
    }
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    return res.status (422).json({ errors: errors. array() })
  }
}

export const userLoginValidator = [
  body('email').trim().isEmail().withMessage('Email is required'),
  body('password')
    .trim()
    .isLength({ min: 6 })
    .withMessage('Password should contain atleast 6 characters'),
]

export const userSignupValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  ...userLoginValidator,
]

export const chatCompletionValidator = [
  body('message').notEmpty().withMessage('Message  is required'),
]
