import { StyledProductCard } from "../styles/styled_productCard/styledCard";
import StyledButton from '../styles/styled_button/styledButton.js'
import { toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaUser as UserIcon , FaShoppingCart as CartIcon} from 'react-icons/fa';
import { useState,useEffect } from "react";
toast.configure()

export default function ProductCard({ p,setGame,game }) {





    const handGame = (e) => {
        e.preventDefault()
        setGame([...game,p])
        notify()
    }

    const notify = () => {
        console.log('asd')
        toast.success('Agregado al carrito!', {
            position: "bottom-center",
            transition: Slide,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme:'dark',
            progress: undefined,
        });
    }

    return (
        <StyledProductCard>
            <div>
                <img src={p.image} alt="" />
            </div>
            <div>
                <div>
                    <h4>{p.name}</h4>
                </div>
                <div className="price">
                    <h4>${p.price}</h4>
                </div>
                <div>
                    <StyledButton onClick={(e) => handGame(e)}>Agregar al carrito  <CartIcon /></StyledButton>
                </div>
            </div>
        </StyledProductCard>
    )
}