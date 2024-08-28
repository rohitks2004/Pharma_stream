const connectHospitalDb = require('../../config/hospitaldb');

const connect=async(hospitalName)=>{
    const connection = await connectHospitalDb(hospitalName);
    return connection;
}
module.exports=connect;