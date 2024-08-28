const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
  hospitalId: { type: String },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = (connection) => connection.model('dealerhosp', hospitalSchema);
