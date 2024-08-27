const Billing = require('../../models/HospitalDB/billingModel');

exports.createBillingRecord = async (req, res) => {
    try {
        const newBillingRecord = new Billing(req.body);
        const savedBillingRecord = await newBillingRecord.save();
        res.status(201).json(savedBillingRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getBillingRecords = async (req, res) => {
    try {
        const billingRecords = await Billing.find().populate('medicineId');
        res.status(200).json(billingRecords);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateBillingRecord = async (req, res) => {
    try {
        const updatedBillingRecord = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBillingRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteBillingRecord = async (req, res) => {
    try {
        await Billing.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Billing record deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
