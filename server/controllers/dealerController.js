const Dealer = require('../models/dealerModel');

exports.createDealer = async (req, res) => {
  try {
    const newDealer = new Dealer(req.body);
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
