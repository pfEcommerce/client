const initialState = {
  cartIsOpen: false,
  cartItems: [],
  total: 0,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "CART_OPEN":
      return {
        ...state,
        cartIsOpen: true,
      };
    case "CART_CLOSE":
      return {
        ...state,
        cartIsOpen: false,
      };
    case "CART_ADD":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        total: state.total + action.payload.price,
      };
    case "CART_REMOVE":
      return {
        ...state,
        cartItems: state.cartItems.filter((e) => e.id !== action.payload),
      };
    case "ADD_CANT":
      return {
        ...state,
        total: state.total + action.payload,
      };
      case "LESS_CANT":
        return {
          ...state,
          total: state.total - action.payload,
        };
    default:
      return state;
  }
}
