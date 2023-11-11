import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../css/Ingredients.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

import backgroundImage from '../Assets/cards/bg.jpg'; 

function IngredientPage() {
  const [ingredients, setIngredients] = useState([]);
  const [displayedIngredients, setDisplayedIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const limit = 12;

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
        );
        if (response.data.meals) {
          setIngredients(response.data.meals);
          setDisplayedIngredients(response.data.meals.slice(0, limit));
        }
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchIngredients();
  }, []);

  useEffect(() => {
    const filtered = searchQuery
      ? ingredients.filter((ingredient) =>
          ingredient.strIngredient.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : ingredients.slice(0, limit);
    setDisplayedIngredients(filtered);
  }, [searchQuery, ingredients]);

  const handleIngredientSelect = (ingredient) => {
    const isIngredientSelected = selectedIngredients.includes(ingredient);
    setSelectedIngredients(isIngredientSelected
      ? selectedIngredients.filter((item) => item !== ingredient)
      : [...selectedIngredients, ingredient]);
  };

  return (
    <>
    <div
      style={{
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        maxWidth: '100%',
        minHeight: '100vh', 
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
      }}
    >
      <Navbar />
      <div className='container mt-5'>
        <h1 className='text-center text-dark bg-danger'>Ingredients List</h1>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Search for ingredients'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='mt-4'>
          <button
            className='btn btn-primary'
            onClick={() => navigate(`/recipes/${selectedIngredients.join(',')}`)}
          >
            Find Recipes
          </button>
        </div>
        <div className='row mt-3'>
          {displayedIngredients.map((ingredient) => (
            <div key={ingredient.strIngredient} className='col-md-3 mb-4'>
              <div
                className={`card ingredient-card ${
                  selectedIngredients.includes(ingredient.strIngredient) ? 'selected' : ''
                }`}
                onClick={() => handleIngredientSelect(ingredient.strIngredient)}
              >
                <img
                  src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                  className='card-img-top ingredient-image'
                  alt={ingredient.strIngredient} style={{maxHeight:'250px'}}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{ingredient.strIngredient}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default IngredientPage;
