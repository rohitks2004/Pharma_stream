const connect = require('./connection'); 
const createInventoryModel = require('../../models/DealerDB/inventoryModel');

exports.addMedicine = async (req, res) => {
  try {
    const { dealerName } = req.params;
    const connection = await connect(dealerName);
    const Inventory = createInventoryModel(connection);
    const { medicineId, name, batchNumber, arrivalDate, expiryDate, cost, quantity } = req.body;
    const newMedicine = new Inventory({ medicineId, name, batchNumber, arrivalDate, expiryDate, cost, quantity });
    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMedicines = async (req, res) => {
  try {
    const { dealerName } = req.params;
    const connection = await connect(dealerName);
    const Inventory = createInventoryModel(connection);
    const medicines = await Inventory.find();
    res.json(medicines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
