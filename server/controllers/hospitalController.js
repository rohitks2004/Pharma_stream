const Hospital = require('../models/hospitalModel');
const mongoose = require('mongoose');
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
    const { name, address, email, password, phoneno } = req.body;

    // Save the hospital to superDB
    const newHospital = new Hospital({ name, address, email, password, phoneno });
    await newHospital.save();
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
