import StyledDetails from "../styles/styled_details/styledDetails";
import { useParams } from "react-router-dom";
import { getDetail, resetDetail } from "../../Redux/actions/detailActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StyledButton from "../styles/styled_button/styledButton";
import { toast, Slide } from "react-toastify";
import Requirements from "../Requirements";
import Reviews from "../Reviews";
import { addCartProduct } from "../../Redux/actions/cartActions";
import { StyledRating } from "../styles/styled_rating/styledRating";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import useAlgoliaInsights from "../hooks/useAlgoliaInsights";
import { addWishList, removeWishList } from "../../Redux/actions/wishActions";
import { getRatings } from "../../Redux/actions/opinionsActions";
import EmblaCarousel from "../carousel/carousel";
import { StyledBadge } from "../styles/styled_badge/styledBadge";
import { FaShoppingCart as CartIcon } from "react-icons/fa";

export default function Details() {
  const params = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.rootReducer.detailProduct);
  const cart = useSelector((state) => state.cartReducer.cartItems);
  const user = useSelector((state) => state.rootReducer.user);
  const wishList = useSelector((state) => state.rootReducer.wish);
  const ratingRedux = useSelector((state) => state.rootReducer.rating);
  const [rating, setRating] = useState(ratingRedux); // initial rating value
  const [fav, setFav] = useState(false);
  const [wishUser, setWishUser] = useState(wishList);
  const [isProduct, setIsProduct] = useState(false);
  const Swal = require("sweetalert2");

  const { sendProductView } = useAlgoliaInsights();

  let Scroll = require("react-scroll");
  let Element = Scroll.Element;
  let scroller = Scroll.scroller;

  useEffect(() => {
    const objectID = details.id;
    if (objectID) {
      sendProductView(objectID);
    }
    dispatch(getDetail(params.id));
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch, params.id, cart, rating, user.email]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getRatings());
    }, 100);
  }, [dispatch, cart, rating]);

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

  const wishToast = (type) => {
    toast.info(
      type === "add" ? "Agregado a wishlist!" : "Quitado de wishlist!",
      {
        icon: <MdOutlineFavoriteBorder />,
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
      }
    );
  };

  const handleWish = (e) => {
    e.preventDefault();
    if (user.firstName) {
      if (!wishList.find((wish) => wish.name === details.name)) {
        setFav(true);
        dispatch(addWishList(user.email, { name: details.name }));
        setWishUser(wishList);
        wishToast("add");
      } else {
        setFav(false);
        dispatch(removeWishList(details.name));
        wishToast();
      }
    } else {
      Swal.fire("Please Log in");
    }
  };

  return (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
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
            <div className="details__carousel">
              <div className="wish">
                <h2>{details.name}</h2>
                <span style={{ cursor: "pointer" }} onClick={handleWish}>
                  {wishList.find((wish) => wish.name === details.name) ? (
                    <MdOutlineFavorite />
                  ) : (
                    <MdOutlineFavoriteBorder />
                  )}
                </span>
              </div>
              <div className="categories">
                {details.categories &&
                  details.categories.map((category) => (
                    <label htmlFor=""> {category.name} </label>
                  ))}
              </div>
              <StyledRating
                onClick={handleRating}
                ratingValue={ratingRedux} /* Rating Props */
              />
              <h3>
                $
                {details.discount
                  ? (
                      details.price -
                      details.price * (details.discount / 100)
                    ).toFixed(2)
                  : details.price}
              </h3>
              <div className="buttons">
              {(() => {
        if (!details.isActive || details.stock === 0) {
          return (
            <div>
            <span>No hay stock</span>
            </div>
          )
        } else if (!isProduct) {
          return (
            <StyledButton className="cart" onClick={(e) => handGame(e)}>
            Agregar al carrito <CartIcon />
          </StyledButton>
          )
        } else {
          return (
            <StyledButton onClick={(e) => handGame(e)}>
              Este producto ya esta en el carrito
            </StyledButton>
          )
        }
      })()}

                {/* <StyledButton> Buy Now </StyledButton> */}
              </div>
            </div>
            <hr />
            <div className="content_description">
              <p> {details.description} </p>
            </div>
          </div>
        </div>
      </StyledDetails>
      <Requirements />
      <Element name="scrollHere">
        <Reviews
          handleRating={handleRating}
          rating={rating}
          setRating={setRating}
          params={params}
        />
      </Element>
    </div>
  );
}
