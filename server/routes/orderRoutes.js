const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.post('/place', orderController.placeOrder);


router.get('/:id', orderController.getOrder);


router.put('/update/:id', orderController.updateOrderStatus);


router.get('/history', orderController.getOrdersHistory);

module.exports = router;
