import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Img from '../Assets/cards/reciepefinder.jpg'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';


function App() {
  const [recipeData, setRecipeData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [ingredientImages, setIngredientImages] = useState({});
  // const [showMore, setShowMore] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const fetchIngredientImages = async (ingredients) => {
    const imagePromises = ingredients.map(async (ingredient) => {
      try {
        const response = await axios.get(`https://www.themealdb.com/images/ingredients/${ingredient}.png`, {
          responseType: 'arraybuffer',
        });

        if (response.status === 200) {
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const url = URL.createObjectURL(blob);
          setIngredientImages((prevImages) => ({ ...prevImages, [ingredient]: url }));
        }
      } catch (error) {
        console.error('Error fetching ingredient image:', error);
      }
    });

    await Promise.all(imagePromises);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );

      if (response.data.meals) {
        setRecipeData(response.data.meals[0]);

        const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
          .map((index) => response.data.meals[0][`strIngredient${index}`])
          .filter(Boolean);

        fetchIngredientImages(ingredients);
      } else {
        setRecipeData(null);
      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
  // const handleViewMore = () => {
  //   setShowMore(!showMore); 
  // };


  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
    <Navbar/>
    <div className="container mt-5" >
      <h1 className="text-center text-white">Recipe Finder</h1>
      <div className="row justify-content-center mt-3">
        <div className="col-sm-8">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a recipe"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>
      {recipeData ? (
        <div className="row justify-content-center mt-4 mb-4">
          <div className="col-sm-8 col-md-4">
            <div className="card">
              <img src={recipeData.strMealThumb} className="card-img-top" alt={recipeData.strMeal} style={{maxHeight:"300px"}} />
              <div className="card-body">
                <h2 className="card-title text-center">{recipeData.strMeal}</h2>
                <p className="card-text text-center">Category: {recipeData.strCategory}</p>
                <p className="card-text text-center">Area: {recipeData.strArea}</p>
                <Modal isOpen={modal} toggle={toggleModal} size="lg">
                 <ModalHeader toggle={toggleModal}>Recipe Details</ModalHeader>
                 <ModalBody>{ toggleModal? (
                  <>
                <p className="card-text">Instructions: {recipeData.strInstructions}</p>
                <a href={recipeData.strYoutube} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                <h3 className="mt-4">Ingredients</h3>
                <div className="row">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                    const ingredient = recipeData[`strIngredient${index}`];
                    const measure = recipeData[`strMeasure${index}`];
                    if (ingredient) {
                      return (
                        <div key={index} className="col-md-4 mb-3">
                          <div className="card">
                            {ingredientImages[ingredient] && (
                              <img
                                src={ingredientImages[ingredient]}
                                className="card-img-top"
                                alt={ingredient}
                              />
                            )}
                            <div className="card-body">
                              <h5 className="card-title">{ingredient}</h5>
                              <p className="card-text">{measure}</p>
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                  {/* return null; */}
                </div>
                </>
                 ) : null}
                  </ModalBody>
                 </Modal>
                 </div>
                 <div className="d-flex justify-content-center mb-3">
  <button className="btn btn-primary mt-2 w-25" onClick={toggleModal}>
   View Info
  </button>
</div>

            </div>
          </div>
        </div>
      ) : (
        <p className="text-center vh-100 text-white mt-4">
          {searchQuery ? 'No matching recipes found.' : 'Enter a search query to find a recipe.'}
        </p>
      )}
    </div>
    <Footer/>
    </div>
  );
}

export default App;
