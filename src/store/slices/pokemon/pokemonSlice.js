import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice   = createSlice({
    name:'pokemon',
    initialState:{
        page:0,
        pokemons:[],
        isLoading:false
    },

    reducers:{
        startLoadingPokemons:(state)=>{
            state.isLoading=true;
        },
        //Recibe un estado y una acción
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            //Regresa un estado...
            state.pokemons=action.payload.pokemons;
        }
    }
});
// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;