const Order = require('../../models/DealerDB/ordersModel');

exports.placeOrder = async (req, res) => {
  try {
    const { hospitalId, medicines, price } = req.body;
    const newOrder = new Order({ hospitalId, medicines, price });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
