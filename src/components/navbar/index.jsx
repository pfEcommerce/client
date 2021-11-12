
import StyledNavbar from "../styles/styled_navbar/styledNavbar"
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar"

import LogoSVG from '../svg/logo.svg'
import { useAuth0 } from "@auth0/auth0-react";


import { AiFillHome as HomeIcon} from 'react-icons/ai';
import { FaUser as UserIcon , FaShoppingCart as CartIcon} from 'react-icons/fa';



export default function Navbar() {

    const { loginWithRedirect } = useAuth0();


    return (
        <StyledNavbar>
            <div >
                <img src={LogoSVG} className="logo" alt='logo'/>
            </div>
            <div className="searchbar">
                <StyledSearchbar placeholder="Search" />
            </div>
            <div className="icons">
                <div onClick={() => alert('hola')}>
                    <HomeIcon className="icon" />
                    <span>Home</span>
                </div>
                <div onClick={() => loginWithRedirect()}>
                    <UserIcon className="icon" />
                    <span>User</span>
                </div>
                <div onClick={() => alert('hola')}>
                    <CartIcon className="icon"/>
                    <span>Cart</span>
                </div>
            </div>
        </StyledNavbar>
    )
}