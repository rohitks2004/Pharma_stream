const express = require('express');
const router = express.Router();

// Import Controllers
const inventoryController = require('../controllers/Hospital/inventoryController');
const cartController = require('../controllers/Hospital/cartController');
const orderController = require('../controllers/Hospital/orderController');
const dealerController = require('../controllers/Hospital/dealerController');
const billingController = require('../controllers/Hospital/billingController');

// Inventory Routes
router.post('/inventory', inventoryController.addMedicine);
router.get('/inventory', inventoryController.getMedicines);
router.put('/inventory/:id', inventoryController.updateMedicine);
router.delete('/inventory/:id', inventoryController.deleteMedicine);

// Cart Routes
router.post('/cart', cartController.addToCart);
router.get('/cart/:id', cartController.getCart);
router.put('/cart/:id', cartController.updateCart);
router.delete('/cart/:id', cartController.deleteCart);

// Order Routes
router.post('/order', orderController.placeOrder);
router.get('/order/:id', orderController.getOrder);
router.put('/order/:id', orderController.updateOrderStatus);
router.get('/orders/history', orderController.getOrdersHistory);

// Dealer Routes
router.post('/dealer', dealerController.createDealer);
router.get('/dealers', dealerController.getDealers);
router.put('/dealer/:id', dealerController.updateDealer);
router.delete('/dealer/:id', dealerController.deleteDealer);

// Billing Routes
router.post('/billing', billingController.createBillingRecord);
router.get('/billing', billingController.getBillingRecords);
router.put('/billing/:id', billingController.updateBillingRecord);
router.delete('/billing/:id', billingController.deleteBillingRecord);

// Export the router
module.exports = router;
