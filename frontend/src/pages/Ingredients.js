import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function IngredientPage() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/list.php?i=list'
        );
        if (response.data.meals) {
          setIngredients(response.data.meals);
        }
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };

    fetchIngredients();
  }, []);

  const handleIngredientSelect = (ingredient) => {
    setSelectedIngredient(ingredient);
    navigate(`/recipes/${ingredient}`);
  };

  // Filter ingredients based on the search query
  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Ingredients List</h1>

      {/* Add a search input field */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search for ingredients"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="row mt-3">
        {filteredIngredients.map((ingredient) => (
          <div key={ingredient.strIngredient} className="col-md-4 mb-4">
            <Link to={`/recipes/${ingredient.strIngredient}`} className="card">
              <img
                src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
                className="card-img-top"
                alt={ingredient.strIngredient}
              />
              <div className="card-body">
                <h5 className="card-title">{ingredient.strIngredient}</h5>
                {ingredient.strDescription && (
                  <p className="card-text">{ingredient.strDescription}</p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientPage;
