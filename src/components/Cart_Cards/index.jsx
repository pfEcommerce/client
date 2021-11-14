import StyledCartCard from "../styles/styled_cartCard/styledCartCard";
import { useState,useEffect } from "react";

export default function CartCards({ name, price,id,filterGamesCart,setTotalPrice, totalPrice }) {

  const [total, setTotal] = useState(price)
  const [contador, setContador] = useState(1)

  useEffect(() => {
    console.log(total)
  },[total])

  const addGame = (e) => {
    e.preventDefault();
    setContador(contador + 1)
    setTotal(total + price);
    setTotalPrice(totalPrice + price)
  }

  const lessGame = (e) => {
    e.preventDefault();
    setContador(contador -1 )
    setTotal(total - price);
    setTotalPrice(totalPrice - price)
  }

  return (
    <StyledCartCard>
      <div className="Close">
        <button onClick={(e) => filterGamesCart(e,total)} id= {id}> x </button>
      </div>
      <h3>{name}</h3>
      <div className = "details">
        <p>${total.toFixed(2)}</p>
        <div >
            <p>{contador}</p>
            <button onClick = {addGame}> + </button>
            <button onClick = {lessGame} > - </button>
        </div>
      </div>
    </StyledCartCard>
  );
}
