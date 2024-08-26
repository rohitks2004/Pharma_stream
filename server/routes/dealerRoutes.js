const express = require('express');
const router = express.Router();
const dealerController = require('../controllers/dealerController');


router.post('/login',superLoginController.login);
router.post('/create', dealerController.createDealer);
router.get('/:id', dealerController.getDealer);

// Additional routes as needed

module.exports = router;
