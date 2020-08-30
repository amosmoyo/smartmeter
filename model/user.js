const mongoose = require('mongoose');

const validator = require('mongoose-unique-validator');
const timestamp = require('../middleware/timestamp');

const { Schema } = mongoose;

const userSchema = new Schema ({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
})

userSchema.plugin(validator);
userSchema.plugin(timestamp);

module.exports = mongoose.model('smartusers', userSchema);