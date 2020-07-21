import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import Recipes from './Recipes';

const App = () => {

  const APP_ID = '83367b99'
  const APP_KEY = '7e819d939c1a270522d69980947ab418'

  const [recipes, Setrecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('potato')

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    Setrecipes(data.hits)
    console.log(data.hits)

  }

  const UpdateSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }
  return (
    <div className="App">
      <div className='heading'>Search Recipes</div>
      <form className='search-form' onSubmit={getSearch}>
        <input type='text' className='search-bar' value={search} onChange={UpdateSearch} />
        <button type="submit" className='search-button'>Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
