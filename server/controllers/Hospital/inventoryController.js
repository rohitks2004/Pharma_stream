const Inventory = require('../../models/HospitalDB/inventaryModel');

exports.addMedicine = async (req, res) => {
    try {
        const newMedicine = new Inventory(req.body);
        const savedMedicine = await newMedicine.save();
        res.status(201).json(savedMedicine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMedicines = async (req, res) => {
    try {
        const medicines = await Inventory.find();
        res.status(200).json(medicines);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMedicine = async (req, res) => {
    try {
        const updatedMedicine = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedMedicine);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMedicine = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Medicine deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
