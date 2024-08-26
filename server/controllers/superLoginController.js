const SuperLogin = require('../models/superLoginModel');

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
