import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
import config from '../../config'
// https://myaccount.google.com/lesssecureapps?pli=1
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wassalni.carpool@gmail.com',
    pass: 'Gomycode123',
  },
})

export const sendEmail = (type, user, opt) => {
  let html = ``
  if (type === 'confirmEmail')
    html = `<h1>Hey ${user.name}</h1>
  <p> Please confirm your email address by following the link below.\n
   http://localhost:5000/api/auth/confirmEmail/${jwt.sign(
     { id: user._id },
     config.secrets.jwt,
     { expiresIn: config.secrets.jwtExp }
   )}</p>`
  if (type === 'resetPassword')
    html = `<h1>Hey ${user.name}</h1>
    <p> You recently requested to reset your password. Click on the following link below to reset it.\n
     http://localhost:5000/api/auth/ConfirmResetPassword/${jwt.sign(
       { id: user._id },
       config.secrets.jwt,
       { expiresIn: config.secrets.jwtExp }
     )}</p>`
  if (type === 'verifyEmail')
    html = `<h1>Confirm your email address</h1>
     <p>
     There’s one quick step you need to complete before creating your account.
     Let’s make sure this is the right email address for you — please confirm this is the right address to use for your new account.</p>
     <p>Please enter this verification code to get started on</p>
     <h1>${opt.emailToken}</h1>
     <p>Verification codes expire after two hours.</p>
     Thanks
     </p>
     `
     const mailOptions = {
     from: 'Wassalni@gmail.com',
     to: user.email,
     subject: 'Verify your Email',
     html,
  }
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}
