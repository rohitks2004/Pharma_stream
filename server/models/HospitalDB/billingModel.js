const mongoose = require('mongoose');

function createBillingModel(connection) {
  const billingSchema = new mongoose.Schema({
    medicineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Inventory', required: true },
    quantity: { type: Number, required: true },
    totalCost: { type: Number, required: true },
    billingDate: { type: Date, default: Date.now }
  });

  // Use the connection to create a model bound to that connection
  return connection.model('Billing', billingSchema);
}
module.exports=createBillingModel;