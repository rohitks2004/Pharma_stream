const SuperLogin = require('../models/superLoginModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async(req,res)=>{
  const {email ,password} = req.body;
  
  const superLogin = await SuperLogin.findOne({email});

  try{
    if(!superLogin){
      return res.status(404).json({message:"user not found"});
    }
    const isMatch = bcrypt.compare(password,superLogin.password);
    if(!isMatch){
      return res.status(400).json({message:"invalid password"});
    }

    const token = jwt.sign({email:superLogin.email,userType:"superAdmin"},'secret_token',{expiresIn:'24h'});
    res.status(200).json({userType:"superAdmin",token});
  }
  catch(e){
    console.log(e);
  }
}

exports.createSuperUser = async (req, res) => {
  try {
    const newUser = new SuperLogin(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSuperUser = async (req, res) => {
  try {
    const user = await SuperLogin.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
