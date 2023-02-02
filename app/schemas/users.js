const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/***
 * This is the user schema.
 * ** */
const User = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      index: true,
      sparse: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true
    },
    address:{
      country: {
        type: String,
        required: true
      },
      timeZone: {
        type: String,
        required: true
      },
    },
    status: {
      type: Number,
      default: 1, // 1- Active, 2- Inactive
    }
  },
  {
    timestamps: true
  });

module.exports = mongoose.model('user', User)
