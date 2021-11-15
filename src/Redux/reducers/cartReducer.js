

const initialState = {
    cartIsOpen:false,
    cartItems:[]
}


export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'CART_OPEN':
            return {
                ...state,
                cartIsOpen: true,
            }
        case 'CART_CLOSE':
            return {
                ...state,
                cartIsOpen: false,
            }
        case 'CART_ADD':
            return {
                ...state,
                cartItems: action.payload
            }
        case 'CART_REMOVE':
            return {
                ...state,
                cartItems: state.cartItems.filter(e=>e === action.payload)
            }
        default: return state
    }
}