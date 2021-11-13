import  { GETPRODUCTS } from  "../actions/productsActions.js" 
import  { GETCATEGORIES } from  "../actions/categoriesActions.js" 
import { LOGGER } from '../actions/utilityActions.js'


const initialState = {
    games: [],
    categories:[],
    user: []
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case GETPRODUCTS:
            return {
            ...state,
            games: action.payload,
            }
        case GETCATEGORIES:
            return {
            ...state,
            categories:action.payload,
            }
        case LOGGER:
            return {
                ...state,
                user:action.payload
            }














        default: return state
    }
}