import jwt from 'jsonwebtoken'
import config from '../../config'
import { schema } from '../../utils/validation'
import { ResponseCodes } from '../../utils/responseCodes'
export const authValidation = {
  signInSchema: {
    email: { ...schema.required, ...schema.email, ...schema.emailNotExist },
    password: { ...schema.required, ...schema.password },
  },
  signUpSchema: {
    email: { ...schema.required, ...schema.email, ...schema.emailExist },
    password: { ...schema.required, ...schema.password },
    name: { ...schema.required },
  },
  resendVerificationCode:{
    email: { ...schema.required, ...schema.email, ...schema.emailNotExist },
  },
  resetPassword: {
    email: { ...schema.required, ...schema.email, ...schema.emailNotExist, ...schema.isNotVerified },
  },
  ConfirmResetPassword: {
    password: { ...schema.required, ...schema.password },
  },
  updatePassword: {
    oldPassword: { ...schema.required, ...schema.password },
    newPassword: { ...schema.required, ...schema.password },
  },
}

export function verifyToken(req, res, next) {
  // Get token from header
  const token = req.params.id

  // Check if not token
  if (!token) {
    return res
      .status(401)
      .json({ success: false, responseCode: ResponseCodes.invalid_jwt_token })
  }

  // Verify token
  try {
    jwt.verify(token, config.secrets.jwt, (error, decoded) => {
      if (error) {
        res.status(401).json({
          success: false,
          responseCode: ResponseCodes.invalid_jwt_token,
        })
      } else {
        req.user = decoded.id
        next()
      }
    })
  } catch (err) {
    console.error('something wrong with auth middleware')
    res
      .status(500)
      .json({ success: false, responseCode: ResponseCodes.server_error })
  }
}
