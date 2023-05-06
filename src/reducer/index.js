import {GET_POKEMONS, GET_TYPES, FILTER_BY_TYPE, FILTER_BY_CREATED,
     FILTER_BY_NAME, FILTER_BY_ATTACK, GET_NAME_POKEMON, 
     POST_POKEMON, GET_DETAIL, REMOVE_POKEMON, FILTER_MENOR_CIEN, CLEAR_DETAIL} from '../actions/typeActions'

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: []
}


function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            };
        case FILTER_BY_TYPE:
            const allPokemons =state.pokemons
            const typesFiltered = action.payload === 'All Types' ? allPokemons : allPokemons.filter(el=> el.types.map(i=>i.name).includes(action.payload))
            return{
                ...state,
                allPokemons: typesFiltered
                        };
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case GET_NAME_POKEMON:
            return {
                ...state,
                allPokemons: action.payload
            }
        case  POST_POKEMON:
            return {
                ...state
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        case REMOVE_POKEMON:
            const removePoke = state.allPokemons
            return{
                ...state,
                pokemons: removePoke.filter(el=> el.id !== action.payload)
            }
        case CLEAR_DETAIL: 
            return {
                ...state,
                detail: []
            }
        case FILTER_BY_CREATED:
            const allPokemon =[...state.pokemons]
            const createdFilter = action.payload === 'Created'? allPokemon.filter((el)=> el.createdInDb) : allPokemon.filter((p)=> !p.createdInDb)
            return{
                ...state,
                allPokemons: action.payload === 'All' ? allPokemon : createdFilter 
            }
            case FILTER_BY_NAME:
                const orderByName = action.payload === 'A-Z'?
                state.pokemons.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return 1
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1
                    }
                    return 0
                }):
                state.pokemons.sort(function(a,b){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return -1
                    }
                    if(b.name.toLowerCase() > a.name.toLowerCase()){
                        return 1
                    }
                    return 0
                })
                return {
                    ...state,
                    pokemons: orderByName
                }
            case FILTER_BY_ATTACK:
            const filterByAttack = action.payload === 'Hight'?
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return -1
                }
                if(b.attack > a.attack) {
                    return 1
                }
                return 0;
            }):
            state.pokemons.sort(function(a,b){
                if(a.attack > b.attack){
                    return 1
                }
                if(b.attack > a.attack){
                    return -1
                }
                return 0
            })
            return {
                ...state,
                pokemons: filterByAttack 
            }
            case FILTER_MENOR_CIEN:
                const filterMenor = state.pokemons
                const filterMenorCien = action.payload === 'menor a cien'?  filterMenor.filter(el=> el.attack < 100) : filterMenor
                return {
                    ...state,
                    allPokemons: filterMenorCien 
                }
                
            default:
            return state;
    }
};

export default rootReducer;

