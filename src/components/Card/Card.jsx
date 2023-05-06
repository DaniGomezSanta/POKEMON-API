import React from "react";
import style from './Card.module.css'

export default function Card({name,img,types,id,attack,defense,hp, speed, weight}) {


    return(
        <div className={style.card_container} >
          <div className={style.card_pokemon}>
            <div className={style.background}>
             <img src={img} alt= 'image not found' className={style.image}/>
            </div>


         <div className={style.content}>
              <h1>{id}</h1>
            <div className={style.name}>
              <h1>{name}</h1>
            </div>
            <div className={style.type}>
               {
                 types ? types.map( el => {
                   return(
                       <p>{el.name}</p>
                       )   
                     }
                     ) :
                     <span>Types not found</span>
                }
            </div>

            <div className={style.stats}>
              <p>Attack: {attack}</p>
              <p>Defense:{defense}</p>
              <p>Live: {hp}</p>
              <p>Speed: {speed}</p>
              <p>Weight: {weight}</p>
            </div>

            <h1 className={style.logo}>Pokemon Cards</h1>

           </div>
          </div>
        </div>
    )
}; 