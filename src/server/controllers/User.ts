import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import jwt from 'jsonwebtoken'

function generateToken(id: string, email: string, expiresIn: string) {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn })
}

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}

export async function signUp(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body
    
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(401).json({ message: 'User already registered' })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    await user.save()
    return res.status(201).json ({ message: 'Signed up successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}

export async function logIn(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'User not registered' })
    }
    
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Incorrect password' })
    }
    
    const token = generateToken(user._id.toString(), user.email, '7d')
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    res.clearCookie('jwt_token')
    res.cookie('jwt_token', token, {
      path: '/',
      // domain: 'localhost',
      expires,
      httpOnly: true,
      signed: true,
      sameSite: 'none',
      // secure: true,
    })
    
    return res.status(201).json ({ message: 'Logged in successfully' })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}
