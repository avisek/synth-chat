import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyErrors } from 'jsonwebtoken'
import { COOKIE_NAME } from './constants'
import { env } from '../env'

export function createToken(id: string, email: string, expiresIn: string) {
  const payload = { id, email }
  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn,
  })
  return token
}

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.signedCookies[`${COOKIE_NAME}`]
  if (!token || token.trim() === '') {
    return res.status(401).json({ message: 'Token Not Received' })
  }
  return new Promise<void>((resolve, reject) => {
    // @ts-ignore
    return jwt.verify(token, env.JWT_SECRET, (error: VerifyErrors, success) => {
      if (error) {
        reject(error.message)
        return res.status(401).json({ message: 'Token Expired' })
      } else {
        resolve()
        res.locals.jwtData = success
        return next()
      }
    })
  })
}
