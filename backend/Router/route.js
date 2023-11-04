const express = require("express");
const router = express.Router();

const FoodController = require("../Controller/foodcontroller"); // Import the FoodController

// Food API
router.post("/add", FoodController.addFood);
router.get("/dis", FoodController.readFood);
router.put("/update", FoodController.updateFood);
router.post("/del", FoodController.deleteFood);

module.exports = router;
