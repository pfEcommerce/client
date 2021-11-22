import { GETPRODUCTS, GETNAMEPRODUCTS } from "../actions/productsActions.js";
import { GETCATEGORIES } from "../actions/categoriesActions.js";
import { LOGGER } from "../actions/utilityActions.js";
import { GETDETAIL } from "../actions/detailActions.js";
import { FILTER_BY_NAME } from "../actions/sortByAbcActions.js";
import { SORT_BY_PRICE } from "../actions/sortByPriceActions.js";



const initialState = {
    games: [],
    filter: [],
    categories: [],
    user: [],
    detailProduct: [],
    paymentData: [],
    orders: []
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
        case 'SENDUSERTOPAY':
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
                orders: action.payload
            }
        case GETNAMEPRODUCTS:
              return {
                  ...state,
                  games: action.payload
              };
              case FILTER_BY_NAME:
                const ascDescFilter =
                  action.payload === "za"
                    ? state.games.sort((a, b) => {
                        if (a.name?.toLowerCase() < b.name?.toLowerCase()) return 1;
                        if (a.name?.toLowerCase() > b.name?.toLowerCase()) return -1;
                        return 0;
                      })
                    : state.games.sort((a, b) => {
                        if (a.name?.toLowerCase() > b.name?.toLowerCase()) return 1;
                        if (a.name?.toLowerCase() < b.name?.toLowerCase()) return -1;
                        return 0;
                      });
                return {
                  ...state,
                  games: [...ascDescFilter],
                };
              case SORT_BY_PRICE:
                const priceFilter =
                  action.payload === "max"
                    ? [...state.filter].sort((b, a) => a.price - b.price)
                    : [...state.filter].sort((b, a) => b.price - a.price);
                return {
                  ...state,
                  games: priceFilter,
                };
        default:
            return state
    }
}
  

