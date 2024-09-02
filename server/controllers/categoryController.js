// server.js
const Data = require('../models/categoryModel'); // Adjust path as needed



// Helper function to generate aggregation pipeline
const getWeeklyDataPipeline = (category) => [
  {
    $group: {
      _id: {
        week: { $isoWeek: '$datum' },
        year: { $year: '$datum' },
      },
      total: { $sum: `$${category}` },
    },
  },
  {
    $sort: { '_id.year': 1, '_id.week': 1 },
  },
];

// Generic function to handle getting weekly data for any category
const getWeeklyData = async (req, res) => {
  const { category } = req.params;

  // Check if the category is valid
  const validCategories = ['M01AB', 'M01AE', 'N02BA', 'N02BE', 'N05B', 'N05C', 'R03', 'R06'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const weekData = await Data.aggregate(getWeeklyDataPipeline(category));
    res.json(weekData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Separate functions for each category
const getM01ABData = (req, res) => getWeeklyData({ ...req, params: { category: 'M01AB' } }, res);
const getM01AEData = (req, res) => getWeeklyData({ ...req, params: { category: 'M01AE' } }, res);
const getN02BAData = (req, res) => getWeeklyData({ ...req, params: { category: 'N02BA' } }, res);
const getN02BEData = (req, res) => getWeeklyData({ ...req, params: { category: 'N02BE' } }, res);
const getN05BData = (req, res) => getWeeklyData({ ...req, params: { category: 'N05B' } }, res);
const getN05CData = (req, res) => getWeeklyData({ ...req, params: { category: 'N05C' } }, res);
const getR03Data = (req, res) => getWeeklyData({ ...req, params: { category: 'R03' } }, res);
const getR06Data = (req, res) => getWeeklyData({ ...req, params: { category: 'R06' } }, res);

module.exports = {
  getWeeklyData,
  getM01ABData,
  getM01AEData,
  getN02BAData,
  getN02BEData,
  getN05BData,
  getN05CData,
  getR03Data,
  getR06Data,
};
