const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    medicineId: { type: String, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    arrivalDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, required: true },
    cost: { type: Number, required: true },
    quantity: { type: Number, required: true },
    
});

const Inventory = mongoose.model('InventoryH', inventorySchema);
module.exports = Inventory;
