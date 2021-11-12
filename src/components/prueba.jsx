import { Button, Card, Carousel, Modal } from 'react-bootstrap'
import StyledButton from './styles/styled_button/styledButton.js'
import { useState } from 'react';
import StyledNavbar from './styles/styled_navbar/styledNavbar.js';
import StyledSearchbar from './styles/styled_searchbar/styledSearchbar.js';
import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';

export default function Prueba () {
    const [modalLogin, setModalLogin] = useState(false);

  /*   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    return (
        <>  
            <Navbar setModalLogin={setModalLogin}></Navbar>
            <Login 
            modalLogin={modalLogin}
            setModalLogin={setModalLogin}
            />

        </>
    )
}