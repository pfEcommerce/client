import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState, useEffect } from 'react';
import { getProducts } from "../Redux/actions/productsActions.js";
import { useDispatch , useSelector} from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import {logger} from '../Redux/actions/utilityActions.js';
import {dislogg} from '../Redux/actions/utilityActions.js';
import { useAuth0 } from '@auth0/auth0-react'
import Footer from "./Footer/index.jsx";

export default function Prueba() {

  const { user, isAuthenticated} = useAuth0();
  const [modalLogin, setModalLogin] = useState(false);
  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0)
  const mockGames = useSelector((state) => state.rootReducer.games);
  const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getProducts())
},[])

useEffect(() => {
  if (isAuthenticated) {
    dispatch(logger(user))
  }
  if (!isAuthenticated) {
    dispatch(dislogg())
  }
  if(mockGames.length === 0) {
    dispatch(getProducts())
  }
}, [dispatch,isAuthenticated,user,mockGames]);

return (
  <>
    <Navbar game={game}
      setGame={setGame}
      setModalLogin={setModalLogin}
      price = {price}
      setPrice={setPrice}
      >
      </Navbar>
    <Login
      modalLogin={modalLogin}
      setModalLogin={setModalLogin}
    />
    {/* <ParticlesBackground/> */}
    <EmblaCarousel array={mockGames} />
    <ProductsMain price={price} setPrice={setPrice}  setGame={setGame} game={game} mock={mockGames} />
    <Footer/>
  </>
)
}
