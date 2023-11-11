// Import statements...
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Img from '../Assets/cards/brown.jpg'

const AddFood = () => {
  let navigate=useNavigate();
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
      alert('Food added successfully!')
      navigate('/admin')

      console.log(response.data); // Log the response from the server

      // Handle success, e.g., show a success message to the user or redirect to a different page
    } catch (error) {
      console.error('Error adding food:', error);

      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
      <Navbar />
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card text-info p-4" style={{ width: '400px',backgroundColor:'transparent' }}>
          <h1 className="text-center mb-4">Add Food</h1>
          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">Dish Name</label>
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
            <div className="mb-3">
              <label htmlFor="Author" className="form-label">Ingredients</label>
              <textarea
                name="Author"
                id="Author"
                value={formData.Author}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Category" className="form-label">Category</label>
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
            <div className="mb-3">
              <label htmlFor="Public" className="form-label">Recipe</label>
              <textarea
                name="Public"
                id="Public"
                value={formData.Public}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">Image URL</label>
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
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Add Food</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddFood;
