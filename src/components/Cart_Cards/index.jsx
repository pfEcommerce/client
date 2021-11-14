import StyledCartCard from "../styles/styled_cartCard/styledCartCard";
import { StyledCloseButton } from "../styles/styled_closeButton/styledCloseButton";
import { useState, useEffect } from "react";

import {AiOutlinePlusCircle as Plus , AiOutlineMinusCircle as Minus} from 'react-icons/ai'

export default function CartCards({ name, price, id, filterGamesCart, setTotalPrice, totalPrice }) {

  const [total, setTotal] = useState(price)
  const [contador, setContador] = useState(1)

  useEffect(() => {
    console.log(total)
  }, [total])

  const addGame = (e) => {
    e.preventDefault();
    setContador(contador + 1)
    setTotal(total + price);
    setTotalPrice(totalPrice + price)
  }

  const lessGame = (e) => {
    e.preventDefault();
    setContador(contador - 1)
    setTotal(total - price);
    setTotalPrice(totalPrice - price)
  }

  return (
    <StyledCartCard>
      <div className="Close">
        <h3>{name}</h3>
        <StyledCloseButton onClick={(e) => filterGamesCart(e, total)} id={id}/>
      </div>
      <div className="details">
        <p>${total.toFixed(2)}</p>
        <div >
          <p>{contador}</p>
          <Plus onClick={addGame} className="counters"> + </Plus>
          <Minus onClick={lessGame} className="counters"> - </Minus>
        </div>
      </div>
    </StyledCartCard>
  );
}
