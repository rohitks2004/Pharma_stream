// models/data.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  datum: { type: Date, required: true },
  M01AB: Number,
  M01AE: Number,
  N02BA: Number,
  N02BE: Number,
  N05B: Number,
  N05C: Number,
  R03: Number,
  R06: Number,
  Year: Number,
  Month: Number,
  Hour: Number,
  WeekdayName: String,
});

const Data = mongoose.model('Category', dataSchema);

module.exports = Data;

