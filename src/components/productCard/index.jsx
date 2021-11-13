import React from "react";
import { StyledProductCard } from "../styles/styled_productCard/styledCard";
import StyledButton from '../styles/styled_button/styledButton.js'
import { FaUser as UserIcon , FaShoppingCart as CartIcon} from 'react-icons/fa';
//import { Link } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { getDetail } from "../../Redux/actions/detailActions.js"
//import { useEffect,useState } from "react";




export default function ProductCard({ p }) {
    
    return (
        <StyledProductCard>
            <img src={p.image} alt="" />
            <div>
                <h4>{p.name}</h4>
            </div>
            <div>
                <h4>{p.price}</h4>
            </div>
            <div>
                <StyledButton>Agregar al carrito  <CartIcon/></StyledButton>
            </div>
        </StyledProductCard>
    )
}