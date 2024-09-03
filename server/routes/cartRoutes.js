const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/add', cartController.addToCart);
router.get('/:id', cartController.getCart);
router.put('/update/:id', cartController.updateCart);
router.delete('/delete/:id', cartController.deleteCart);

module.exports = router;
