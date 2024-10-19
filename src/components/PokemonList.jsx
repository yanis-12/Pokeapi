import PropTypes from 'prop-types';

const PokemonList = ({ pokemon }) => {
  if (!pokemon || pokemon.length === 0) {
    return <p>Aucun Pokémon trouvé.</p>;
  }

  return (
    <ul>
      {pokemon.map((poke) => (
        <li key={poke.id}>{poke.name}</li>
      ))}
    </ul>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonList;
