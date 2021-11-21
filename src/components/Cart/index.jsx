import StyledCart from "../styles/styled_cart/styledCart";
import CartCards from "../Cart_Cards";
import StyledButton from "../styles/styled_button/styledButton.js"
import { StyledCloseButton } from "../styles/styled_closeButton/styledCloseButton";
import {useSelector, useDispatch} from "react-redux"
import { closeCart, lessCant, openCart, removeCartProduct } from "../../Redux/actions/cartActions";



export default function Cart({}) {

  const cartActions = useSelector(state => state.cartReducer.cartItems)
  const total = useSelector(state => state.cartReducer.total)

  console.log(total)

  const dispatch = useDispatch()

 
  
  const closeModal = (e) => {
    e.preventDefault()
    dispatch(closeCart())
  }



  return (    
    <StyledCart>
      <div className="CloseCart">
        <StyledCloseButton onClick={(e) => closeModal(e)} />
      </div>
      <h2> CART </h2>
      <hr />
      <div className="contentCards">
        {cartActions.length > 0 ? (
          cartActions.map((games) => (
            <CartCards name={games.name} price={games.price} key={games.id} id={games.id} />
          ))
        ) : (
          <p> Carrito vacío! </p>
        )}
      </div>
      <hr />
      <div className="info">
        <div className="total">
          <h2>TOTAL:</h2>
          <h2>{total.toFixed(2)}</h2>
        </div>
        <StyledButton> Checkout</StyledButton>
      </div>
    </StyledCart>
  );
}
