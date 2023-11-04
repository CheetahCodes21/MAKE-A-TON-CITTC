import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import IngredientPage from './pages/Ingredients';
import RecipesPage from './pages/RecipesPage';
import Map from './pages/Map'
import RecipeDetails from './pages/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './pages/Login';
import SignIn from './pages/Signup';
import AdminPage from './pages/Admin';
import Article from './pages/Article';
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
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/article" element={<Article/>}/>
          {/* <Route path="/restaurant" element={<RecipeDetails/>} /> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignIn/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
