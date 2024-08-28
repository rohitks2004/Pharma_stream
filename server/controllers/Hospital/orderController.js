const connect = require('./connection');
const createOrderModel = require('../../models/HospitalDB/ordersModel');

exports.placeOrder = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Order = createOrderModel(connection);

        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrder = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Order = createOrderModel(connection);

        const order = await Order.findById(req.params.id).populate('medicines.medicineId').populate('dealerId');
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Order = createOrderModel(connection);

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getOrdersHistory = async (req, res) => {
    try {
        const { hospitalName } = req.params;
        const connection = await connect(hospitalName);
        const Order = createOrderModel(connection);

        const orders = await Order.find({}).populate('medicines.medicineId').populate('dealerId');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
