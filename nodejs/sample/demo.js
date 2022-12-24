import fetch from 'node-fetch';

async function getPokemon() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  console.log(data);
}

getPokemon();
