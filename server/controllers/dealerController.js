const Dealer = require('../models/dealerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose=require('mongoose')


exports.login = async(req,res)=>{
  const {email ,password} = req.body;
  
  const dealer = await Dealer.findOne({email});

  try{
    if(!dealer){
      return res.status(404).json({message:"user not found"});
    }
    const isMatch = bcrypt.compare(password,dealer.password);
    if(!isMatch){
      return res.status(400).json({message:"invalid password"});
    }

    const token = jwt.sign({email:dealer.email,userType:"dealer"},'secret_token',{expiresIn:'24h'});
    res.status(200).json({userType:"dealer",token});
  }
  catch(e){
    console.log(e);
  }
}

exports.createDealer = async (req, res) => {
  try {
    const { enterpriseName, address, email, password, phoneno } = req.body;

    const newDealer = new Dealer({ enterpriseName, address, email, password, phoneno });
    await newDealer.save();
    
    res.status(201).json(newDealer);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDealer = async (req, res) => {
  try {
    const dealer = await Dealer.findById(req.params.id);
    if (!dealer) {
      return res.status(404).json({ message: 'Dealer not found' });
    }
    res.json(dealer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
