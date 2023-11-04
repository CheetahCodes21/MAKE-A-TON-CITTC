import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { FaEdit, FaTrash, FaUpload } from 'react-icons/fa';

function Admin() {
  const [foods, setFoods] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [newFoodData, setNewFoodData] = useState({
    Name: '',
    desc: ''
  });

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    setLoading(true);
    try {
      const response = await Axios.get('http://localhost:3000/api2/food/dis');
      console.log(response.data); // Add this line to log the response
      if (Array.isArray(response.data)) {
        setFoods(response.data);
      } else {
        console.error('Received data is not an array:', response.data);
        setFoods([]); // Set it to an empty array if it's not an array
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching foods:', error);
      setLoading(false);
    }
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  setNewFoodData({ ...newFoodData, [name]: value });
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', file);
    formData.append('Name', newFoodData.Name);
    formData.append('desc', newFoodData.desc);
  
    setLoading(true); // Set loading to true while the request is being made
    try {
      const response = await Axios.post('http://localhost:3000/api2/food/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFoods([...foods, response.data]); // Add the new food to the local state
      toggleModal(); // Close the modal
      setNewFoodData({ Name: '', desc: '' }); // Reset form data
      setFile(null); // Clear the file input
    } catch (error) {
      console.error('Error adding food:', error);
    } finally {
      setLoading(false); // Set loading to false regardless of the outcome
    }
  };
  

  // Functions for delete and update are omitted for brevity

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Admin Dashboard</h1>
        <div className="mb-4">
          <button onClick={toggleModal} className="btn btn-primary">
            Add New Food <FaUpload />
          </button>
        </div>
        <Modal isOpen={modal} toggle={toggleModal}>
          <ModalHeader toggle={toggleModal}>Add New Food</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleAddFood}>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="text" name="Name" id="Name" value={newFoodData.Name} onChange={handleInputChange} required />
              </FormGroup>
              <FormGroup>
                <Label for="desc">Description</Label>
                <Input type="text" name="desc" id="desc" value={newFoodData.desc} onChange={handleInputChange} required />
              </FormGroup>
              <FormGroup>
                <Label for="img">Image</Label>
                <Input type="file" name="img" id="img" onChange={handleFileChange} required />
              </FormGroup>
              <ModalFooter>
                <button type="submit" className="btn btn-primary">
                  Add Food
                </button>
                <button type="button" className="btn btn-secondary" onClick={toggleModal}>
                  Cancel
                </button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
        {loading ? (
          <p>Loading...</p>
        ) : (
            <div className="row">
            {foods.map((food) => (
              <div key={food._id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={food.img} alt={food.Name} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{food.Name}</h5>
                    <p className="card-text">{food.desc}</p>
                    {/* Buttons for delete and update */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        )}
      </div>
      <Footer />
    </>
  );
}

export default Admin;
