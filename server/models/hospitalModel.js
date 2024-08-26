const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const hospitalSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneno: { type: String, required: true },
});

module.exports = mongoose.model('Hospital', hospitalSchema);
