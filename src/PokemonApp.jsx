import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp=()=>{

    const dispatch = useDispatch();

    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );

    useEffect(() => {
        dispatch( getPokemons() );    
      }, [])

    return (
        <>
        <div className="container">
        <h1>Pokemon App</h1>
        <hr/>
        <span>{ isLoading ? 'Cargando...':''} </span>
        <ul>
          {
            pokemons.map( (i) => (
              <li key={ i.name }>{ i.name}</li>
            ))
          }
        </ul>
          <hr/>
          <button className='btn btn-primary'
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons(page) ) }
        >
          Next
        </button>

        </div>
        </>
    );
}
export default PokemonApp