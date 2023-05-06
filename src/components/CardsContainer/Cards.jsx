import Card from "../Card/Card";
import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import style from './Cards.module.css';
import poketriste from '../Images/triste.gif';
import pikaLoading from '../Images/loading.webp'


export default function Cards({currentPokemons}) {


    const pokemon= useSelector( ((state)=>state.pokemons))
    
    return (
      <>
      {
        pokemon.length>0 ?
      
          <div className={style.container}>     
              {
              currentPokemons.length > 0 ? currentPokemons.map((elemento)=>
                <Link to={`/detail/${elemento.id}`}>
  
                  <Card
                  key={elemento.id}
                  name={elemento.name}
                  img={elemento.img? elemento.img : elemento.image}
                  types={elemento.types}
                  attack= {elemento.attack} 
                  defense= {elemento.defense}
                  hp = {elemento.hp}
                  speed = {elemento.speed}
                  weight = {elemento.weight}
                  />
                 </Link>
                  
                  )
                  :
                  <div>
                    <h2>POKEMON NOT FOUND</h2>
                    <img src={poketriste} alt='image not found'/>
                  </div>
                 
              }
          </div>
  
          :
          <div>
            <h1>Loading...</h1>
            <img src={pikaLoading} alt='image not found'/>
          </div>
      }
      </>
    )
  }

