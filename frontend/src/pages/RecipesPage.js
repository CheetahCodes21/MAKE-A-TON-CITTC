import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function RecipesPage() {
    const { ingredient } = useParams();
    const [ingredientRecipes, setIngredientRecipes] = useState([]);
  
    useEffect(() => {
      const fetchRecipesByIngredient = async () => {
        try {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
  
          if (response.data.meals) {
            setIngredientRecipes(response.data.meals);
          } else {
            setIngredientRecipes([]);
          }
        } catch (error) {
          console.error('Error fetching recipes by ingredient:', error);
        }
      };
  
      fetchRecipesByIngredient();
    }, [ingredient]);
  
    return (
      <div className="container mt-5">
        <h1 className="text-center">Recipes with {ingredient}</h1>
        <div className="row">
          {ingredientRecipes.map((recipe) => (
            <div key={recipe.idMeal} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={recipe.strMealThumb}
                  className="card-img-top"
                  alt={recipe.strMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.strMeal}</h5>
                  <Link to={`/recipes/${recipe.idMeal}/${ingredient}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default RecipesPage;
  