import {
    DELETE_CATEGORY
} from "../actions/adminActions"

const initialState = {
    orders: [],
    admins: [],
}

export default function adminReducer(state = initialState, action) {

    switch (action.type) {
        case "GET_ORDERS":
            return {
                ...state,
                orders: action.payload
            }
        case 'GET_ADMINS':
            return {
                ...state,
                admins: action.payload
            }

        default: return state;
    }

}