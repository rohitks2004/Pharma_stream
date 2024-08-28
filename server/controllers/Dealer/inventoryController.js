const Inventory = require('../../models/DealerDB/inventoryModel');

exports.addMedicine = async (req, res) => {
  try {
    const { medicineId, name, batchNumber, arrivalDate, expiryDate, cost, quantity } = req.body;
    const newMedicine = new Inventory({ medicineId, name, batchNumber, arrivalDate, expiryDate, cost, quantity });
    await newMedicine.save();
    res.status(201).json(newMedicine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMedicines = async (req, res) => {
  try {
    const medicines = await Inventory.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
