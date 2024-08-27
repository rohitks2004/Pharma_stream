const mongoose = require('mongoose');

const dealersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phoneNo: { type: String, required: true }
});

module.exports = mongoose.model('hospDealer', dealersSchema);
