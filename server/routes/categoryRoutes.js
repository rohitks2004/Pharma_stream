// routes/weekDataRoutes.js
const express = require('express');
const {
  getWeeklyData,
  getM01ABData,
  getM01AEData,
  getN02BAData,
  getN02BEData,
  getN05BData,
  getN05CData,
  getR03Data,
  getR06Data,
} = require('../controllers/categoryController');

const router = express.Router();

router.get('/week-data/:category', getWeeklyData);

router.get('/week-data/M01AB', getM01ABData);
router.get('/week-data/M01AE', getM01AEData);
router.get('/week-data/N02BA', getN02BAData);
router.get('/week-data/N02BE', getN02BEData);
router.get('/week-data/N05B', getN05BData);
router.get('/week-data/N05C', getN05CData);
router.get('/week-data/R03', getR03Data);
router.get('/week-data/R06', getR06Data);

module.exports = router;
