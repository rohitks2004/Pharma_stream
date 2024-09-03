const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryDController'); 

router.post('/add', inventoryController.addInventory);
router.get('/', inventoryController.getInventories);
router.get('/:id', inventoryController.getInventoryById);
router.put('/update/:id', inventoryController.updateInventory);
router.delete('/delete/:id', inventoryController.deleteInventory);

module.exports = router;
