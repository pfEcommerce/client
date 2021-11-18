import StyledNavbar from "../styles/styled_navbar/styledNavbar";
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar";
import StyleDropdown from "../styles/styled_dropdown/styleDropdown";
import { NavLink } from "react-router-dom";
import LogoSVG from "../svg/logo.svg";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FaUser as UserIcon, FaShoppingCart as CartIcon } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

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
  const { isAuthenticated, isLoading } = useAuth0()

  useEffect(() => {
    console.log(modalCart)
  }, [modalCart])

  if (isLoading) return <h2>Loading...</h2>


  const cartClose = (e) => {
    e.preventDefault();
    if (modalCart === false) {
      setModalCart(true)
    } else {
      setModalCart(false)
    };
  }

  // const closeUserPanel = (e) => {
  //   setModalUser(false)
  // }

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
      <NavLink to="/add">Create</NavLink>
      
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
          {modalUser && modalUser === true ? (
            <StyleDropdown name="modalUser" ref={overlay}>
              <div>{isAuthenticated ? <Logout /> : <Login />}</div>
              <div>
                <p>Sign In</p>
              </div>
            </StyleDropdown>
          ) : (
            ""
          )}
        </div>
        <div onClick={cartClose}>
          <CartIcon className="icon" />
          <span>Cart</span>
        </div>
      </div>
      <Cart cartClose={cartClose} game={game} setGame={setGame} setModalCart={setModalCart} modalCart={modalCart} />
    </StyledNavbar >
  );
}
