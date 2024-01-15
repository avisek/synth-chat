import { NextFunction, Request, Response } from "express"
import { body, validationResult } from "express-validator"

export function validate(validations: any[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req)
      if (result.errors.length > 0) {
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
  body("name").notEmpty().withMessage('Name is empty'),
  body("email").notEmpty().isEmail().withMessage('Email is invalid'),
  body("password").isLength({ min: 6, max: 24 }).withMessage('Length of password must be between 6-24 characters'),
]

export const userSignupValidator = [
  body("name").notEmpty().withMessage('Name is empty'),
  ...userLoginValidator,
]
