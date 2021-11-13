import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import axios from 'axios';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import logger from '../Redux/actions/utilityActions.js';
import { auth0, useAuth0 } from '@auth0/auth0-react'

export default function Prueba() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [modalLogin, setModalLogin] = useState(false);
  const [loginUser, setLoginUser] = useState()
  const [game, setGame] = useState([]);
  const [mock, setMock] = useState([]);

  const dispatch = useDispatch()

  /*   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */


  useEffect(() => {
    if (isAuthenticated) {
      dispatch(logger(user))
    }
    axios.get('http://localhost:3001/products')
      .then(p => setMock(p.data))
  }, [])

  return (
    <>
      <Navbar
        game={game}
        setGame={setGame}
        setModalLogin={setModalLogin}
      ></Navbar>
      <Login modalLogin={modalLogin} setModalLogin={setModalLogin} />
      <EmblaCarousel array={mock} />
      <ProductsMain setGame={setGame} game={game} mock={mock} />
    </>
  );
}
