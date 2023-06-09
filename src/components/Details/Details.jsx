import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail} from "../../actions";
import { useEffect } from "react";
import bolaPoke from '../Images/giphy.gif';
import style from './Details.module.css'

export default function Detail(props){
    const dispatch = useDispatch();
    const myPokemon = useSelector((state)=> state.detail);

    useEffect(()=> {
        dispatch(getDetail(props.match.params.id))
        return()=> {
            dispatch(clearDetail())
        }
    },[dispatch])

    

    return (
      <div className={style.fondo}>
           <Link to={"/home"}>
              <button>Return</button>
          </Link>
          {
              myPokemon.length>0 ?
              <div className={style.todo}>
                  <div className={style.name_imagen}>
  
                  <h1>{myPokemon[0].name}</h1>
  
                  <div className={style.imagen}>
  
                  <img src={myPokemon[0].img}/>
                  </div>
  
                  </div>
             
             
              <div className={style.barra}>
  
             
             
              <div className={style.stats}>
                  <div className={style.bar}>
                      <div className={style.info}>
                          <span className={style.span_1}>Vida</span>
                      </div>
                      <div className={style.progress} ><span style={{width:myPokemon[0].hp > 100 ? '100%' : myPokemon[0].hp +'%'}} per={`${myPokemon[0].hp}`} className={style.hp}></span></div>  
                  </div>
  
                  <div className={style.bar}>
                      <div className={style.info}>
                          <span className={style.span_1}> Ataque</span>
                      </div>
                      <div className={style.progress} style={{animationDelay:'0.1s'}}><span style={{width:myPokemon[0].attack > 100 ? '100%' : myPokemon[0].attack +'%'}} per={`${myPokemon[0].attack}`} className={style.attack}></span></div>  
                  </div>
  
                  <div className={style.bar}>
                      <div className={style.info}>
                          <span className={style.span_1}> Defensa</span>
                      </div>
                      <div className={style.progress} style={{animationDelay:'0.2s'}}><span style={{width:myPokemon[0].defense > 100 ? '100%' : myPokemon[0].defense+'%'}} per={`${myPokemon[0].defense}`} className={style.defense}></span></div>  
                  </div>
  
                  <div className={style.bar}>
                      <div className={style.info}>
                          <span className={style.span_1}> Velocidad</span>
                      </div>
                      <div className={style.progress} style={{animationDelay:'0.3s'}}><span style={{width:myPokemon[0].speed > 100 ? '100%' : myPokemon[0].speed +'%'}} per={`${myPokemon[0].speed}`} className={style.speed}></span></div>  
                  </div>
              </div>
  
                  
                  <div  className={style.moreinfo}>
                          <div>
                              <h4 className={style.weight}>Peso</h4>
                              <div>
                                  <span className={style.pokweight}>{myPokemon[0].weight / 10}kg</span>
                              </div>
                          </div>
                          
                          <div className={style.altura} >
                              <h4 className={style.height}>Altura</h4>    
                              <div >
                                  <span className={style.pokheight}>{myPokemon[0].height / 10}m</span>
                              </div>
                          </div>
                      <div>
  
                      <h4> Tipo: </h4>
                       <p>
                     {myPokemon[0].types.map(el=>el.name)+" "}
                      </p>
                      </div>
                     
                  </div>
                  </div>  
                  
                
              </div>
              : <div className={style.imagen_load}>
          <img src={bolaPoke} alt="" width= "400px" />
  
          <div className={style.loader}>
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
      </div>
          }
         
      </div>
    )
}