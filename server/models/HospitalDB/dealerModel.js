const mongoose = require('mongoose');

const createDealerModel = (connection) => {
    const dealersSchema = new mongoose.Schema({
        dealerId:{type: String, required: true},
        name: { type: String, required: true },
        address: { type: String, required: true },
        email: { type: String, required: true },
        phoneNo: { type: String, required: true }
    });

    return connection.model('hospDealer', dealersSchema);
};

module.exports = createDealerModel;
