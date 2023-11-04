import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import IngredientPage from './pages/Ingredients';
import RecipesPage from './pages/RecipesPage';
import RecipeDetails from './pages/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe" element={<Recipe/>} />
          <Route path="/ingred" element={<IngredientPage/>} />
          <Route path="/recipes/:ingredient" element={<RecipesPage/>} />
          <Route path="/recipes/:idMeal/:searchQuery" element={<RecipeDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
