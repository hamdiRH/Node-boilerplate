import express from 'express'
import { checkSchema } from 'express-validator'
import { authValidation } from './auth.validation'
import {
  signIn,
  signUp,
  ConfirmEmail,
  resendVerificationCode,
  resetPassword,
  ConfirmResetPassword,
  updatePassword,
} from './auth.controller'
import { verifyToken } from './auth.validation'
import { resolvePromises, returnIfNotValid } from '../../utils/validation'
import { auth } from '../../utils/auth'

const router = express.Router()

router.post(
  '/login',
  checkSchema(authValidation.signInSchema),
  returnIfNotValid,
  resolvePromises,
  signIn
)

router.post(
  '/register',
  checkSchema(authValidation.signUpSchema),
  returnIfNotValid,
  resolvePromises,
  signUp
)

router.post(
  '/resend-verification-code',
  checkSchema(authValidation.resendVerificationCode),
  returnIfNotValid,
  resolvePromises,
  resendVerificationCode
)

router.post(
  '/confirm-mail',
  checkSchema(authValidation.confirmEmail),
  returnIfNotValid,
  resolvePromises,
  ConfirmEmail
)

router.post(
  '/resetPassword',
  checkSchema(authValidation.resetPassword),
  returnIfNotValid,
  resolvePromises,
  resetPassword
)

router.post(
  '/ConfirmResetPassword/:id',
  verifyToken,
  checkSchema(authValidation.ConfirmResetPassword),
  returnIfNotValid,
  resolvePromises,
  ConfirmResetPassword
)

router.post(
  '/updatePassword',
  auth,
  checkSchema(authValidation.updatePassword),
  returnIfNotValid,
  resolvePromises,
  updatePassword
)

export default router
