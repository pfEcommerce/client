import { StyledProductCard } from "../styles/styled_productCard/styledCard";
import StyledButton from '../styles/styled_button/styledButton.js'

import { FaUser as UserIcon , FaShoppingCart as CartIcon} from 'react-icons/fa';
import { useState,useEffect } from "react";

export default function ProductCard({ p,setGame,game }) {





    const handGame = (e) => {
        e.preventDefault()
        setGame([...game,p])
        
    }

    return (
        <StyledProductCard>
            <img src={p.image} alt="" />
            <div>
                <h4>{p.name}</h4>
            </div>
            <div>
                <h4>${p.price}</h4>
            </div>
            <div>
                <StyledButton onClick = {handGame}>Agregar al carrito  <CartIcon/></StyledButton>
            </div>
        </StyledProductCard>
    )
}