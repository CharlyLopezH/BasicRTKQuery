import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import PokemonApp from './PokemonApp'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PokemonApp/> */}
    <TodoApp/>
    </Provider>
  </React.StrictMode>,
)
