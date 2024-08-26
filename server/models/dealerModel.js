const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
//import bcrypt from 'bcrypt';
const bcrypt=require('bcrypt');
const dealerSchema = new mongoose.Schema({
  dealerId: { type: String, default: uuidv4 },
  enterpriseName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneno: { type: String, required: true },
});
dealerSchema.pre("save",async function ( next){
  if(!this.isModified("password")){
      next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt);

})

dealerSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};


module.exports = mongoose.model('Dealer', dealerSchema);
