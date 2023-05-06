import React from "react";
import { Link } from "react-router-dom";
import logoPokemon from '../Images/logoPokemon.webp'
import style from '../LandingPage/LandingPage.module.css';
import landingImage from '../Images/landingImagen.gif'


export default function LandingPage() {
    return (
        <div className={style.container}>
            <img src={logoPokemon} alt='Image not found'/>
            <Link to= '/home'>
                <div>
                 <button className={style.button}>Enter</button>
                </div>
            </Link>
            <img className={style.imagen} src={landingImage} alt='imagen not found'/>
        </div>
    )
}