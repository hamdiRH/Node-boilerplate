import bcrypt from 'bcryptjs'
import gravatar from 'gravatar'
import jwt from 'jsonwebtoken'
import config from '../../config'
import { sendEmail } from '../email/sendEmail'
import { ResponseCodes } from '../../utils/responseCodes'

import User from '../user/user.model'

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    })
    let user = new User({
      name,
      email,
      avatar,
      password,
    })
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)
    const emailToken = String(Math.floor(100000 + Math.random() * 900000))
    user.emailToken = await bcrypt.hash(emailToken, salt)
    user = await user.save()

    sendEmail('verifyEmail', user, { emailToken })
    return res.status(200).json({
      success: true,
      responseCode: ResponseCodes.email_sent,
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({
      success: false,
      responseCode: ResponseCodes.server_error,
    })
  }
}

export const ConfirmEmail = async (req, res, next) => {
    try {
      const user = await User.findById(req.user).select("-password");
      user.state.emailVerified = true;
      await user.save();
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        success: false,
        responseCode: ResponseCodes.server_error,
      });
    }
  };


  
export const resendVerificationCode = async (req, res, next) => {
  try {

    const {email} = req.body
    let user = await User.findOne({ email });
    const salt = await bcrypt.genSalt(10)
    const emailToken = String(Math.floor(100000 + Math.random() * 900000))
    user.emailToken = await bcrypt.hash(emailToken, salt)
    user = await user.save()
    sendEmail('verifyEmail', user, { emailToken })
    return res.status(200).json({
      success: true,
      responseCode: ResponseCodes.email_sent,
    })
  } catch (error) {
    console.error(error.message)
    res.status(500).json({
      success: false,
      responseCode: ResponseCodes.server_error,
    })
  }
}
  

