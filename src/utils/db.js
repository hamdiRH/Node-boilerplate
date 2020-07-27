const mongoose = require('mongoose')
import options from '../config'

export default async () => {
  try {
    await mongoose.connect(options.dbUrl, {
      useUnifiedTopology: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log('mongoDB Connected...')
  } catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1)
  }
}
