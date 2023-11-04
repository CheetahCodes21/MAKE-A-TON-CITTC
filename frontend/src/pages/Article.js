import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { FaUpload } from 'react-icons/fa'; 


function Admin() {
  const [option, setOption] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedFoods, setAddedFoods] = useState([]);
  const [foundFoods, setFoundFoods] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const [newFood, setNewFood] = useState({
    img: "",
    name: "",
    category: "",
    Public: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    newData: {
      Img: "",
      name: "",
      category: "",
      Public: "",
    },
  });

  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Fetch added books from the backend when the component mounts
    fetchaddedFoods();
  }, []);

  const handleOptionChange = (selectedOption) => {
    setOption(selectedOption);
    setSearchTerm("");
    setFoundFoods([]);
  };

  const handleSearch = async () => {
    if (option === "delete" || option === "update") {
      if (searchTerm.trim() === "") {
        // If search field is empty, display a message
        alert("Please enter a food to search.");
        return;
      }
      try {
        const response = await Axios.get("http://localhost:3000/api2/food/dis");
        if (response.status === 200) {
          const data = response.data.data;
          const filtered = data.filter(
            (food) =>
              food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              food.Author.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFoundFoods(filtered);
        }
      } catch (error) {
        console.error("Error searching for foods:", error);
      }
    }
  };

  const handleAddedFoods = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', file); // 'image' is the key expected on the server side
    formData.append('name', newFood.name);
    formData.append('category', newFood.category);
    formData.append('Public', newFood.Public);
    
    setLoading(true); // Set loading to true while the request is being made
    // Get the current date in ISO format (YYYY-MM-DD)
    const currentDate = new Date().toISOString().split('T')[0];

    if (newFood.Public > currentDate) {
      alert("Publication date cannot be greater than today's date.");
      return; // Prevent adding the food
    }

    try {
      // Send a POST request to the backend to add a new food using Axios
      const response = await Axios.post("http://localhost:3000/api2/food/add", newFood);
      console.log(response);
      if (response.status === 201) {
        // Add the new food to the local state
        const data = response.data;
        setAddedFoods([...addedFoods, data]);
        setNewFood({
          img: "",
          name: "",
          category: "",
          Public: "",
        });
        alert("Food added")
      }
    } catch (error) {
      console.error("Error adding food:", error);
    }
  };


  const fetchaddedFoods = async () => {
    try {
      // Fetch the list of added books from the backend using Axios
      const response = await Axios.get("http://localhost:3000/api2/food/dis");
      if (response.status === 200) {
        const data = response.data.data; // Assuming your backend returns data in { data: [...] } format
        setAddedFoods(data);
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching foods:", error);
    }
  };

  const handleDeleteFood = async (foodName) => {
    try {
      // Send a POST request to the backend to delete the food using Axios
      const response = await Axios.post("http://localhost:3000/api2/food/del", { name: foodName });

      // Check the response status
      if (response.status === 200) {
        // Remove the food from the local state
        const updatedFoods = addedFoods.filter((b) => b.name !== foodName);
        setAddedFoods(updatedFoods);
        setFoundFoods([]);
        alert("Food deleted")
      }
    } catch (error) {
      console.error("Error deleting food:", error);

      // Log more detailed error information if available
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };

  const handleUpdateBook = async (food) => {
    try {
      // Send a PUT request to the backend to update the specific food using Axios
      const response = await Axios.put("http://localhost:3000/api2/food/update", {
        name: food.name, // Send the food name as an identifier
        newData: updateData.newData, // Send the updated data
      });

      if (response.status === 200) {
        // Update the food in the local state
        alert("Food updated")
        const updatedFoods = addedFoods.map((b) => {
          if (b.name === food.name) {
            return { ...b, ...updateData.newData };
          }
          return b;
        });

        setAddedFoods(updatedFoods);
        setFoundFoods([]);
        setUpdateData({
          name: "",
          newData: {
            Image: "",
            name: "",
            Genre: "",
            Public: "",
          },
        });
      }
    } catch (error) {
      // Handle errors
      console.error("Error updating food:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 ">
        {loading ? (
          <div className="text-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="border border-5 p-4  mb-4 bg-warning-subtle">
            <h1 className="mb-4 display-8 fw-bold text-primary">Food Artciles: Add, Delete, or Update Foods</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-header">Options</div>
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="card-buttons mb-3">
                      <button
                        className={`btn ${option === "add" ? "btn-success" : "btn-danger"}`}
                        onClick={() => handleOptionChange("add")}
                      >
                        Add Foods
                      </button>
                      <button
                        className={`btn ${option === "delete" ? "btn-success" : "btn-danger"}`}
                        onClick={() => handleOptionChange("delete")}
                      >
                        Delete Foods
                      </button>
                      <button
                        className={`btn ${option === "update" ? "btn-success" : "btn-danger"}`}
                        onClick={() => handleOptionChange("update")}
                      >
                        Update Foods
                      </button>
                    </div>
                    <div className="food-card">
                      <img
                        src="https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Book Options"
                        className="img-fluid"
                        style={{ maxWidth: "100%", maxHeight: "500px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="border border-5 p-4 bg-warning">
                  <div className="card ">
                    <div className="card-header">
                      {option === "add" && "Add Foods"}
                      {option === "delete" && "Delete Foods"}
                      {option === "update" && "Update Foods"}
                    </div>
                    <div className="card-body bg-dark text-white">
                      {option === "add" && (
                        <div>
                          <h2>Add Food</h2>
                          <form onSubmit={handleAddedFoods}>
                            <div className="mb-3">
                              <label htmlFor="imageLink" className="form-label">
                                Image Link
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="imageLink"
                                required
                                value={newFood.img}
                                name="img"
                                onChange={(e) =>
                                  setNewFood({ ...newFood, img: e.target.value })
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="title" className="form-label">
                                Title
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={newFood.name}
                                name="name"
                                onChange={(e) =>
                                  setNewFood({ ...newFood, name: e.target.value })
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="category" className="form-label">
                                category
                              </label>
                              <select
                                className="form-control"
                                id="category"
                                required
                                value={newFood.category}
                                name="category"
                                onChange={(e) =>
                                  setNewFood({ ...newFood, category: e.target.value })
                                }
                              >
                                <option value="">Select Category</option>
                                <option value="Spicy">Spicy</option>
                                <option value="Salty">Salty</option>
                                <option value="Sweet">Sweet</option>
                              
                                {/* Add more genre options as needed */}
                              </select>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="publicationDate" className="form-label">
                                Publication Date
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                id="publicationDate"
                                required
                                value={newFood.Public}
                                name="Public"
                                onChange={(e) =>
                                  setNewFood({ ...newFood, Public: e.target.value })
                                }
                              />
                            </div>

                            <button type="submit" className="btn btn-primary">
                              Add Food
                            </button>
                          </form>
                        </div>
                      )}

                      {option === "delete" && (
                        <div>
                          <h2>Delete Food</h2>
                          <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Search by title or author"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button
                            className="btn btn-outline-primary mb-3"
                            onClick={handleSearch}
                          >
                            Search
                          </button>
                          <ul className="list-group">
                            {foundFoods.map((food, index) => (
                              <li
                                key={index}
                                className="list-group-item d-flex justify-content-between align-items-center"
                              >
                                <div>
                                  <strong>Title:</strong> {food.name}, 
                                 <strong>Category:</strong> {food.category},{" "}
                                  <strong>Publication Date:</strong> {food.Public}
                                </div>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDeleteFood(food.name)}
                                >
                                  Delete
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {option === "update" && (
                        <div>
                          <h2>Update Food</h2>
                          <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Search by title or author"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button
                            className="btn btn-outline-primary mb-3"
                            onClick={handleSearch}
                          >
                            Search
                          </button>
                          <ul className="list-group">
                            {foundFoods.map((food, index) => (
                              <li key={index} className="list-group-item">
                                <div>
                                  <strong>Title:</strong> {food.name}, 
                                  <strong>Genre:</strong> {food.Genre},{" "}
                                  <strong>Publication Date:</strong> {food.Public}
                                </div>
                                <div className="mb-3">
                                  <label htmlFor={`update-image-${index}`} className="form-label">
                                    New Image Link
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`update-image-${index}`}
                                    placeholder="New Image Link"
                                    value={updateData.newData.img}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          Img: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor={`update-title-${index}`} className="form-label">
                                    New Title
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`update-title-${index}`}
                                    placeholder="New Title"
                                    value={updateData.newData.name}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          name: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor={`update-genre-${index}`} className="form-label">
                                    New Genre
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`update-genre-${index}`}
                                    placeholder="New Genre"
                                    value={updateData.newData.category}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          category: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor={`update-public-${index}`} className="form-label">
                                    New Publication Date
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`update-public-${index}`}
                                    placeholder="New Publication Date"
                                    value={updateData.newData.Public}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          Public: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                </div>
                                <button
                                  className="btn btn-success btn-sm"
                                  onClick={() => handleUpdateBook(food)}
                                >
                                  Update
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

              </div>
              <div className="border border-5 mt-3 p-4 bg-dark">
                <div className="card mt-4">
                  <div className="card-body bg-warning">
                    <h2>Foods Available</h2>
                    <div className="row">
                      {addedFoods.map((food, index) => (
                        <div key={index} className="col-md-3 mb-4">
                          <div className="card food-card">
                            <img
                              src={food.img}
                              alt={`Cover of ${food.name}`}
                              className="card-img-top"
                              style={{ height: '250px' }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{food.name}</h5>
                              <p className="card-text">
                                <strong>Author:</strong> {food.Author}
                              </p>
                              <p className="card-text">
                                <strong>Genre:</strong> {food.category}
                              </p>
                              <p className="card-text">
                                <strong>Publication Date:</strong> {food.Public}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Admin;