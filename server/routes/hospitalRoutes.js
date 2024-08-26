const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

router.post('/create', hospitalController.createHospital);
router.get('/:id', hospitalController.getHospital);

// Additional routes as needed

module.exports = router;
