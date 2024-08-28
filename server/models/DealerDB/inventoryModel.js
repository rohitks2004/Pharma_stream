const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  medicineId: { type: String, required: true },
  name: { type: String, required: true },
  batchNumber: { type: String, required: true },
  arrivalDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  cost: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = (connection) => connection.model('dealerinventory', inventorySchema);
