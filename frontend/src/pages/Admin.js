import React, { useState, useEffect } from "react";
import Axios from "axios";
import CustomNavbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Img from '../Assets/background/Food.jpg'
import { Card, CardImg, CardTitle, Modal, ModalBody, ModalHeader, Button } from 'reactstrap';

const Books = () => {
    const [addedFoods, setAddedFoods] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [updateData, setUpdateData] = useState({ name: "", newData: { Author: "" } });
    const [searchQuery, setSearchQuery] = useState('');

    const fetchAddedfoods = async () => {
        try {
            const response = await Axios.get("http://foodie-lyart-omega.vercel.app/api2/food/dis");
            if (response.status === 200) {
                const data = response.data.data;

                // Filter the results based on the search query
                const filteredFoods = data.filter(food =>
                    food.Name.toLowerCase().includes(searchQuery.toLowerCase())
                );

                setAddedFoods(filteredFoods);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchAddedfoods();
    }, [searchQuery]);

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
            const response = await Axios.post("http://foodie-lyart-omega.vercel.app/api2/food/del", { Name: food.Name });

            if (response.status === 200) {
                fetchAddedfoods();
            }
        } catch (error) {
            console.error("Error deleting food:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            const response = await Axios.put("http://foodie-lyart-omega.vercel.app/api2/food/update", updateData);

            if (response.status === 200) {
                fetchAddedfoods();
                closeModal();
            }
        } catch (error) {
            console.error("Error updating food:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
            }
        }
    };

    return (
        <div style={{ backgroundImage:`url(${Img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
            <CustomNavbar />
            <div className="container mt-5 mb-4">
                <div className="border border-5 p-4 bg-warning-subtle">
                    <div className="mb-4 text-center border border-5 border-black">
                        <h1>Foodie Article</h1>
                        <h6><Link to="/article">Add Recipe</Link></h6>
                    </div>
                    <div className="border border-4 p-3 bg-primary-subtle text-center">
                        <h2 className="mb-4">Find Food recipes</h2>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-outline-secondary bg-primary text-white" style={{ borderRadius: '20%' }} type="button" onClick={() => fetchAddedfoods()}>
                                Search
                            </button>
                        </div>
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
                                        <CardTitle className="text-center">{food.Name}</CardTitle>
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

            <Modal isOpen={selectedFood !== null} toggle={closeModal} centered style={{minWidth:'60vw'}}>
                <ModalHeader toggle={closeModal} className="bg-primary text-white">Food Details</ModalHeader>
                <ModalBody>
                    {selectedFood && (
                        <>
                            <p className="mb-3"><span className="fs-2">Ingredients: </span>{selectedFood.Author}</p>
                            <p className="mb-3"><span className="fs-2">Recipe:</span> {selectedFood.Public}</p>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="New Ingredients"
                                    value={updateData.newData.Author}
                                    onChange={(e) => setUpdateData({ ...updateData, newData: { Author: e.target.value }, name: selectedFood.Name })}
                                />
                            </div>
                            <Button className="btn btn-primary" onClick={() => handleUpdate(selectedFood.Name)}>Update Ingredients</Button>
                        </>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Books;
