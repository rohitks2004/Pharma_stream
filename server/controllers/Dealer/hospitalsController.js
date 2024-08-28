const connect = require('./connection'); 
const createHospitalModel = require('../../models/DealerDB/hospitalsModel');

exports.createHospital = async (req, res) => {
  try {
    const { dealerName } = req.params;
    
    const connection = await connect(dealerName);
    const Hospital = createHospitalModel(connection);
    const { hospitalId, name, address, phoneNo, email } = req.body;
    const newHospital = new Hospital({ hospitalId, name, address, phoneNo, email });
    const savedHospital = await newHospital.save();
    res.status(201).json(savedHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHospitals = async (req, res) => {
  try {
    const { dealerName } = req.params;
    const connection = await connect(dealerName);
    const Hospital = createHospitalModel(connection);
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
