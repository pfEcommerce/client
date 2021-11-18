import { GETPRODUCTS } from "../actions/productsActions.js"
import { GETCATEGORIES } from "../actions/categoriesActions.js"
import { LOGGER } from '../actions/utilityActions.js'
import { GETDETAIL } from "../actions/detailActions.js"
import { POSTPRODUCT } from "../actions/createProductActions.js"


const initialState = {
    games: [],
    categories: [],
    user: [],
    detailProduct: []
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GETPRODUCTS:
            return {
                ...state,
                games: action.payload,
            }
        case GETCATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case GETDETAIL:
            return {
                ...state,
                detailProduct: action.payload
            }
        case LOGGER:
            return {
                ...state,
                user: action.payload
            }
        case POSTPRODUCT :
            return {
            ...state,
            }
           





        default: 
        return state;
    }
}
