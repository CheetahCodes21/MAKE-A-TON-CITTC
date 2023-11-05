import React, { useState } from 'react';
import Axios from 'axios';

const AddFood = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Image: '', // Store the image URL as text
    Author: '',
    Category: '',
    Public: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Name, Image, Author, Category, Public } = formData;

    const dataToSubmit = {
      Name,
      Image, // Image URL as text
      Author,
      Category,
      Public,
    };

    try {
      const response = await Axios.post('http://localhost:3000/api2/food/add', dataToSubmit);

      console.log(response.data); // Log the response from the server

      // Handle success, e.g., show a success message to the user or redirect to a different page
    } catch (error) {
      console.error('Error adding food:', error);

      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div className="container">
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="Name" className="col-sm-2 col-form-label">Dish name</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="Name"
              id="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Author" className="col-sm-2 col-form-label">Ingredients</label>
          <div className="col-sm-10">
            <textarea
              name="Author"
              id="Author"
              value={formData.Author}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Category" className="col-sm-2 col-form-label">Category</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="Category"
              id="Category"
              value={formData.Category}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Public" className="col-sm-2 col-form-label">Recipe</label>
          <div className="col-sm-10">
            <textarea
              name="Public"
              id="Public"
              value={formData.Public}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="Image" className="col-sm-2 col-form-label">Image URL</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="Image"
              id="Image"
              value={formData.Image}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">Add Food</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
