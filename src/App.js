import React from 'react';
import './App.css';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <h1>Click the button for a list of all Pokemons</h1>
      <Pokemon />
    </div>
  );
}

export default App;
