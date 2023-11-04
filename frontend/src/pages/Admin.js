import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const Books = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [addedFoods, setAddedFoods] = useState([]);
    const [filteredFoods, setFilteredFoods] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedFood, setselectedFood] = useState("None");
    const [filteredSelected, setFilteredSelectedFood] = useState([]);

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

        if (selectedFood === "None") {
            setFilteredSelectedFood(addedFoods);
        } else {
            setFilteredSelectedFood(addedFoods.filter((Food) => Food.Genre === selectedFood));
        }
    }, [selectedFood, addedFoods]); // Include addedFoods in the dependency array

    const handleSearch = () => {
        if (searchTerm.trim() === "") {
            setShowResults(false);
        } else {
            const filtered = addedFoods.filter(
                (Food) =>
                    Food.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredFoods(filtered);
            setShowResults(true);
        }
    };

    const handleBack = () => {
        setSearchTerm("");
        setselectedFood("None");
        setShowResults(false);
    };


    return (
            <>
            <Navbar/>
        <div className="container mt-5 mb-4">
            <div className="border border-5 p-4 bg-warning-subtle">
                <div className="mb-4 text-center border border-5 border-black">
                    <h1>Food Articles</h1>
                    <h5><Link to="/article">Add Articles</Link></h5>
                </div>
                <div className="border border-4 p-3 bg-primary-subtle">
                    <h2 className="mb-4 text-center">Find Foods</h2>
                    <div className="row mb-3 justify-content-center">
                        <div className="col-md-6  d-flex justify-content-center align-items-center ">
                            <div className="input-group">
                                <input
                                    id="Search-bar"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by name of food"
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
                                    Filter by Category:
                                </label>
                                <select
                                    id="genreFilter"
                                    className="form-select"
                                    value={selectedFood}
                                    onChange={(e) => setselectedFood(e.target.value)}
                                >
                                    <option value="None">Spicy</option>
                                    <option value="salty">Salty</option>
                                    <option value="Sweet">Sweet</option>
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
                        {(showResults ? filteredFoods : filteredSelected).map((Food) => (
                            <div key={Food._id} className="col-md-3 mb-4">
                                <div className="card Food-card">
                                    <img src={Food.img} alt={`Cover of ${Food.name}`} className="card-img-top"  style={{height:"250px"}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{Food.name}</h5>
                                        <p className="card-text">Desc: {Food.desc}</p>
                                        <p className="card-text">category: {Food.category}</p>
                                        
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