import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Title from './Title';
import './App.css';
import Recipe from './Recipe';

function App() {
    const APP_ID = 'd40c2f29';
    const APP_KEY = '4330d7b01907e83778c80814e2bd894c';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    const buttonOver = (e) => {
        e.target.innerHTML = "Go!";
    }
    const buttonOut = (e) => {
        e.target.innerHTML = "Search";
    }

    useEffect(() => {
        getRecipes();
    }, [query]);

    return (
        <>
            <div className="App">
                <Title />
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" placeholder="Enter your favourite dish, I'm sure we have it! :)" value={search} onChange={updateSearch} /> {/*passes the onChange event to updateSearch, it needs to be here so can retrieve input value (as opposed to button)*/}
                    <button className="search-button" type="submit" onMouseOver={buttonOver} onMouseOut={buttonOut}>Search</button>
                </form>
                <div className="recipe">
                    {recipes.map((recipe, index) => (
                        <Recipe
                            key={index} 
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                        />
                    ))};
            </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
