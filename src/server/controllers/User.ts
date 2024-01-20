import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import User from '../models/User'
import { COOKIE_NAME } from '../utils/constants'
import { createToken } from '../utils/tokenManager'

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}

export async function userSignup(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body
    
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(401).json({ message: 'User already registered' })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashedPassword })
    await user.save()
    
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      // domain: 'localhost',
      signed: true,
      path: '/',
      sameSite: 'none',
      secure: true,
    })
    
    const token = createToken(user._id.toString(), user.email, '7d')
    const expires = new Date()
    expires.setDate(expires.getDate() + 7)
    res.cookie(COOKIE_NAME, token, {
      path: '/',
      // domain: 'localhost',
      expires,
      httpOnly: true,
      signed: true,
      sameSite: 'none',
      secure: true,
    })
    
    return res.status(201).json({
      message: 'Signed up successfully',
      name: name,
      email: email,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}

export async function userLogin(req: Request, res: Response) {
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
    
    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      // domain: 'localhost',
      signed: true,
      path: '/',
      sameSite: 'none',
      secure: true,
    })
    
    const token = createToken(user._id.toString(), user.email, '7d')
    const expires = new Date()
    expires.setDate(expires.getDate() + 7)
    res.cookie(COOKIE_NAME, token, {
      path: '/',
      // domain: 'localhost',
      expires,
      httpOnly: true,
      signed: true,
      sameSite: 'none',
      secure: true,
    })
    
    return res.status(200).json({
      message: 'Logged in successfully',
      name: user.name,
      email: email,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}

export async function verifyUser(req: Request, res: Response) {
  try {
    const user = await User.findById(res.locals.jwtData.id)
    if (!user) {
      return res.status(401).send('User not registered OR Token malfunctioned')
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send('Permissions didn\'t match')
    }
    return res
      .status(200)
      .json({ message: 'OK', name: user.name, email: user.email })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}

export async function userLogout(req: Request, res: Response) {
  try {
    const user = await User.findById(res.locals.jwtData.id)
    if (!user) {
      return res.status(401).send('User not registered or token malfunctioned')
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send('Permissions didn\'t match')
    }

    res.clearCookie(COOKIE_NAME, {
      httpOnly: true,
      // domain: 'localhost',
      signed: true,
      path: '/',
      sameSite: 'none',
      secure: true,
    })

    return res
      .status(200)
      .json({ message: 'OK', name: user.name, email: user.email })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: error?.toString() })
  }
}
