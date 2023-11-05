import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../components/navbar"
import Footer from "../components/Footer";

import '../index.css'


function Admin() {
  const [option, setOption] = useState("add");
  const [searchTerm, setSearchTerm] = useState("");
  const [addedFoods, setAddedFoods] = useState([]);
  const [foundFoods, setFoundFoods] = useState([]);
  const [newFood, setnewFood] = useState({
    Image: "",
    Name: "",
    Author: "",
    Category: "",
    Public: "",
  });
  const [updateData, setUpdateData] = useState({
    name: "",
    newData: {
      Image: "",
      Name: "",
      Author: "",
      Category: "",
      Public: "",
    },
  });

  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    // Fetch added books from the backend when the component mounts
    fetchAddedBooks();
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
              food.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              food.Author.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFoundFoods(filtered);
        }
      } catch (error) {
        console.error("Error searching for books:", error);
      }
    }
  };

  const handleAddFood = async (event) => {
    event.preventDefault();

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
        setnewFood({
          Image: "",
          Name: "",
          Author: "",
          Category: "",
          Public: "",
        });
        alert("Food added")
      }
    } catch (error) {
      // Handle errors
      console.error("Error adding food:", error);
    }
  };


  const fetchAddedBooks = async () => {
    try {
      // Fetch the list of added books from the backend using Axios
      const response = await Axios.get("http://localhost:3000/api2/food/dis");
      if (response.status === 200) {
        const data = response.data.data; // Assuming your backend returns data in { data: [...] } format
        setAddedFoods(data);
      }
    } catch (error) {
      // Handle errors
      console.error("Error fetching books:", error);
    }
  };

  const handleDeleteBook = async (bookName) => {
    try {
      // Send a POST request to the backend to delete the food using Axios
      const response = await Axios.post("http://localhost:3000/api2/food/del", { Name: bookName });

      // Check the response status
      if (response.status === 200) {
        // Remove the food from the local state
        const updatedFood = addedFoods.filter((b) => b.Name !== bookName);
        setAddedFoods(updatedFood);
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
        name: food.Name, // Send the food name as an identifier
        newData: updateData.newData, // Send the updated data
      });

      if (response.status === 200) {
        // Update the food in the local state
        alert("Food updated")
        const updatedFood = addedFoods.map((b) => {
          if (b.Name === food.Name) {
            return { ...b, ...updateData.newData };
          }
          return b;
        });

        setAddedFoods(updatedFood);
        setFoundFoods([]);
        setUpdateData({
          name: "",
          newData: {
            Image: "",
            Name: "",
            Author: "",
            Category: "",
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
            <h1 className="mb-4 display-8 fw-bold text-primary">Foodie Blog: Add, Delete, or Update Reciepes</h1>
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
                        Add Food
                      </button>
                      <button
                        className={`btn ${option === "delete" ? "btn-success" : "btn-danger"}`}
                        onClick={() => handleOptionChange("delete")}
                      >
                        Delete Food
                      </button>
                      <button
                        className={`btn ${option === "update" ? "btn-success" : "btn-danger"}`}
                        onClick={() => handleOptionChange("update")}
                      >
                        Update Food
                      </button>
                    </div>
                    <div className="food-card">
                      <img
                        src="https://i0.wp.com/www.thefoodblog.net/wp-content/uploads/2021/02/Story-Logo-300x400-1.jpg?fit=300%2C400&ssl=1"
                        alt="Food Options"
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
                      {option === "add" && "Add Food"}
                      {option === "delete" && "Delete Food"}
                      {option === "update" && "Update Food"}
                    </div>
                    <div className="card-body bg-dark text-white">
                      {option === "add" && (
                        <div>
                          <h2>Add Food</h2>
                          <form onSubmit={handleAddFood}>
                            <div className="mb-3">
                              <label htmlFor="imageLink" className="form-label">
                                Image Link
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="imageLink"
                                required
                                value={newFood.Image}
                                name="Image"
                                onChange={(e) =>
                                  setnewFood({ ...newFood, Image: e.target.value })
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
                                value={newFood.Name}
                                name="Name"
                                onChange={(e) =>
                                  setnewFood({ ...newFood, Name: e.target.value })
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="author" className="form-label">
                                Author
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="author"
                                required
                                value={newFood.Author}
                                name="Author"
                                onChange={(e) =>
                                  setnewFood({ ...newFood, Author: e.target.value })
                                }
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="genre" className="form-label">
                                Category
                              </label>
                              <select
                                className="form-control"
                                id="genre"
                                required
                                value={newFood.Category}
                                name="Category"
                                onChange={(e) =>
                                  setnewFood({ ...newFood, Category: e.target.value })
                                }
                              >
                                <option value="">Select Category</option>
                                <option value="Salty">Salty</option>
                                <option value="Sweet">Sweet</option>
                                <option value="Spicy">Spicy</option>
                              
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
                                  setnewFood({ ...newFood, Public: e.target.value })
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
                                  <strong>Title:</strong> {food.Name}, <strong>Author:</strong>{" "}
                                  {food.Author}, <strong>Category:</strong> {food.Category},{" "}
                                  <strong>Publication Date:</strong> {food.Public}
                                </div>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDeleteBook(food.Name)}
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
                                  <strong>Title:</strong> {food.Name}, <strong>Author:</strong>{" "}
                                  {food.Author}, <strong>Category:</strong> {food.Category},{" "}
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
                                    value={updateData.newData.Image}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          Image: e.target.value,
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
                                    value={updateData.newData.Name}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          Name: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor={`update-author-${index}`} className="form-label">
                                    New Author
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`update-author-${index}`}
                                    placeholder="New Author"
                                    value={updateData.newData.Author}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          Author: e.target.value,
                                        },
                                      })
                                    }
                                  />
                                </div>
                                <div className="mb-3">
                                  <label htmlFor={`update-genre-${index}`} className="form-label">
                                    New Category
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id={`update-genre-${index}`}
                                    placeholder="New Category"
                                    value={updateData.newData.Category}
                                    onChange={(e) =>
                                      setUpdateData({
                                        ...updateData,
                                        newData: {
                                          ...updateData.newData,
                                          Category: e.target.value,
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
                              src={food.Image}
                              alt={`Cover of ${food.Name}`}
                              className="card-img-top"
                              style={{ height: '250px' }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{food.Name}</h5>
                              <p className="card-text">
                                <strong>Author:</strong> {food.Author}
                              </p>
                              <p className="card-text">
                                <strong>Category:</strong> {food.Category}
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