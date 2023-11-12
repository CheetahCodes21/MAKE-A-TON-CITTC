const FoodModel = require("../models/foodmodal"); // Import the FoodItem model

const { isvalid, isvalidBody } = require("./valid");

const addFood = async (req, res) => {
    try {
        const { Name, Image, Author, Category, Public } = req.body;

        if (!Name || !Image || !Author || !Category || !Public) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Find an existing document with the same "Image" value
        let existingFood = await FoodModel.findOne({ Image });

        if (existingFood) {
            // Update the existing document
            existingFood.Name = Name;
            existingFood.Author = Author;
            existingFood.Category = Category;
            existingFood.Public = Public;

            const updatedFood = await existingFood.save();

            return res.status(200).json({
                status: true,
                msg: "Food Item Updated Successfully",
                data: updatedFood,
            });
        } else {
            // Create a new document
            const foodData = {
                Name,
                Image,
                Author,
                Category,
                Public,
            };

            const newFood = new FoodModel(foodData);

            const savedFood = await newFood.save();

            return res.status(201).json({
                status: true,
                msg: "Food Item Created Successfully",
                data: savedFood,
            });
        }
    } catch (error) {
        return res.status(500).json({ status: false, msg: "Error adding/updating food", error: error.message });
    }
};



const readFood = async (req, res) => {
    try {
        const foodData = await FoodModel.find(); 
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
