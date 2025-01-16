const mongoose = require("mongoose")
const { Schema } = mongoose;

const MenuSchema = new Schema({
  name: String, 
  description: String,
  image: String,
  price:Number,
  category:String,
},{versionKey:false,timeStamps:true});

const MenuModel = mongoose.model('menu', MenuSchema);

module.exports = MenuModel;