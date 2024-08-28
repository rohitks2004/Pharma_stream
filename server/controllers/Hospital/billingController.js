const connectHospitalDb = require('../../config/hospitaldb');
const createBillingModel = require('../../models/HospitalDB/billingModel');

exports.createBillingRecord = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connectHospitalDb(hospitalName);
        const Billing = createBillingModel(connection);
        const newBillingRecord = new Billing(req.body);
        const savedBillingRecord = await newBillingRecord.save();
        res.status(201).json(savedBillingRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBillingRecords = async (req, res) => {
    try {
        const { hospitalName } = req.params; 
        const connection = await connectHospitalDb(hospitalName);
        const Billing = createBillingModel(connection);

        const billingRecords = await Billing.find();
        res.status(200).json(billingRecords);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBillingRecord = async (req, res) => {
    try {
        const { hospitalName } = req.params; 
        const connection = await connectHospitalDb(hospitalName);
        const Billing = createBillingModel(connection);

        const updatedBillingRecord = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBillingRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBillingRecord = async (req, res) => {
    try {
        const { hospitalName } = req.params; 
        const connection = await connectHospitalDb(hospitalName);
        const Billing = createBillingModel(connection);

        await Billing.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Billing record deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
