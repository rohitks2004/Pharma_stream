const Inventory = require('../models/inventoryHModel');

exports.addInventory = async (req, res) => {
    try {
        const newInventory = new Inventory(req.body);
        const savedInventory = await newInventory.save();
        res.status(201).json(savedInventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getInventories = async (req, res) => {
    try {
        const inventories = await Inventory.find().populate('dealerId');
        res.status(200).json(inventories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getInventoryById = async (req, res) => {
    try {
        const inventory = await Inventory.findById(req.params.id).populate('dealerId');
        if (!inventory) return res.status(404).json({ message: "Inventory not found" });
        res.status(200).json(inventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateInventory = async (req, res) => {
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedInventory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteInventory = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Inventory deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
