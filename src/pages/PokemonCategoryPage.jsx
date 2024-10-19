import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonByType, setCurrentPage } from '../features/pokemon/pokemonSlice';
import PokemonList from '../components/PokemonList';
import { useParams } from 'react-router-dom';

const PokemonCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const pokemonByType = useSelector((state) => state.pokemon.pokemonByType[category] || []);
  const status = useSelector((state) => state.pokemon.status);
  const error = useSelector((state) => state.pokemon.error);
  const currentPage = useSelector((state) => state.pokemon.currentPage);
  const totalPages = useSelector((state) => state.pokemon.totalPages);

  useEffect(() => {
    dispatch(fetchPokemonByType({ type: category, page: currentPage, limit: 20 }));
  }, [category, currentPage, dispatch]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ marginTop: '100px', textAlign: 'center', color: '#4CAF50' }}>Catégorie : {category}</h2>

      {/* Afficher les Pokémon */}
      {status === 'loading' && (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#FFA500' }}>Chargement des Pokémon...</p>
      )}
      {status === 'succeeded' && <PokemonList pokemon={pokemonByType} />}
      {status === 'failed' && (
        <p style={{ textAlign: 'center', fontSize: '18px', color: 'red' }}>Erreur lors du chargement : {error}</p>
      )}

      {/* Pagination */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1} 
          style={{
            marginRight: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1,
            transition: 'background-color 0.3s',
          }}
        >
          Précédent
        </button>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages} 
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1,
            transition: 'background-color 0.3s',
          }}
        >
          Suivant
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Page {currentPage} sur {totalPages}</p>
    </div>
  );
};

export default PokemonCategoryPage;
