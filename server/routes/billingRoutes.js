const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.post('/create', billingController.createBillingRecord);
router.get('/records', billingController.getBillingRecords);
router.put('/update/:id', billingController.updateBillingRecord);
router.delete('/delete/:id', billingController.deleteBillingRecord);

module.exports = router;
