import { merge } from 'lodash'
import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV || 'development'

console.log('env', env)

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.PORT,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: process.env.JWT_EXP,
  },
  mail: {
    from: process.env.MAIL_USER,
    password: process.env.MAIL_PASSWORD,
  },
}

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = { dbUrl: process.env.DATABASE_URL_DEV }
    break
  case 'production':
    envConfig = { dbUrl: process.env.DATABASE_URL_PROD }
    break
  case 'test':
  case 'testing':
    envConfig = { dbUrl: process.env.DATABASE_URL_TEST }
    break
  default:
    envConfig = { dbUrl: process.env.DATABASE_URL_DEV }
}

export default merge(baseConfig, envConfig)
