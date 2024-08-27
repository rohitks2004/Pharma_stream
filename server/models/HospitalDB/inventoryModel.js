const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    medicineId: { type: String, required: true },
    name: { type: String, required: true },
    arrivalDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    dealerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dealer' },
    cost: { type: Number, required: true },
    quantity: { type: Number, required: true },
    criticalValue: { type: Number, required: true }
});

module.exports = mongoose.model('Inventory', inventorySchema);
