import express from 'express'
import authController from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.use('/register', authController.register)

authRouter.use('/sign-in', authController.signIn)

 export default authRouter