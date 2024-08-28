const express = require('express');
const router = express.Router();

// Import Controllers
const inventoryController = require('../controllers/Hospital/inventoryController');
const cartController = require('../controllers/Hospital/cartController');
const orderController = require('../controllers/Hospital/orderController');
const dealerController = require('../controllers/Hospital/dealerController');
const billingController = require('../controllers/Hospital/billingController');

// Inventory Routes
router.post('/:hospitalName/inventory', inventoryController.addMedicine);
router.get('/:hospitalName/inventory', inventoryController.getMedicines);
router.put('/:hospitalName/inventory/:id', inventoryController.updateMedicine);
router.delete('/:hospitalName/inventory/:id', inventoryController.deleteMedicine);

// Cart Routes
router.post('/:hospitalName/cart', cartController.addToCart);
router.get('/:hospitalName/cart/:id', cartController.getCart);
router.put('/:hospitalName/cart/:id', cartController.updateCart);
router.delete('/:hospitalName/cart/:id', cartController.deleteCart);

// Order Routes
router.post('/:hospitalName/order', orderController.placeOrder);
router.get('/:hospitalName/order/:id', orderController.getOrder);
router.put('/:hospitalName/order/:id', orderController.updateOrderStatus);
router.get('/:hospitalName/orders/history', orderController.getOrdersHistory);

// Dealer Routes
router.post('/:hospitalName/dealer', dealerController.createDealer);
router.get('/:hospitalName/dealers', dealerController.getDealers);
router.put('/:hospitalName/dealer/:id', dealerController.updateDealer);
router.delete('/:hospitalName/dealer/:id', dealerController.deleteDealer);

// Billing Routes
router.post('/:hospitalName/billing', billingController.createBillingRecord);
router.get('/:hospitalName/billing', billingController.getBillingRecords);
router.put('/:hospitalName/billing/:id', billingController.updateBillingRecord);
router.delete('/:hospitalName/billing/:id', billingController.deleteBillingRecord);

// Export the router
module.exports = router;
