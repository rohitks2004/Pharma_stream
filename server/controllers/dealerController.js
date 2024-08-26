const Dealer = require('../models/dealerModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

    // Save the dealer to superDB
    const newDealer = new Dealer({ enterpriseName, address, email, password, phoneno });
    await newDealer.save();

    // Create the new dealer database
    const dealerDB = await createDealerDatabase(newDealer.enterpriseName);

    // Define collections in the new dealer database
    const Inventory = dealerDB.model('Inventory', new mongoose.Schema({
      drugName: String,
      quantity: Number,
      supplier: String,
    }));

    const Orders = dealerDB.model('Orders', new mongoose.Schema({
      orderId: String,
      hospitalName: String,
      drugName: String,
      quantity: Number,
      orderDate: Date,
      status: String,
    }));

    const Hospitals = dealerDB.model('Hospitals', new mongoose.Schema({
      hospitalId: String,
      name: String,
      address: String,
      contactEmail: String,
    }));

    console.log(`New database and collections created for dealer: dealer_${newDealer._id}`);
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
