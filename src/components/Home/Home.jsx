import React from 'react';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons, deletePokemon } from '../../actions';
import {Link} from 'react-router-dom';
import Filter from '../Filters/Filters';
import Cards from '../CardsContainer/Cards';
import Paginado from '.././Paginado/Paginado.jsx'; 
import SearchBar from '../SearchBar/SearchBar';
import style from './Home.module.css'
import logoPokemon from '../Images/logoPokemon.webp'



export default function Home () {
     const dispatch = useDispatch()
     const allPokemons = useSelector((state) => state.allPokemons);

     const [ order, setOrder] = useState('')

     const [currentPage, setCurrentPage] = useState(1);
     const [pokemonPerPage, setPokemonPerPage] = useState(12);
     const indexOfLastPokemon = currentPage * pokemonPerPage //12
     const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage //0
     const currentPokemons = allPokemons.slice(indexOfFirstPokemon,indexOfLastPokemon)

     const paginado = (pagNumbers) => {
        setCurrentPage(pagNumbers)
     }

   
     useEffect(()=> {
        dispatch(getPokemons)
     },[dispatch])

     function handleOnClick (e) {
        e.preventDefault();
        dispatch(getPokemons());
     };

   
     return (
        <div className={style.home}>
            <Link to= '/pokemon'>Create Pokemon</Link>
            <div>
            <img src={logoPokemon} alt='image not Found' width='300px'/>
            </div>
            <button onClick={e=> handleOnClick(e)}>Reload Pokemons</button>

            <SearchBar/>

            <Filter
            setCurrentPage={setCurrentPage}
            setOrder={setOrder}/>   
             <Paginado
                pokemonPerPage={pokemonPerPage}
                allPokemons={allPokemons.length}
                paginado={paginado}/>
             
            <Cards
            currentPokemons={currentPokemons}
            />    
             
        </div>
     )
}