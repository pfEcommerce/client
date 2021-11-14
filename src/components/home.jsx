import Login from "./Login/index.jsx"
import Navbar from './navbar/index.jsx';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState, useEffect } from 'react';
import { getProducts } from "../Redux/actions/productsActions.js";
import { useDispatch , useSelector} from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import logger from '../Redux/actions/utilityActions.js';
import { auth0, useAuth0 } from '@auth0/auth0-react'


export default function Home() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [modalLogin, setModalLogin] = useState(false);
  const [loginUser, setLoginUser] = useState()
  const [game, setGame] = useState([]);
  const [mock, setMock] = useState([]);
  const mockGames = useSelector((state) => state.games);
  const dispatch = useDispatch();


  /*   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

// const [mock,setMock]= useState([])
useEffect(() => {
  
  if (isAuthenticated) {
    dispatch(logger(user))
  }

  dispatch(getProducts())
  
}, [dispatch]);
// console.log('mock',mock)

return (
  <>
    <Navbar game={game}
      setGame={setGame}
      setModalLogin={setModalLogin}></Navbar>
    <Login
      modalLogin={modalLogin}
      setModalLogin={setModalLogin}
    />
    
    <EmblaCarousel array={mockGames} />
    <ProductsMain setGame={setGame} game={game} mock={mockGames} />
  </>
)
}
