import React, {useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { getType, postPokemon} from "../../actions";
import {useDispatch, useSelector} from 'react-redux';
import validate from "./validate";
import './pokemonCreate.css'
import pokes from '../Images/pokes-formulario.png'

export function PokemonCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const types = useSelector((state) => state.types);
    const pokemons = useSelector((state)=> state.allPokemons)
    

    const [errors, setErrors] = useState({});
 
    const [input, setInput] = useState({
        name: '',
        img: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        types: []
    });

    useEffect(()=> {
        dispatch(getType())
    },[]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }));
        console.log(input)
    };

    function handleSelect(e) {
        setInput({
            ...input,
            types: [...new Set([...input.types, e.target.value])] 
        })
    };

    function handleDelete(el) {
        setInput({
            ...input,
            types: input.types.filter(t=> t !== el)
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        if(input.name.length<1){
            alert('information is required')
        }else if(pokemons.find(el=> el.name.toLowerCase() === input.name.toLowerCase())){
            alert('pokemon alredy exist')
        }else{
            dispatch(postPokemon(input))
            alert('Pokemon Created')
            setInput({
                name: '',
                img: '',
                hp: '',
                attack: '',
                defense: '',
                speed: '',
                weight: '',
                types: []
            })
            history.push('/home')
        }
    }

    return (
        <div className="main1">
            <Link to='/home'>
                <button className="button_return">Return</button></Link> 
        <div className='main'>
                    <div className='figure'>
                        <img className='imagen' src={pokes} alt='imagen not found'/>
                    </div>

            <div className="contact">

                <h2 className='title'>Hello Again!</h2>
                <p className='subtitle'>Welcome to Create your Pokemon</p>
                 <form className="form"  onSubmit={(e)=>handleSubmit(e)}>
                     <div>
                         <label>Name:</label>
                         <input 
                         className='main_input'
                         type='text'
                         value={input.name}
                         name='name'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.name ?
                             <p className='errors'>{errors.name}</p> : null 
                         }
                     </div>
                     <div>
                         <label>Image:</label>
                         <input 
                         className='main_input'
                         type='text'
                         value={input.img}
                         name='img'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.img ?
                             <p className='errors'>{errors.img}</p> : null
                         }
                     </div>
                     <div>
                         <label>HP:</label>
                         <input 
                         className='main_input'
                         type='text'
                         value={input.hp}
                         name='hp'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.hp?
                             <p className='errors'>{errors.hp}</p> : null
                         }
                     </div>
                     <div>
                         <label>Attack:</label>
                         <input
                         className='main_input'
                         type='text'
                         value={input.attack}
                         name='attack'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.attack ?
                             <p className='errors'>{errors.attack}</p> : null
                        }
                     </div>
                     <div>
                         <label>Defense:</label>
                         <input 
                         className='main_input'
                         type='text'
                         value={input.defense}
                         name='defense'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.defense ?
                             <p className='errors'>{errors.defense}</p> : null
                         }
                     </div>
                     <div>
                         <label>Speed:</label>
                         <input 
                         className='main_input'
                         type='text'
                         value={input.speed}
                         name='speed'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.speed ?
                             <p className='errors'>{errors.speed}</p> : null
                         }
                     </div>
                     <div>
                         <label>Weight:</label>
                         <input 
                         className='main_input'
                         type='text'
                         value={input.weight}
                         name='weight'
                         onChange={(e)=>handleChange(e)}/>
                         {errors.weight?
                             <p className='errors'>{errors.weight}</p> : null
                         }
                     </div>
                     <div>
                         <label>Types:</label>
                         <select type='types' value={input.types} name='types' onChange={(e)=>handleSelect(e)}>
                             {errors.types ?
                                 <p className='errors'>{errors.types}</p> : null
                             }
                             {types.map((p)=> {
                                 return(
                                     <option 
                                     value={p.name}>{p.name}</option>
                                     )
                                 })}
                         </select>
                          <ul><li>{input.types.map(el=> el+ ", ")}</li></ul>
                     </div>
                 {errors.hasOwnProperty('name') || errors.hasOwnProperty('img') || errors.hasOwnProperty('hp') || 
                 errors.hasOwnProperty('attack') || errors.hasOwnProperty('defense') || errors.hasOwnProperty('speed')
                 || errors.hasOwnProperty('weigth')? 
                 <p>Please complete all information</p> : <button type="submit"  className='button_submit'>Create Pokemon</button>}
                
                 </form>
        
            </div>
                 {input.types.map(el=>
                     <div>
                         <p>{el}</p>
                         <button className="buttonX" onClick={()=>handleDelete(el)}>X</button>
                     </div>
                 )}
        </div>
        </div>
    )
}