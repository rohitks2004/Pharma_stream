const Hospital = require('../models/hospitalModel');
const mongoose = require('mongoose');

async function createHospitalDatabase(hospitalId) {
  try {
    const hospitalDBName = `hospital_${hospitalId}`;
    const hospitalDB = await mongoose.createConnection(`mongodb+srv://pharma:stream@project-sre.jnie5.mongodb.net/${hospitalDBName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    hospitalDB.on('connected', () => {
      console.log(`Connected to ${hospitalDBName} database`);
    });

    hospitalDB.on('error', (err) => {
      console.error(`Error connecting to ${hospitalDBName} database:`, err);
    });

    return hospitalDB;
  } catch (err) {
    console.error('Error creating hospital database:', err);
    throw err;
  }
}

exports.createHospital = async (req, res) => {
  try {
    const { name, address, email, password, phoneno } = req.body;

    // Save the hospital to superDB
    const newHospital = new Hospital({ name, address, email, password, phoneno });
    await newHospital.save();
 
    // Create the new hospital database
    const hospitalDB = await createHospitalDatabase(newHospital.name);

    // Define collections in the new hospital database
    const Inventory = hospitalDB.model('Inventory', new mongoose.Schema({
      drugName: String,
      quantity: Number,
      expiryDate: Date,
    }));

    const Orders = hospitalDB.model('Orders', new mongoose.Schema({
      orderId: String,
      drugName: String,
      quantity: Number,
      orderDate: Date,
      status: String,
    }));

    res.status(201).json(newHospital);
  } catch (err) {
    console.error('Error in createHospital:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getHospital = async (req, res) => {
  try {
    console.log('Fetching hospital details...');
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      console.log('Hospital not found.');
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.json(hospital);
  } catch (err) {
    console.error('Error in getHospital:', err);
    res.status(500).json({ error: err.message });
  }
};
