const Hospital = require('../../models/DealerDB/hospitalsModel');

exports.createHospital = async (req, res) => {
  try {
    const { hospitalId, name, address, phoneNo, email } = req.body;
    const newHospital = new Hospital({ hospitalId, name, address, phoneNo, email });
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
