import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StyledButton from "../styles/styled_button/styledButton";
import { toast, Slide } from "react-toastify";
import Requirements from "../Requirements";
import Reviews from "../Reviews";
import { addCartProduct } from "../../Redux/actions/cartActions";
import StyledRating from "../styles/styled_rating/styledRating";

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.rootReducer.detailProduct);
  const cart = useSelector((state) => state.cartReducer.cartItems);
  const [rating, setRating] = useState(0); // initial rating value

  let Scroll = require("react-scroll");
  let Element = Scroll.Element;
  let scroller = Scroll.scroller;

  console.log(cart);

  console.log(params.id);

  useEffect(() => {
    console.log(cart);
    dispatch(getDetail(params.id));
  }, [dispatch, params.id, cart]);

  const handleRating = (rate) => {
    setRating(rate);
    scroller.scrollTo("scrollHere", {
      duration: 100,
      smooth: "easeInOutQuint",
    });
    // Some logic
  };

  const handGame = (e) => {
    e.preventDefault();
    let index = cart.findIndex((games) => games.id === details.id);
    if (index >= 0) {
      alertToast();
    } else {
      dispatch(addCartProduct(details));
      notifyToast();
    }
  };

  const notifyToast = () => {
    console.log("asd");
    toast.success("Agregado al carrito!", {
      position: "top-left",
      transition: Slide,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });
  };

  const alertToast = () => {
    console.log("asd");
    toast.warn("Este producto ya está en el carrito!", {
      position: "top-left",
      transition: Slide,
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progress: undefined,
    });
  };

  return (
    <>
      <StyledDetails>
        <div className="title">
          <h2>Detail</h2>
          <hr />
        </div>
        <div className="content_img_details">
          <div className="content_img">
            <img src={details.image} alt="" />
          </div>
          <div className="content_details">
            <h2>{details.name}</h2>
            {details.categories &&
              details.categories.map((category) => (
                <label htmlFor=""> {category.name} </label>
              ))}
            <StyledRating
              onClick={handleRating}
              ratingValue={rating} /* Rating Props */
            />
            <h3> ${details.price}</h3>
            <div className="buttons">
              <StyledButton onClick={handGame}> Add to Cart </StyledButton>
              <StyledButton> Buy Now </StyledButton>
            </div>

            <hr />
            <div className="content_description">
              <p> {details.description} </p>
            </div>
          </div>
        </div>
      </StyledDetails>
      <Requirements />
      <Element name = "scrollHere">
        <Reviews
          handleRating={handleRating}
          rating={rating}
          setRating={setRating}
        />
      </Element>
    </>
  );
}
