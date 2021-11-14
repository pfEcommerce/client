import React from "react";
import { StyledProductCard } from "../styles/styled_productCard/styledCard";
import StyledButton from '../styles/styled_button/styledButton.js'
import { toast , Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FaShoppingCart as CartIcon} from 'react-icons/fa';

toast.configure()

export default function ProductCard({ p,setGame,game,price,setPrice }) {

    


    const handGame = (e) => {
        
        e.preventDefault()
        
        let index = game.findIndex(games => games.id === p.id)
        
        if(index >= 0){
            
            alert("AGREGAR NOTIFY CON ADVERTENCIA DEL QUE EL JUEGO YA EXISTE EN EL CARRITO") 
            
        }else{
           setGame([...game,p])
            notify()
            setPrice(price + p.price)
            console.log(price)
        }
    }

    const notify = () => {
        console.log('asd')
        toast.success('Agregado al carrito!', {
            position: "bottom-center",
            transition: Slide,
            autoClose: 2000,
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
            <div className={"img-bg"}>
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