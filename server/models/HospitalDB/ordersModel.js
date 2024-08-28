const mongoose = require('mongoose');

const createOrderModel = (connection) => {
    const ordersSchema = new mongoose.Schema({
        medicines: [{
            medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
            quantity: { type: Number, required: true }
        }],
        dealerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dealer', required: true },
        orderDate: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ['requested', 'acknowledged', 'out to delivery', 'confirmed', 'returned'],
            default: 'requested'
        },
        subtotal: { type: Number, required: function() { return this.status === 'acknowledged'; } }
    });

    return connection.model('Order', ordersSchema);
};

module.exports = createOrderModel;
