const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');
// const superLoginController=require('../controllers/superLoginController')


router.post('/login',hospitalController.login);

router.get('/:id', hospitalController.getHospital);

// Additional routes as needed

module.exports = router;
