const express = require("express");
const router = express.Router();

const FoodController = require("../Controller/foodcontroller"); // Import the FoodController

// Food API
router.post("/food/add", FoodController.addFood);
router.get("/food/dis", FoodController.readFood);
router.put("/food/update", FoodController.updateFood);
router.post("/food/del", FoodController.deleteFood);

module.exports = router;
