const express = require('express');
const multer = require('multer');
const path = require('path');
const FoodController = require('../Controller/foodcontroller');

const router = express.Router();

// Set up storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the path where the uploads will be stored
    const uploadDir = path.join(__dirname, '..', 'downloads'); // Adjust the path as needed
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Use the original file name or generate a new one
    const uniqueSuffix = '-' + Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + uniqueSuffix);
  }
});

// Set up file filter to only accept images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Not an image! Please upload only images.'), false); // Reject file
  }
};

// Initialize multer with the above configurations
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
  }
});

// Routes
router.post('/food/add', upload.single('img'), FoodController.addFood);
router.get('/food/dis', FoodController.readFood);
router.put('/food/update', FoodController.updateFood);
router.delete('/food/del/:id', FoodController.deleteFood); // Use DELETE method and param for RESTful API

module.exports = router;
