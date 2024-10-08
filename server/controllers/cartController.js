const Cart = require('../models/cartModel');
const axios=require('axios')

exports.addToCart = async (req, res) => {
    try {
        const { startDate, endDate, drug } = req.body;

        
        const response = await axios.post('http://127.0.0.1:5000/predict', {
            start_date: startDate,
            end_date: endDate,
            drug: drug
        });
        console.log(response);
        const predictions = response.data; 
        console.log(predictions);
       
        

        console.log("ghjk");
        
        const cartData = {
            medicines: predictions.map(prediction => ({
                medicineId: prediction.Drug, 
                quantity: prediction.predicted_quantity
            }))
        };

        const cart = new Cart(cartData);
        const savedCart = await cart.save();
        res.status(201).json(savedCart);
    } catch (err) {
        res.status(500).json({ error: err.message });
       // console.log(err);
        
    }
};
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
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
