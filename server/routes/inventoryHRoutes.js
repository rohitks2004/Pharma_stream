const express = require('express');
const router = express.Router();
const inventoryHController = require('../controllers/inventoryHController');

router.post('/add', inventoryHController.addInventory);
router.get('/', inventoryHController.getInventories);
router.get('/:id', inventoryHController.getInventoryById);
router.put('/update/:id', inventoryHController.updateInventory);
router.delete('/delete/:id', inventoryHController.deleteInventory);

module.exports = router;
