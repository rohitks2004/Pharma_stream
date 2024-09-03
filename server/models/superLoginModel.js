const mongoose = require('mongoose');
const bcrypt=require('bcrypt');

const superLoginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userType:{type:String,default:'dealer'},
  password: { type: String, required: true },
});

superLoginSchema.pre("save",async function ( next){
  if(!this.isModified("password")){
      next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt);

})

superLoginSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};


module.exports = mongoose.model('SuperLogin', superLoginSchema);
