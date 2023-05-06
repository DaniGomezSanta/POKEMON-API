import React from 'react';
import style from "./paginado.module.css"


export default function Paginado({pokemonPerPage, allPokemons, paginado}){
    const pageNumber= []

    for (let i = 1; i <= Math.ceil(allPokemons/pokemonPerPage); i++) {
        pageNumber.push(i)
        
    }
  return (
    <nav className={style.paginado}>
        <ul >
            {
            pageNumber&&
            pageNumber.map(number=>(
                <li key={number}>
                    <button onClick={()=>paginado(number)}>{number}</button>
                </li>
                ))
            }
        </ul>
    </nav>
  )
}