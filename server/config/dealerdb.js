const mongoose =require("mongoose")

const connectDealerDb=async(dealername)=>{
    try {
        
    
        const dealerDBName = `dealer_${dealername}`;
        const dealerDB = await mongoose.createConnection(`mongodb+srv://pharma:stream@project-sre.jnie5.mongodb.net/${dealerDBName}`);
    
        // Check if the connection was successful
        dealerDB.on('connected', () => {
          console.log(`Connected to ${dealerDBName} database`);
        });
    
        dealerDB.on('error', (err) => {
          console.error(`Error connecting to ${dealerDBName} database:`, err);
        });
    
        return dealerDB;
      } catch (err) {
        console.error('Error creating dealer database:', err);
        throw err;
      }
}
module.exports=connectDealerDb;