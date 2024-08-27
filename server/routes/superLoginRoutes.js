const express = require('express');
const router = express.Router();
const superLoginController = require('../controllers/superLoginController');

router.post('/login',superLoginController.login)
router.post('/create', superLoginController.createSuperUser);
router.get('/:id', superLoginController.getSuperUser);

// Additional routes as needed

module.exports = router;
