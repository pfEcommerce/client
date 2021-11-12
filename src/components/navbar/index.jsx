
import StyledButton from "../styles/styled_button/styledButton"
import StyledNavbar from "../styles/styled_navbar/styledNavbar"
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar"

import {BsSearch} from 'react-icons/bs'


export default function Navbar(){
    
    
    return(
        <StyledNavbar>
            <div className="div">
                    <h1>LOGO</h1>
                </div>
                <div>
                    <BsSearch/>
                    <StyledSearchbar placeholder="Search"/>
                </div>
                <div>
                    <StyledButton>Home</StyledButton>
                    <StyledButton>Products</StyledButton>
                    <StyledButton>About</StyledButton>
                </div>
        </StyledNavbar>
    )
}