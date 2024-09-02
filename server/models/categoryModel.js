const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  datum: { type: String, required: true },
  M01AB: { type: Number, default: 0 },
  M01AE: { type: Number, default: 0 },
  N02BA: { type: Number, default: 0 },
  N02BE: { type: Number, default: 0 },
  N05B: { type: Number, default: 0 },
  N05C: { type: Number, default: 0 },
  R03: { type: Number, default: 0 },
  R06: { type: Number, default: 0 },
  Year: { type: Number },
  Month: { type: Number },
  Hour: { type: Number },
  Weekday: { type: String },
});

module.exports = mongoose.model('Category', dataSchema);
