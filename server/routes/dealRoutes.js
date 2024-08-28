const express = require('express');
const router = express.Router();

// Import Controllers
const hospitalController = require('../controllers/Dealer/hospitalsController');
const orderController = require('../controllers/Dealer/ordersController');
const inventoryController = require('../controllers/Dealer/inventoryController');

// Hospital Routes
router.post('/hospital', hospitalController.createHospital);
router.get('/hospitals', hospitalController.getHospitals);
// Additional Hospital CRUD routes

// Order Routes
router.post('/order', orderController.placeOrder);
router.get('/orders', orderController.getOrders);
// Additional Order CRUD routes

// Inventory Routes
router.post('/inventory', inventoryController.addMedicine);
router.get('/inventory', inventoryController.getMedicines);
// Additional Inventory CRUD routes

module.exports = router;
