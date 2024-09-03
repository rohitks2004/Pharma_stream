const express = require('express');
const cors=require('cors')
const helmet=require('helmet')
const connectDB = require('./config/db.js');
require('dotenv').config()

const superLoginRoutes = require('./routes/superLoginRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const dealerRoutes = require('./routes/dealerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes=require("./routes/cartRoutes.js")
const billingRoutes=require("./routes/billingRoutes.js")
const catRoutes=require('./routes/categoryRoutes.js');
const inventoryDRoutes=require('./routes/inventoryDRoutes.js')
const inventoryHRoutes=require('./routes/inventoryHRoutes.js')


const app = express();
// app.use(cors());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "http://localhost:8800"], // Allow connections to your API server
      // Add other directives as necessary
    },
  })
);

app.use(cors({
  origin:'http://localhost:5173',
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,

}));
// Connect to the database  
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/superlogin', superLoginRoutes);
app.use('/api/hospital', hospitalRoutes);
app.use('/api/dealer', dealerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart',cartRoutes);
app.use('/app/billing',billingRoutes);
app.use('/api/cat',catRoutes);
app.use('/api/dinventory',inventoryDRoutes);
app.use('/api/hinventory',inventoryHRoutes)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
