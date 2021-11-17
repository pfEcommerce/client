import { GETPRODUCTS } from "../actions/productsActions.js"
import { GETCATEGORIES } from "../actions/categoriesActions.js"
import { LOGGER } from '../actions/utilityActions.js'
import { GETDETAIL } from "../actions/detailActions.js"
import { FILTER_BY_NAME } from "../actions/sortByAbcActions.js"

const initialState = {
    games: [],
    categories: [],
    user: [],
    detailProduct: []
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
        case FILTER_BY_NAME:
            const ascDescFilter =
                action.payload === "za"
                    ? state.games.sort((a, b) => {
                        if (
                            a.name?.charAt(0).toLowerCase() <
                            b.name?.charAt(0).toLowerCase()
                        )
                            return 1;
                        return -1;
                    })
                    : state.games.sort((a, b) => {
                        if (
                            a.name?.charAt(0).toLowerCase() >
                            b.name?.charAt(0).toLowerCase()
                        )
                            return 1;
                        return -1;
                    });
            return {
                ...state,
                games: [...ascDescFilter],
            };
        default: return state
    }
}