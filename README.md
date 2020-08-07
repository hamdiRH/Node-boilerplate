# boilerplate-node [![NPM version](https://badge.fury.io/js/boilerplate-node.svg)](https://npmjs.org/package/boilerplate-node)

> A Boilerplate for Node.js web applications
> **Live Demo**: https://boilerplate-node-express.herokuapp.com/api

## Features

- **Authentication** using Email and Password
- **VERIFICATION EMAIL** using nodemailer
- **OAuth 2.0 Authentication** via Facebook, Google, GitHub
- **Push notifications**
- **Account Management**
- Gravatar
- Profile Details
- Change Password
- Forgot Password
- Reset Password
- Delete Account

## Prerequisites

- [MongoDB](https://www.mongodb.com/download-center/community)
- [Node.js](http://nodejs.org)

## Getting Started

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Add environment variable
touch .env

# Paste the following code in .env
NODE_ENV=development
PORT=5000
DATABASE_URL_DEV=
DATABASE_URL_PROD=
DATABASE_URL_TEST=
JWT_SECRET=
JWT_EXP=
BASE_URL=http://localhost:5000/
MAIL_SENDER=
MAIL_SEND_DEV_ENV=true
MAIL_URL=
MAIL_PORT=
MAIL_USER=
MAIL_PASSWORD=

# Then simply start your app
npm run dev
```

## License

ISC © [HamdiRH]()
