const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/***
 * This is the COUNTRY schema.
 * ** */
const Country = new Schema(
  {
    id: {
      type: String,
      unique: true,
      index: true,
      sparse: true,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      unique: true,
      index: true,
      sparse: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    iso2: {
      type: String,
      required: true,
    },
    iso3: {
      type: String,
      required: true,
    },
    phone_code: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    currency_symbol: {
      type: String,
      required: true,
    },
    tld: {
      type: String,
      required: true,
    },
    native: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
    subregion: {
      type: String,
      required: true,
    },
    timezones: [
      {
        zoneName: { type: String },
        gmtOffset: { type: Number },
        gmtOffsetName: { type: String },
        abbreviation: { type: String },
        tzName: { type: String },
      },
    ],
    translations: {
      br: { type: String },
      pt: { type: String },
      nl: { type: String },
      hr: { type: String },
      fa: { type: String },
      de: { type: String },
      es: { type: String },
      fr: { type: String },
      ja: { type: String },
      it: { type: String },
    },
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    emoji: {
      type: String,
      required: true,
    },
    emojiU: {
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

module.exports = mongoose.model("countries", Country);
