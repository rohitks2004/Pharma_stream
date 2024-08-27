const Cart = require('../../models/HospitalDB/cartModel');

exports.addToCart = async (req, res) => {
    try {
        const cart = new Cart(req.body);
        const savedCart = await cart.save();
        res.status(201).json(savedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate('medicines.medicineId').populate('dealerPreferences');
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: "Cart deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
