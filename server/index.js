const express = require('express');
const connectDB = require('./config/db.js');
require('dotenv').config()
const superLoginRoutes = require('./routes/superLoginRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const dealerRoutes = require('./routes/dealerRoutes');
const connectDealerDb=require("./config/dealerdb.js");
const connectHospitalDB=require("./config/hospitaldb.js")

const app = express();

// Connect to the database
connectDB();

//connectDealerDb("Rohit");
//connectHospitalDB("SV")

// Middleware
app.use(express.json());

// Routes
app.use('/api/superlogin', superLoginRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/dealer', dealerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
