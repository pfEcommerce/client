import React, { useEffect, useState } from "react";
import { StyledProductCard } from "../styles/styled_productCard/styledCard";
import StyledButton from "../styles/styled_button/styledButton.js";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaShoppingCart as CartIcon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addCartProduct } from "../../Redux/actions/cartActions";
import { addWishList, getWishlist } from "../../Redux/actions/wishActions";

toast.configure();

export default function ProductCard({ p }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.rootReducer.user)
  const wishList = useSelector((state) => state.rootReducer.wish)


  const [isProduct, setIsProduct] = useState(false);
  const [fav, setFav] = useState(false);
  const [wishUser, setWishUser] = useState({wishes: []});

  /* useEffect(() => {
    if(user){
      dispatch(getWishlist(user.email))
      console.log(wishUser)
    }
  },[dispatch,fav,user.email,user,wishUser])
 */
  const handGame = (e) => {
    e.preventDefault();
    let index = cart.findIndex((games) => games.id === p.id);
    if (index >= 0) {
      alertToast();
    } else {
      dispatch(addCartProduct(p));
      notifyToast();
    }
  };

  const handleWish = (e) => {
    e.preventDefault();
    if(fav === false){
        setFav(true)
        dispatch(addWishList(user.email,{id: p.id}))
        dispatch(getWishlist(user.email))
        setWishUser(wishList) 
    }else{
        setFav(false)
        wishToast()
    }
  }; 

  const wishToast = (type)=>{
    toast.info(type === 'add' ? "Agregado a wishlist!" : 'Quitado de wishlist!', {
      icon: <MdOutlineFavoriteBorder/>,
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    });
  }

  const notifyToast = () => {
    toast.success("Agregado al carrito!", {
      position: "top-left",
      transition: Slide,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    });
  };

  const alertToast = () => {
    toast.warn("Este producto ya está en el carrito!", {
      position: "top-left",
      transition: Slide,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      progress: undefined,
    });
  };

  return (
    <StyledProductCard>
      <div className={"img-bg"}>
        <Link to={`/details/${p.id}`}>
          {" "}
          <img src={p.image} alt="" />
        </Link>
      </div>
      <div className="container">
        <div className="name">
          <h4>{p.name}</h4>
        </div>
        <div className="price">
          <h4>${p.price}</h4>
        </div>
        <div className="buttons">
          {!isProduct ? (
            <button className="cart" onClick={(e) => handGame(e)}>
              Agregar al carrito <CartIcon />
            </button>
          ) : (
            <button onClick={(e) => handGame(e)}>
              Este producto ya esta en el carrito
            </button>
          )}
          <div className="wish" onClick={(e) => handleWish(e)}>
              {
                wishUser.wishes && wishUser.wishes.find(wish => wish.productId === p.id)? <MdOutlineFavorite/>
                 :<MdOutlineFavoriteBorder/>
              }
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
}
