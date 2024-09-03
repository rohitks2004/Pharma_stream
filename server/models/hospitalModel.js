const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
//import bcrypt from 'bcryptjs';
const bcrypt=require('bcrypt');
const hospitalSchema = new mongoose.Schema({
  id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneno: { type: String, required: true },
});

hospitalSchema.pre("save",async function ( next){
  if(!this.isModified("password")){
      next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt);

})

hospitalSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};


module.exports = mongoose.model('Hospital', hospitalSchema);
