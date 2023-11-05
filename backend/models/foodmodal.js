const mongoose = require("mongoose");

// Define a subdocument schema for the img field


const foodSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
 
  desc: {
    type: String,
    required: true,
  },
  Author:{
    type: String,
    required: true,
  },
  category:{
   type:String,
   required:true
  },
  sales: {
    type: String,
    required: true,
  },
  likes: {
    type: String,
    required: true,
  },
  Ratings: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("FoodItem", foodSchema);
