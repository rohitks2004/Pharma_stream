const mongoose = require('mongoose');

const createCartModel = (connection) => {
    const cartSchema = new mongoose.Schema({
        medicines: [{
            medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
            quantity: { type: Number, required: true }
        }],
        dealerPreferences: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dealer' }]
    });

    return connection.model('Cart', cartSchema);
};

module.exports = createCartModel;
