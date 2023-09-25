import { configureStore } from '@reduxjs/toolkit';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';
import { todosApi } from './apis';

export const store = configureStore({
  reducer: {      
      //pokemons: pokemonSlice.reducer,   
      [todosApi.reducerPath]: todosApi.reducer,   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat( todosApi.middleware )
})