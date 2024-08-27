const Dealer = require('../../models/HospitalDB/dealerModel');

exports.createDealer = async (req, res) => {
    try {
        const newDealer = new Dealer(req.body);
        const savedDealer = await newDealer.save();
        res.status(201).json(savedDealer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDealers = async (req, res) => {
    try {
        const dealers = await Dealer.find();
        res.status(200).json(dealers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateDealer = async (req, res) => {
    try {
        const updatedDealer = await Dealer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedDealer);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteDealer = async (req, res) => {
    try {
        await Dealer.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Dealer deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};