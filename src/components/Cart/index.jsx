import StyledCart from "../styles/styled_cart/styledCart";
import CartCards from "../Cart_Cards";
import StyledButton from "../styles/styled_button/styledButton.js"
import { StyledCloseButton } from "../styles/styled_closeButton/styledCloseButton";

export default function Cart({
  game,
  setGame,
  setModalCart,
  modalCart,
  price,
  setPrice
}) {

  const filterGamesCart = (e, totalPrice) => {
    e.preventDefault()
    let auxGames = game
    console.log(auxGames)
    /* const index = game.findIndex(games => games.id === Number(e.target.id)) */
    setPrice(price - totalPrice)
    auxGames = auxGames.filter((games) => games.id !== Number(e.target.id))
    setGame(auxGames)
  }




  return (
    <StyledCart>
      <div className="CloseCart">
        <StyledCloseButton onClick={() => setModalCart(!modalCart)} />
      </div>
      <h2> CART </h2>
      <hr />
      <div className="contentCards">
        {game.length > 0 ? (
          game.map((games) => (
            <CartCards totalPrice={price} setTotalPrice={setPrice} filterGamesCart={filterGamesCart} name={games.name} price={games.price} key={games.id} id={games.id} />
          ))
        ) : (
          <p> No hay nada</p>
        )}
      </div>
      <hr />
      <div className="info">
        <div className="total">
          <h2>TOTAL:</h2>
          <h2>${price.toFixed(2)}</h2>
        </div>
        <StyledButton> Checkout</StyledButton>
      </div>
    </StyledCart>
  );
}
