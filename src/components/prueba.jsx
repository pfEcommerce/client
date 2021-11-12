import { Button, Card, Carousel, Modal } from 'react-bootstrap'
import StyledButton from './styles/styled_button/styledButton.js'
import { useState } from 'react';
import StyledNavbar from './styles/styled_navbar/styledNavbar.js';
import StyledSearchbar from './styles/styled_searchbar/styledSearchbar.js';
import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import axios from 'axios';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState,useEffect} from 'react';
import ProductsMain from './productsMain/index.jsx';


export default function Prueba () {
    
    const [modalLogin, setModalLogin] = useState(false);

  /*   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    const [mock,setMock] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:3001/products')
        .then(p => setMock(p.data) )

    }, [])

    // console.log('mock',mock)
    
    return (
        <>  
            <Navbar setModalLogin={setModalLogin}></Navbar>
            <Login 
            modalLogin={modalLogin}
            setModalLogin={setModalLogin}
            />
            <EmblaCarousel array={mock}/>
            <ProductsMain mock={mock}/>
        </>
    )
}