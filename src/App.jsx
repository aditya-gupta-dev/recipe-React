import React from 'react';
import Footer from './Footer';
import Title from './Title';
import './App.css';
import Recipe from './Recipe';

function App() {
  return (
    <>
        <div className="App">
      <Title />
      <form className="search-form">
        <input className="search-bar" type="text" placeholder="Enter your favourite dish, I'm sure we have it! :)"/> {/*passes the onChange event to updateSearch, it needs to be here so can retrieve input value (as opposed to button)*/}
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipe">
        <Recipe image='alt' calories={200} ingredients={[{text: "something"}]} title='title'/>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
