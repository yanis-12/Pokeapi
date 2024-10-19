// pokemonAPI.js
import axios from 'axios';

export const fetchPokemonByTypeAPI = async (type, page = 1, limit = 20) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  const allPokemon = response.data.pokemon.map(p => ({
    id: p.pokemon.id,
    name: p.pokemon.name,
  }));
  
  const offset = (page - 1) * limit; 
  const paginatedPokemon = allPokemon.slice(offset, offset + limit);
  
  return { type, pokemons: paginatedPokemon, total: allPokemon.length }; // Envoie le total
};
