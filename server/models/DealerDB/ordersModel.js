const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  hospitalId: { type: String, required: true },
  medicines: [
    {
      medicineId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  orderDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['requested', 'acknowledged', 'out to delivery', 'confirmed', 'returned'],
    default: 'requested',
  },
  price: { type: Number, required: true },
});

module.exports = (connection) => connection.model('dealerorder', orderSchema);
