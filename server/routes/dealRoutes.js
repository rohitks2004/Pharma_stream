const express = require('express');
const router = express.Router();

// Import Controllers
const hospitalController = require('../controllers/Dealer/hospitalsController');
const orderController = require('../controllers/Dealer/ordersController');
const inventoryController = require('../controllers/Dealer/inventoryController');

// Hospital Routes
router.post('/hospital/:dealerName', hospitalController.createHospital); // Create a hospital for a specific dealer
router.get('/hospitals/:dealerName', hospitalController.getHospitals);   // Get hospitals for a specific dealer
// Additional Hospital CRUD routes can be added here

// Order Routes
router.post('/order/:dealerName', orderController.placeOrder);           // Place an order for a specific dealer
router.get('/orders/:dealerName', orderController.getOrders);            // Get orders for a specific dealer
// Additional Order CRUD routes can be added here

// Inventory Routes
router.post('/inventory/:dealerName', inventoryController.addMedicine);  // Add medicine for a specific dealer
router.get('/inventory/:dealerName', inventoryController.getMedicines);  // Get medicines for a specific dealer
// Additional Inventory CRUD routes can be added here

module.exports = router;
