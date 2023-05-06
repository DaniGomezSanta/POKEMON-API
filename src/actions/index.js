import axios from 'axios';
import {
    GET_POKEMONS,
    GET_TYPES,
    FILTER_BY_TYPE,
    FILTER_BY_CREATED,
    FILTER_BY_NAME,
    FILTER_BY_ATTACK,
    GET_NAME_POKEMON,
    POST_POKEMON,
    GET_DETAIL,
    REMOVE_POKEMON,
    FILTER_MENOR_CIEN,
    CLEAR_DETAIL
} from './typeActions'



export const getPokemons = () => {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/pokemon');
        
        return dispatch({  
            type: GET_POKEMONS,
            payload: json.data
        })
    }
};


export const getType = () =>{
    return async (dispatch) => {
        const json = await axios.get('http://localhost:3001/types');
        return dispatch({
            type: GET_TYPES,
            payload: json.data
        })
    }
};

export function postPokemon(payload) {
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/pokemon', payload);
        console.log(response)
        return {
            type: POST_POKEMON,
            response
        }
    }
}; 

export const getNamePokemon = (payload) => {
    return async function(dispatch) {
        try {
            const json = await  axios.get(`http://localhost:3001/pokemon?name=${payload}`);
            return dispatch({
                type: GET_NAME_POKEMON,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        try {
            const json = await axios.get(`http://localhost:3001/pokemon/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

export function deletePokemon(payload) {
    return{
        type: REMOVE_POKEMON,
        payload
    }
};
export  function clearDetail(payload) {
    return{
        type: CLEAR_DETAIL,
        payload
    }
}

// filtros------------------------------------------------------

export function filterByType(payload) {
    return({
        type: FILTER_BY_TYPE,
        payload: payload
    })
}; 

export function filterByCreated(payload) {
    return ({
        type: FILTER_BY_CREATED,
        payload
    })
};

export function filterByName(payload) {
    return({
        type: FILTER_BY_NAME,
        payload
    })
};

export function filterByAttack(payload) {
    return ({
        type: FILTER_BY_ATTACK,
        payload
    })
}

export function filterMenorCien(payload) {
    return ({
        type: FILTER_MENOR_CIEN,
        payload
    })
}

