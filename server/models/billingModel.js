const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
    quantity: { type: Number, required: true },
    totalCost: { type: Number, required: true },
    billingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Billing', billingSchema);
