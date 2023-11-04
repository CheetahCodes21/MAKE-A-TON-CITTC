const FoodModel = require("../models/foodmodel"); // Import the FoodItem model

const { isvalid, isvalidBody } = require("./valid");

const addFood = async (req, res) => {
    try {
        let data = req.body;
        let { Name, img, desc, sales, likes, Ratings } = req.body;

        if (!isvalidBody(data)) {
            return res.status(400).send({ msg: "No data added" });
        }
        if (!isvalid(img)) {
            return res.status(400).send({ msg: "Image link is required" });
        }
        if (!isvalid(Name)) {
            return res.status(400).send({ msg: "Name of food is required" });
        }
        // Add similar checks for other fields (desc, sales, likes, Ratings)

        let addData = await FoodModel.create(data); // Use FoodModel to create a new food item
        return res.status(201).send({
            status: true,
            msg: "Food Item Created Successfully",
            data: addData,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

const readFood = async (req, res) => {
    try {
        const foodData = await FoodModel.find(); // Use FoodModel to retrieve food items
        return res.status(200).send({
            status: true,
            data: foodData,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

const updateFood = async (req, res) => {
    try {
        const { name, newData } = req.body;

        if (!name || !newData) {
            return res.status(400).send({ msg: "Invalid input" });
        }

        const updatedFood = await FoodModel.findOneAndUpdate({ Name: name }, newData, {
            new: true,
        });

        if (!updatedFood) {
            return res.status(404).send({ msg: "Food item not found" });
        }

        return res.status(200).send({
            status: true,
            msg: "Food item data updated successfully",
            data: updatedFood,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

const deleteFood = async (req, res) => {
    try {
        const { Name } = req.body;

        if (!Name) {
            return res.status(400).send({ msg: "Invalid input" });
        }

        const deletedFood = await FoodModel.findOneAndDelete({ Name: Name });

        if (!deletedFood) {
            return res.status(404).send({ msg: "Food item not found" });
        }

        return res.status(200).send({
            status: true,
            msg: "Food item deleted successfully",
            data: deletedFood,
        });
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = { addFood, readFood, updateFood, deleteFood };
