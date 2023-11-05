import React, { useState, useEffect } from "react";
import Axios from "axios";
import CustomNavbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Card, CardImg, CardTitle, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';

const Books = () => {
    // Inside your Books component
    const [addedFoods, setAddedFoods] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [updateData, setUpdateData] = useState({ name: "", newData: { Author: "" } });

    const fetchAddedfoods = async () => {
        try {
            // Fetch the list of added foods from the backend using Axios
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
        // Fetch the list of added foods when the component mounts
        fetchAddedfoods();
    }, []);

    const handleBack = () => {
        setShowResults(false);
    };

    const openModal = (food) => {
        setSelectedFood(food);
    };

    const closeModal = () => {
        setSelectedFood(null);
    };

    const handleDelete = async (food) => {
        try {
            // Send a request to delete the food item
            const response = await Axios.post("http://localhost:3000/api2/food/del", { Name: food.Name });

            if (response.status === 200) {
                // Update the list of foods after successful deletion
                fetchAddedfoods();
            }
        } catch (error) {
            // Handle errors
            console.error("Error deleting food:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            console.log("updateData:", updateData);

            const response = await Axios.put("http://localhost:3000/api2/food/update", updateData);

            if (response.status === 200) {
                fetchAddedfoods(); // Refresh the list of foods after a successful update
                closeModal(); // Close the modal after updating
            }
        } catch (error) {
            console.error("Error updating food:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
            }
        }
    };



    return (
        <>
            <CustomNavbar />
            <div className="container mt-5 mb-4">
                <div className="border border-5 p-4 bg-warning-subtle">
                    <div className="mb-4 text-center border border-5 border-black">
                        <h1>Foodie Article</h1>
                        <h6><Link to="/article">Add Recipe</Link></h6>
                    </div>
                    <div className="border border-4 p-3 bg-primary-subtle">
                        <h2 className="mb-4 text-center">Find Food recipes</h2>
                    </div>
                    <div className="border border-5 mt-3 p-5 bg-primary-subtle">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                {showResults && (
                                    <div className="d-flex justify-content-center align-items-center mt-3 mb-4">
                                        <h6 className="mb-0 me-3 border border-3 border-info text-info p-2 rounded bg-dark">Results</h6>
                                        <Button className="btn btn-outline-secondary ml-3 text-info border border-3 border-info bg-black" onClick={handleBack}>
                                            Back
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            {addedFoods.map((food) => (
                                <div key={food._id} className="col-md-3 mb-4">
                                    <Card>
                                        <CardImg src={food.Image} alt={`Cover of ${food.Name}`} style={{ height: "250px" }} />
                                        <CardTitle>{food.Name}</CardTitle>
                                        <Button className="btn btn-primary" onClick={() => openModal(food)}>View Details</Button>
                                        <Button className="btn btn-danger" onClick={() => handleDelete(food)}>Delete</Button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Modal */}
            <Modal isOpen={selectedFood !== null} toggle={closeModal}>
                <ModalHeader toggle={closeModal}>Food Details</ModalHeader>
                <ModalBody>
                    {selectedFood && (
                        <>
                            <p>Ingredients: {selectedFood.Author}</p>
                            <p>Recipe: {selectedFood.Public}</p>
                            <div>
                                <input
                                    type="text"
                                    placeholder="New Ingredients"
                                    value={updateData.newData.Author}
                                    onChange={(e) => setUpdateData({ ...updateData, newData: { Author: e.target.value }, name: selectedFood.Name })}
                                />
                                <Button onClick={() => handleUpdate(selectedFood.Name)}>Update Ingredients</Button>
                            </div>
                        </>
                    )}

                </ModalBody>
            </Modal>
        </>
    );
};

export default Books;
