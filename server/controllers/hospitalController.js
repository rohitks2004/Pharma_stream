const Hospital = require('../models/hospitalModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async(req,res)=>{
  const {email ,password} = req.body;
  
  const hospital = await Hospital.findOne({email});

  try{
    if(!hospital){
      return res.status(404).json({message:"user not found"});
    }
    const isMatch = bcrypt.compare(password,hospital.password);
    if(!isMatch){
      return res.status(400).json({message:"invalid password"});
    }

    const token = jwt.sign({email:hospital.email,userType:"hospital"},'secret_token',{expiresIn:'24h'});
    res.status(200).json({userType:"hospital",token});
  }
  catch(e){
    console.log(e);
  }
}
exports.createHospital = async (req, res) => {
  try {
    const newHospital = new Hospital(req.body);
    await newHospital.save();
    res.status(201).json(newHospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getHospital = async (req, res) => {
  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ message: 'Hospital not found' });
    }
    res.json(hospital);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
