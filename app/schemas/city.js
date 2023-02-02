const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/***
 * This is the COUNTRY schema.
 * ** */
const City = new Schema(
  {
    id: {
      type: Number,
      unique: true,
      index: true,
      sparse: true,
      required: true,
    },
    name: {
      type: String,
      // unique: true,
      index: true,
      sparse: true,
      required: true,
    },
    country_id: {
      type: Number,
      required: true,
    },
    country_code: {
      type: String,
      required: true,
    },
    state_id: {
      type: Number,
      required: true,
    },
    state_code: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 1, // 1- Active, 2- Inactive
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cities", City);
