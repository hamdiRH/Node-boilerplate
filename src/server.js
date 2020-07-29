// const express = require("express");
import express from 'express'
import connectDB from './utils/db'
import path from 'path'
import config from './config'
import cors from 'cors'
import helmet from 'helmet'

import authRouter from './ressources/auth/auth.router'
import userRouter from './ressources/user/user.router'
const morgan = require('morgan')

const app = express()

// Connect Database
connectDB()

/**
 * Init Middleware
 * **/

// parse json request body
app.use(express.json({ extended: false }))
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))
// set security HTTP headers
app.use(helmet())
// enabling CORS for all requests
app.use(cors())
app.options('*', cors())
// adding morgan to log HTTP requests
app.use(morgan('dev'))

// Define Routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.use(function (req, res, next) {
  return res
    .status(404)
    .sendFile(path.join(__dirname + '/utils/four0four.html'))
})

// Serve static assets in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

export const start = () => {
  const PORT = config.port || 4000
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}
