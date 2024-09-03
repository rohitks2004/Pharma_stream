const express = require('express');
const {
  getWeeklyData,
  getWeeklyDataM01AB,
  getWeeklyDataM01AE,
  getWeeklyDataN02BA,
  getWeeklyDataN02BE,
  getWeeklyDataN05B,
  getWeeklyDataN05C,
  getWeeklyDataR03,
  getWeeklyDataR06,
} = require('../controllers/categoryController');

const router = express.Router();

// Separate routes for each category
router.get('/M01AB', getWeeklyDataM01AB);
router.get('/M01AE', getWeeklyDataM01AE);
router.get('/N02BA', getWeeklyDataN02BA);
router.get('/N02BE', getWeeklyDataN02BE);
router.get('/N05B', getWeeklyDataN05B);
router.get('/N05C', getWeeklyDataN05C);
router.get('/R03', getWeeklyDataR03);
router.get('/R06', getWeeklyDataR06);

// Generic route for any category, can be removed if not needed
// router.get('/:category', getWeeklyData);

module.exports = router;
