import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState, useEffect } from 'react';
import { getProducts } from "../Redux/actions/productsActions.js";
import { useDispatch , useSelector} from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import logger from '../Redux/actions/utilityActions.js';
import { useAuth0 } from '@auth0/auth0-react'
import ParticlesBackground from "../particlesBackground.jsx";
import Footer from "./Footer/index.jsx";

export default function Prueba({game,setGame,setModalLogin,price,setPrice}) {

  const { user, isAuthenticated} = useAuth0();
  const mockGames = useSelector((state) => state.games);
  const dispatch = useDispatch();

useEffect(() => {
  if (isAuthenticated) {
    dispatch(logger(user))
  }
  if(mockGames.length === 0) {
    dispatch(getProducts())
  }
}, [dispatch,isAuthenticated,user,mockGames]);

return (
  <>
    {/* <ParticlesBackground/> */}
    <EmblaCarousel array={mockGames} />
    <ProductsMain price={price} setPrice={setPrice}  setGame={setGame} game={game} mock={mockGames} />
    
  </>
)
}
