import StyledCart from "../styles/styled_cart/styledCart";
import CartCards from "../Cart_Cards";
import { useEffect, useState } from "react";

export default function Cart({
  game,
  setGame,
  setModalCart,
  modalCart,
  cartClose,
  price,
  setPrice
}) {

  const [bool, setBool] = useState(true)

  useEffect(() => {
   console.log(modalCart)
   console.log(game)
  },[modalCart,game])


  const filterGamesCart = (e,totalPrice) => {
    
    e.preventDefault()
    let auxGames = game
    console.log(auxGames)
    /* const index = game.findIndex(games => games.id === Number(e.target.id)) */
    setPrice(price- totalPrice)
    auxGames = auxGames.filter((games) => games.id !== Number(e.target.id))
    setGame(auxGames)
  }


  

  return (
    <>
      <StyledCart desappear={modalCart === false? "false": "true"} >
        <div className="Close">
          <button onClick={cartClose}> x </button>
        </div>
        <h2> CART </h2>
        <hr />
        <div className="contentCards">
          {game.length > 0 ? (
            game.map((games) => (
              <CartCards totalPrice = {price} setTotalPrice={setPrice} filterGamesCart={filterGamesCart} name={games.name} price={games.price} key={games.id} id= {games.id} />
            ))
          ) : (
            <p> No hay nada</p>
          )}
        </div>
        <hr />
        <div className = "info">
          <h2>TOTAL: {price.toFixed(2)}</h2>
          <button> Checkout</button>
        </div>
      </StyledCart>
    </>
  );
}
