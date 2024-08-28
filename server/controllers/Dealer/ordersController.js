const connect = require('./connection'); 
const createOrderModel = require('../../models/DealerDB/ordersModel');

exports.placeOrder = async (req, res) => {
  try {
    const { dealerName } = req.params; 
    const connection = await connect(dealerName);
    const Order = createOrderModel(connection);
    const { hospitalId, medicines, price } = req.body;
    const newOrder = new Order({ hospitalId, medicines, price });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const { dealerName } = req.params; 
    const connection = await connect(dealerName);
    const Order = createOrderModel(connection);
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Additional CRUD operations as needed
