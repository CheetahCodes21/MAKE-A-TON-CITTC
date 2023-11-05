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
    <div>
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            id="Name"
            value={formData.Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Author">Author</label>
          <input
            type="text"
            name="Author"
            id="Author"
            value={formData.Author}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Category">Category</label>
          <input
            type="text"
            name="Category"
            id="Category"
            value={formData.Category}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Public">Public</label>
          <input
            type="text"
            name="Public"
            id="Public"
            value={formData.Public}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Image">Image URL</label>
          <input
            type="text"
            name="Image"
            id="Image"
            value={formData.Image}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
