import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPokemonByTypeAPI } from './pokemonAPI';

export const fetchPokemonByType = createAsyncThunk(
  'pokemon/fetchPokemonByType',
  async ({ type, page, limit }) => {
    const response = await fetchPokemonByTypeAPI(type, page, limit);
    return response;
  }
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonByType: {},
    status: 'idle', // idle | loading | succeeded | failed
    currentPage: 1, // Page actuelle
    totalPages: 0, // Total des pages
    error: null, // Pour gérer les erreurs
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonByType.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByType.fulfilled, (state, action) => {
        const { type, pokemons, total } = action.payload;
        state.status = 'succeeded';
        state.pokemonByType[type] = pokemons;
        state.totalPages = Math.ceil(total / 20); // 20 est le nombre d'éléments par page
      })
      .addCase(fetchPokemonByType.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message; // Enregistrer l'erreur
      });
  },
});

export const { setCurrentPage } = pokemonSlice.actions;

export default pokemonSlice.reducer;
