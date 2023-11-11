import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

function RecipesPage() {
  const { ingredient } = useParams();
  const ingredients = ingredient.split(','); // Split ingredients into an array
  const [ingredientRecipes, setIngredientRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesByIngredient = async () => {
      try {
        const recipesPromises = ingredients.map(async (ingredient) => {
          const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          );
          return response.data.meals || [];
        });

        const recipes = await Promise.all(recipesPromises);

        // Find the common recipes among all ingredients
        const commonRecipes = recipes.reduce((common, recipes) => {
          return common.filter((recipe) => recipes.some((r) => r.idMeal === recipe.idMeal));
        }, recipes[0]);

        setIngredientRecipes(commonRecipes);
      } catch (error) {
        console.error('Error fetching recipes by ingredient:', error);
      }
    };

    fetchRecipesByIngredient();
  }, [ingredients]);

  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <h1 className="text-center">Recipes with {ingredients.join(', ')}</h1>
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
    <Footer/>
    </>
  );
}

export default RecipesPage;
