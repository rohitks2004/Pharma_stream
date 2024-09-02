const Order = require('../models/orderModel');

exports.placeOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('medicines.medicineId').populate('dealerId');
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrdersHistory = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('medicines.medicineId').populate('dealerId');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
