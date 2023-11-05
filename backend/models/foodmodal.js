const mongoose = require("mongoose");

// Define a subdocument schema for the img field


const foodSchema = new mongoose.Schema({
  Image: {
    type: String,
    required: true,
    unique: true,
},
Name: {
    type: String,
    required: true,
    unique: true,
},
Author: {
    type: String,
    required: true,
    unique: true,
},
Category: {
    type: String,
    required: true,
},
Public: {
    type: String,
    required: true,

},
  // sales: {
  //   type: String,
  //   required: true,
  // },
  // likes: {
  //   type: String,
  //   required: true,
  // },
  // Ratings: {
  //   type: String,
  //   required: true,
  // },
}, { timestamps: true });

module.exports = mongoose.model("FoodItem", foodSchema);
