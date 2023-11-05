import React, { useState, useEffect } from "react";
import Axios from "axios";
import CustomNavbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Books = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [addedFoods, setAddedFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("None");
    const [filteredCategoryFood, setFilteredCategoryFood] = useState([]);

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

    useEffect(() => {
        // Fetch added books from the backend when the component mounts
        fetchAddedBooks();
    }, []);

    useEffect(() => {
        // Filter books after fetching data
        setFilteredFoods(addedFoods);

        if (selectedCategory === "None") {
            setFilteredCategoryFood(addedFoods);
        } else {
            setFilteredCategoryFood(addedFoods.filter((food) => food.category === selectedCategory));
        }
    }, [selectedCategory, addedFoods]); // Include addedFoods in the dependency array

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setShowResults(false);
        } else {
            const filtered = addedFoods.filter(
                (food) =>
                    food.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    food.Author.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredFoods(filtered);
            setShowResults(true);
        }
    };

    const handleBack = () => {
        setSearchTerm("");
        setSelectedCategory("None");
        setShowResults(false);
    };


    return (
            <>
            <CustomNavbar/>
        <div className="container mt-5 mb-4">
            <div className="border border-5 p-4 bg-warning-subtle">
                <div className="mb-4 text-center border border-5 border-black">
                    <h1>Foodie Article</h1>
                    <h6><Link to="/article">Add Reciepe</Link></h6>
                </div>
                <div className="border border-4 p-3 bg-primary-subtle">
                    <h2 className="mb-4 text-center">Find Food reciepes</h2>
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6  d-flex justify-content-center align-items-center ">
                            <div className="input-group">
                                <input
                                    id="Search-bar"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <button className="btn btn-outline-secondary bg-dark text-info" type="button" onClick={handleSearch}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="genreFilter" className="form-label">
                                    Filter by category:
                                </label>
                                <select
                                    id="genreFilter"
                                    className="form-select"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                >
                                    <option value="None">None</option>
                                    <option value="Salty">Salty</option>
                                    <option value="Sweet">Sweet</option>
                                    <option value="Sugar">Sugar</option>
                                    
                                    {/* Add more genre options here on need*/}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-5 mt-3 p-5 bg-primary-subtle">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            {showResults && (
                                <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
                                    <h6 className="mb-0 me-3 border border-3 border-info text-info p-2 rounded bg-dark">Results</h6>
                                    <button className="btn btn-outline-secondary ml-3 text-info border border-3 border-info bg-black" onClick={handleBack}>
                                        Back
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="row">
                        {(showResults ? filteredFoods : filteredCategoryFood).map((food) => (
                            <div key={food._id} className="col-md-3 mb-4">
                                <div className="card food-card">
                                    <img src={food.Image} alt={`Cover of ${food.Name}`} className="card-img-top"  style={{height:"250px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{food.Name}</h5>
                                        <p className="card-text">Author: {food.Author}</p>
                                        <p className="card-text">category: {food.category}</p>
                                        <p className="card-text">Publication Date: {food.Public}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default Books;