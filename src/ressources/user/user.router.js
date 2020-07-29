import express from 'express'
import { checkSchema } from 'express-validator'
import {getUser} from './user.controller'
import { auth } from '../../utils/auth'

const router = express.Router()

router.get("/get-user", auth, getUser);


export default router