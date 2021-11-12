import { Button, Card, Carousel, Modal } from 'react-bootstrap'
import StyledButton from './styles/styled_button/styledButton.js'
import { useState } from 'react';
import StyledNavbar from './styles/styled_navbar/styledNavbar.js';
import StyledSearchbar from './styles/styled_searchbar/styledSearchbar.js';
import Navbar from './navbar/index.jsx';

export default function () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>  
            <Navbar></Navbar>
        </>
    )
}