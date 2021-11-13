import StyledNavbar from "../styles/styled_navbar/styledNavbar";
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar";
import StyleDropdown from "../styles/styled_dropdown/styleDropdown";
import { useTransition, animated } from 'react-spring'


import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FaUser as UserIcon, FaShoppingCart as CartIcon } from "react-icons/fa";
import { useState, useRef } from "react";

import Login from "../Authentication/Login";
import Logout from "../Authentication/Logout";
import Cart from "../Cart/index.jsx";

import logoG from '../../logoGecommerce.png'

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";






export default function Navbar({ game, setGame }) {

  const overlay = useRef(null);

  const [modalUser, setModalUser] = useState(false);
  const [modalCart, setModalCart] = useState(false);
  const { isAuthenticated} = useAuth0()

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
          <StyledSearchbar placeholder="Search" />
        </div>
        <div className="icons">
          <div onClick={() => alert("hola")}>
            <HomeIcon className="icon" />
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div onClick={showUserPanel}>
            <UserIcon className="icon" />
            <span>User</span>
            {transitionUser((style, bool) => bool ?
              <animated.div style={style} className='user'>
                <StyleDropdown name="modalUser" ref={overlay}>
                  <div>{isAuthenticated ? <Logout /> : <Login />}</div>
                  <div>
                    <p>Sign In</p>
                  </div>
                </StyleDropdown>
              </animated.div> : '')}
          </div>
          <div onClick={() => setModalCart(!modalCart)}>
            <CartIcon className="icon" />
            <span>Cart</span>
          </div>
        </div>
        {transitionCart((style, bool) => bool ?
          <animated.div style={style} className='cart'>
            <Cart game={game} setGame={setGame} setModalCart={setModalCart} modalCart={modalCart} />
          </animated.div> : '')}
      </StyledNavbar >
  );
}
