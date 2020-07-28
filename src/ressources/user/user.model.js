const mongoose = require('mongoose')
import moment from '../../utils/moment'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  state: {
    emailVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    firstConnection: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniqueCaseInsensitive: true,
    trim: true,
    unique: true,
    set: (v) => v.toLowerCase(),
  },
  emailToken: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  createAt: {
    type: Date,
    default: moment,
  },
  updateAt: {
    type: Date,
  },
})


userSchema.methods.toJSON = function() {
  let obj = this.toObject()

  delete obj.password

  return obj
}

userSchema.plugin(uniqueValidator)

export default mongoose.model('user', userSchema)
