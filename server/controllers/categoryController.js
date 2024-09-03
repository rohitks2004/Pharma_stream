const Data = require('../models/categoryModel'); // Import your Mongoose model

// Helper function to generate aggregation pipeline
const getWeeklyDataPipeline = (category) => {
  // Hardcode the reference date (08/10/2019) and calculate one month before
  const referenceDate = new Date('2019-08-10'); // Use ISO format YYYY-MM-DD
  const startDate = new Date(referenceDate);
  startDate.setMonth(startDate.getMonth() - 1); // Subtract 1 month from the reference date

  return [
    {
      $addFields: {
        datum: {
          $dateFromString: {
            dateString: '$datum',
            format: '%m-%d-%Y', // Adjust this to match your actual date format
            onError: null,
            onNull: null,
          },
        },
      },
    },
    {
      $match: {
        datum: { $ne: null }, // Ensure the converted date is not null
        datum: { $gte: startDate, $lt: referenceDate }, // Match documents within the date range
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
        total: { $sum: `$${category}` }, // Calculate total for the specified category
      },
    },
    {
      $sort: { '_id.year': 1, '_id.month': 1, '_id.week': 1, '_id.day': 1 }, // Sort by year, month, week, and day
    },
  ];
};

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

// Separate controller functions for each category
const getWeeklyDataM01AB = (req, res) => handleCategoryRequest(req, res, 'M01AB');
const getWeeklyDataM01AE = (req, res) => handleCategoryRequest(req, res, 'M01AE');
const getWeeklyDataN02BA = (req, res) => handleCategoryRequest(req, res, 'N02BA');
const getWeeklyDataN02BE = (req, res) => handleCategoryRequest(req, res, 'N02BE');
const getWeeklyDataN05B = (req, res) => handleCategoryRequest(req, res, 'N05B');
const getWeeklyDataN05C = (req, res) => handleCategoryRequest(req, res, 'N05C');
const getWeeklyDataR03 = (req, res) => handleCategoryRequest(req, res, 'R03');
const getWeeklyDataR06 = (req, res) => handleCategoryRequest(req, res, 'R06');

// Exporting all controller functions
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
