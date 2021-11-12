
import StyledButton from "../styles/styled_button/styledButton"
import StyledNavbar from "../styles/styled_navbar/styledNavbar"
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar"

// import { ReactComponent as LogoSVG } from '../svg/logo.svg'


import { AiFillHome as HomeIcon} from 'react-icons/ai';
import { FaUser as UserIcon , FaShoppingCart as CartIcon} from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';


export default function Navbar() {


    return (
        <StyledNavbar>
            <div className="div">
                {/* <LogoSVG/> */}
                <h1>LOGO</h1>
            </div>
            <div className="searchbar">
                <StyledSearchbar placeholder="Search" />
            </div>
            <div className="icons">
                <div onClick={() => alert('hola')}>
                    <HomeIcon className="icon" />
                    <span>Home</span>
                </div>
                <div onClick={() => alert('hola')}>
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