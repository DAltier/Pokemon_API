import React, { useState } from 'react';
import { Button, Poke } from './Style.js';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const onClick = (e) => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
    .then(response => {
      return response.json();
    })
    .then(response => {
      setPokemon(response.results);
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <Button onClick = { onClick }>Fetch Pokemon</Button>
      {pokemon.map((poke, i) => (
        <Poke key = { i }>{ poke.name }</Poke>
      ))}
    </div>
  );
}

export default Pokemon;