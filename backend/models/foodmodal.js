const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    img: {
        data: Buffer, // Store image data as Buffer
        contentType: String, // Store the content type of the image
        required: true,
    },
    desc: {
        type: String,
        required: true,
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
