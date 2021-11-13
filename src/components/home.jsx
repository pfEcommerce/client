import { Button, Card, Carousel, Modal } from 'react-bootstrap'
import StyledButton from './styles/styled_button/styledButton.js'
import StyledNavbar from './styles/styled_navbar/styledNavbar.js';
import StyledSearchbar from './styles/styled_searchbar/styledSearchbar.js';
import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import axios from 'axios';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState,useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import ProductsMain from './productsMain/index.jsx';
import {getProducts} from "../Redux/actions/productsActions.js"
export default function Home () {
    
    const [modalLogin, setModalLogin] = useState(false);

  /*   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

    const dispatch = useDispatch(); 
   // const [mock,setMock]= useState([])
    const mockGames = useSelector((state) => state.games);

    useEffect(() => {
      dispatch(getProducts())  
    
    }, [dispatch]);

    // console.log('mock',mock)
    
    return (
        <>  
            <Navbar setModalLogin={setModalLogin}></Navbar>
            <Login 
            modalLogin={modalLogin}
            setModalLogin={setModalLogin}
            />
            <EmblaCarousel array={mockGames} />
            <ProductsMain/>
        </>
    )
}