const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    medicines: [{
        medicineId: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    dealerPreferences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dealer' }]
});

module.exports = mongoose.model('Cart', cartSchema);
