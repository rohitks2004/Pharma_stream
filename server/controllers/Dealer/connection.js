const connectDealerDb=require("../../config/dealerdb")

const connect=(dealerName)=>{
    return connectDealerDb(dealerName);

}
module.exports=connect;
