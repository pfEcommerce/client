import { Button, Card, Carousel, Modal } from 'react-bootstrap'
import StyledButton from './styles/styled_button/styledButton.js'
import StyledNavbar from './styles/styled_navbar/styledNavbar.js';
import StyledSearchbar from './styles/styled_searchbar/styledSearchbar.js';
import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import axios from 'axios';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import logger from '../Redux/actions/utilityActions.js';
import { auth0, useAuth0 } from '@auth0/auth0-react'


export default function Prueba () {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [modalLogin, setModalLogin] = useState(false);
    const [ loginUser, setLoginUser ] = useState({
        user,
    })
    const dispatch = useDispatch()

  /*   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    const [mock,setMock] = useState([])

    useEffect(() => {
        dispatch(logger(loginUser))
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