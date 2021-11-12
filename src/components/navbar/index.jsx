import StyledNavbar from "../styles/styled_navbar/styledNavbar";
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar";
import StyleDropdown from "../styles/styled_dropdown/styleDropdown";

import LogoSVG from "../svg/logo.svg";

import { AiFillHome as HomeIcon } from "react-icons/ai";
import { FaUser as UserIcon, FaShoppingCart as CartIcon } from "react-icons/fa";
import { useState, useRef, useEffect } from "react"

import Login from '../Authentication/Login';
import Logout from "../Authentication/Logout";

import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {

    
    const overlay = useRef(null)
    console.log(overlay)
    
    const [modalUser, setModalUser] = useState(true)
    
    useEffect(() => {
        document.body.addEventListener("click", closeUserPanel)
        return () => {
            document.body.addEventListener("click", closeUserPanel)
        }
    })
    const { isAuthenticated, isLoading } = useAuth0()
    if (isLoading) return <h2>Loading...</h2>

    const closeUserPanel = (e) => {
        console.log(e.target)
        setModalUser(false)
    }




    const showUserPanel = (e) => {
        e.preventDefault()

        if (modalUser === true || !e) {
            setModalUser(false)
        } else {
            setModalUser(true)
        }
    }


    return (
        <StyledNavbar>
            <div >
                <img src={LogoSVG} className="logo" alt='logo' />
            </div>
            <div className="searchbar">
                <StyledSearchbar placeholder="Search" />
            </div>
            <div className="icons">
                <div onClick={() => alert('hola')}>
                    <HomeIcon className="icon" />
                    <span>Home</span>
                </div>
                <div onClick={showUserPanel}>
                    <UserIcon className="icon" />
                    <span  >User</span>
                    {modalUser && modalUser === true ?
                        <StyleDropdown ref={overlay}>
                            <div>
                                {isAuthenticated ? <Logout /> : <Login />}
                            </div>
                            <div>
                                <p>Sign In</p>
                            </div>
                        </StyleDropdown>
                        : ""
                    }
                </div>
                <div onClick={() => alert('hola')}>
                    <CartIcon className="icon" />
                    <span>Cart</span>
                </div>
            </div>
        </StyledNavbar>
    )
}
