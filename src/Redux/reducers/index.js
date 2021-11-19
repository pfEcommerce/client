import { GETPRODUCTS } from "../actions/productsActions.js"
import { GETCATEGORIES } from "../actions/categoriesActions.js"
import { LOGGER } from '../actions/utilityActions.js'
import { GETDETAIL } from "../actions/detailActions.js"
import { sendProductToPay } from '../actions/utilityActions'



const initialState = {
    games: [],
    categories: [],
    user: [],
    detailProduct: [],
    paymentData: [],
    paymentId: []
}


export default function rootReducer(state = initialState, action) {
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
        case 'DISLOGG':
            return {
                ...state,
                user: []
            }
        case 'SENDPRODUCTOPAY':
            return {
                ...state,
                paymentData: action.payload
            }    
        case 'PAYMENTID':
            return {
                ...state,
                paymentId: action.payload
            }
        case 'NEWORDERS':
            return{
                ...state,
                user: {...state.user, orders: action.payload}
            }
        default:
            return state
    }
}