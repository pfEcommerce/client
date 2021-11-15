import StyledNavbar from "../styles/styled_navbar/styledNavbar";
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar";
import { StyledUserImage } from "../styles/styled_userImage/styledUserImage";
import StyleDropdown from "../styles/styled_dropdown/styleDropdown";
import StyledModal from "../styles/styled_modal/styleModal";
import { useTransition, animated } from 'react-spring'
import { useState, useRef, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Search from "../Search/search"
import { ImProfile as ProfileIcon } from "react-icons/im"
import { AiFillHome as HomeIcon, AiOutlineForm as SignInIcon } from "react-icons/ai";
import { FaUser as UserIcon, FaShoppingCart as CartIcon } from "react-icons/fa";

import Login from "../Authentication/Login";
import Logout from "../Authentication/Logout";
import Cart from "../Cart/index.jsx";

import logoG from '../../logoGecommerce.png'

import { Link } from "react-router-dom";




export default function Navbar({ game, setGame, price, setPrice }) {
  const refUser = useRef(null);
  const refCart = useRef(null);
  const overlay = useRef(null);

  const [modalUser, setModalUser] = useState(false);
  const [modalCart, setModalCart] = useState(false);
  const { isAuthenticated, user } = useAuth0()

  const userData = useSelector(state => state.user)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (modalUser && refUser.current && !refUser.current.contains(e.target)) {
        setModalUser(false)
        console.log('asd')
      }
      if (modalCart && refCart.current && !refCart.current.contains(e.target)) {
        setModalCart(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [modalUser, modalCart])

  const transitionCart = useTransition(modalCart, {
    from: { opacity: 0.5, x: 200 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 200 },
    config: { duration: 300 }
  })

  const transitionUser = useTransition(modalUser, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 100 }
  })

  const showUserPanel = (e) => {
    e.preventDefault();
    if (modalUser === true) {
      setModalUser(false);
    } else {
      setModalUser(true);
    }
  };

  return (
    <StyledNavbar>
      <div>
        <img src={logoG} className="logo" alt="logo" />
      </div>
      <div className="searchbar">
        <Search/>
    
      </div>
      <div className="icons">
        <div>
          <HomeIcon className="icon" />
          <Link to="/" className="link">
            Home
          </Link>
        </div>
        <div onClick={showUserPanel}>
          {isAuthenticated ?
            <StyledUserImage>
              <img src={userData.photo} alt="userImage" />
            </StyledUserImage> :
            <UserIcon className="icon" />}

          <span>{isAuthenticated ? userData.firstName : 'User'}</span>
          {transitionUser((style, bool) => bool ?
            <animated.div style={style} className='user'>
              <StyleDropdown name="modalUser" ref={refUser}>
                <div className="arrow_box"></div>
                <div>{isAuthenticated ? <Logout /> : <Login />}</div>
                {!isAuthenticated &&
                  <div>
                    <StyledButton><SignInIcon /> Sign in</StyledButton>
                  </div>
                }
                {isAuthenticated &&
                  <div>
                    <StyledButton><ProfileIcon />Profile</StyledButton>
                  </div>
                }
              </StyleDropdown>
            </animated.div> : '')}
        </div>
        <div onClick={() => setModalCart(!modalCart)}>
          <CartIcon className="icon" />
          <span>Cart</span>
        </div>

      </div>
      {transitionCart((style, bool) => bool ?
        <StyledModal>
          <animated.div style={style} className='cart' ref={refCart} >
            <Cart setPrice={setPrice} price={price} game={game} setGame={setGame} setModalCart={setModalCart} modalCart={modalCart} />
          </animated.div>
        </StyledModal> : '')
      }
    </StyledNavbar >
  );
}

