const Data = require('../models/categoryModel');

// Helper function to generate aggregation pipeline
const getWeeklyDataPipeline = (category) => [
  {
    $addFields: {
      datum: {
        $dateFromString: {
          dateString: '$datum',
          format: '%m-%d-%Y', // Adjust based on your actual date format
          onError:null,
          onNull:null,
        },
      },
    },
  },
  {
    $match: {
      datum: { $ne: null },
    },
  },
  {
    $group: {
      _id: {
        week: { $isoWeek: '$datum' },
        year: { $year: '$datum' },
        month: { $month: '$datum' },
        day: { $dayOfMonth: '$datum' },
      },
      total: { $sum: `$${category}` },
    },
  },
  {
    $sort: { '_id.year': 1, '_id.month': 1, '_id.week': 1 ,'_id.day':1},
  },
];

// Helper function to format the response as per the required output
const formatResponse = (results, category) => {
  return results.map((item) => ({
    Category: category,
    DATE: `${item._id.month}-${item._id.day}-${item._id.year}`,
    week: item._id.week,
    total: item.total,
  }));
};

// Generic controller function to get weekly data for a specific category
const getWeeklyData = async (req, res) => {
  const { category } = req.params;

  // Check if the category is valid
  const validCategories = ['M01AB', 'M01AE', 'N02BA', 'N02BE', 'N05B', 'N05C', 'R03', 'R06'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const weekData = await Data.aggregate(getWeeklyDataPipeline(category));
    const formattedData = formatResponse(weekData, category);
    res.json(formattedData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Separate controller functions for each category
const getWeeklyDataM01AB = async (req, res) => {
  handleCategoryRequest(req, res, 'M01AB');
};

const getWeeklyDataM01AE = async (req, res) => {
  handleCategoryRequest(req, res, 'M01AE');
};

const getWeeklyDataN02BA = async (req, res) => {
  handleCategoryRequest(req, res, 'N02BA');
};

const getWeeklyDataN02BE = async (req, res) => {
  handleCategoryRequest(req, res, 'N02BE');
};

const getWeeklyDataN05B = async (req, res) => {
  handleCategoryRequest(req, res, 'N05B');
};

const getWeeklyDataN05C = async (req, res) => {
  handleCategoryRequest(req, res, 'N05C');
};

const getWeeklyDataR03 = async (req, res) => {
  handleCategoryRequest(req, res, 'R03');
};

const getWeeklyDataR06 = async (req, res) => {
  handleCategoryRequest(req, res, 'R06');
};

// Helper function to handle requests for specific categories
const handleCategoryRequest = async (req, res, category) => {
  try {
    const weekData = await Data.aggregate(getWeeklyDataPipeline(category));
    const formattedData = formatResponse(weekData, category);
    res.json(formattedData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getWeeklyData,
  getWeeklyDataM01AB,
  getWeeklyDataM01AE,
  getWeeklyDataN02BA,
  getWeeklyDataN02BE,
  getWeeklyDataN05B,
  getWeeklyDataN05C,
  getWeeklyDataR03,
  getWeeklyDataR06,
};
