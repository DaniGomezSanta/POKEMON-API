import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNamePokemon } from "../../actions";


export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const pokemons = useSelector((state) => state.allPokemons)


    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    };
    function handleSubmit(e){
        e.preventDefault()
        if(!pokemons.find(el=> el.name.toLowerCase() === name.toLowerCase())){
            alert ('pokemon not exist')
        }else{
            dispatch(getNamePokemon(name))
            return setName('')
        } 
    }

    return(
        <div>
            <form onSubmit={(e)=> handleSubmit(e)}>
            <input 
            type='text'
            placeholder="Search..."
            onChange={(e)=> handleInputChange(e)}
            value={name}/>
            <button type="submit" >Search</button>
            </form>
        </div>
    )
}