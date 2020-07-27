const mongoose = require('mongoose')
import moment from '../../utils/moment'

const UserSchema = new mongoose.Schema({
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

export default mongoose.model('user', UserSchema)
