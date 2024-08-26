const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  dealerId: { type: String, required: true, unique: true },
  enterpriseName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneno: { type: String, required: true },
});

module.exports = mongoose.model('Dealer', dealerSchema);
