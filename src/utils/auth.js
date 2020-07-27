import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../ressources/user/user.model'
import { ResponseCodes } from './responseCodes'
export function auth(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token')

  // Check if not token
  if (!token) {
    return res.status(401).json({
      success: false,
      responseCode: ResponseCodes.unauthorized,
    })
  }

  // Verify token
  try {
    jwt.verify(token, config.secrets.jwt, async (error, decoded) => {
      if (error) {
        res.status(401).json({
          success: false,
          responseCode: ResponseCodes.invalid_jwt_token,
        })
      } else {
        const user = await User.findById(decoded.user.id)
        if (!user)
          res.status(401).json({
            success: false,
            responseCode: ResponseCodes.invalid_jwt_token,
          })
        req.user = decoded.user
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
