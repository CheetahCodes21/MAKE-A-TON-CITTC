import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Img from '../Assets/background/Food.jpg'

function RecipeDetails() {
  const { idMeal } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [ingredientImages, setIngredientImages] = useState({});

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        );

        if (response.data.meals) {
          setRecipeDetails(response.data.meals[0]);

          const ingredients = Array.from({ length: 20 }, (_, i) => i + 1)
            .map((index) => recipeDetails[`strIngredient${index}`])
            .filter(Boolean);

          fetchIngredientImages(ingredients);
        } else {
          setRecipeDetails(null);
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [idMeal, recipeDetails]);

  const fetchIngredientImages = async (ingredients) => {
    const imagePromises = ingredients.map(async (ingredient) => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/images/ingredients/${ingredient}.png`,
          {
            responseType: 'arraybuffer',
          }
        );

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

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundImage:`url(${Img})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', maxWidth: '100%' }}>
    <Navbar/>
    <div className="container mt-5">
      <h1 className="text-center text-white bg-black">{recipeDetails.strMeal}</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="card">
            <img
              src={recipeDetails.strMealThumb}
              className="card-img-top recipe-image"
              alt={recipeDetails.strMeal}
            />
            <div className="card-body">
              <h2 className="card-title">{recipeDetails.strMeal}</h2>
              <p className="card-text">
                <strong>Category:</strong> {recipeDetails.strCategory}
              </p>
              <p className="card-text">
                <strong>Area:</strong> {recipeDetails.strArea}
              </p>
              <p className="card-text">
                <strong>Instructions:</strong> {recipeDetails.strInstructions}
              </p>
              <a
                href={recipeDetails.strYoutube}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
              </a>
              <h3 className="mt-4">Ingredients</h3>
              <div className="row">
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = recipeDetails[`strIngredient${index}`];
                  const measure = recipeDetails[`strMeasure${index}`];
                  if (ingredient) {
                    return (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="card ingredient-card">
                          {ingredientImages[ingredient] && (
                            <img
                              src={ingredientImages[ingredient]}
                              className="card-img-top ingredient-image"
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
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default RecipeDetails;
