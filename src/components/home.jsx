import EmblaCarousel from './carousel/carousel.jsx';
import { useEffect } from 'react';
import { getProducts } from "../Redux/actions/productsActions.js";
import { useDispatch , useSelector} from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import {logger} from '../Redux/actions/utilityActions.js';
import {dislogg} from '../Redux/actions/utilityActions.js';
import { useAuth0 } from '@auth0/auth0-react'


export default function Prueba({game,setGame,setModalLogin,price,setPrice}) {

  const { user, isAuthenticated} = useAuth0();
  /* const [modalLogin, setModalLogin] = useState(false);
  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0) */
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
    {/* <ParticlesBackground/> */}
    <EmblaCarousel array={mockGames} />
    <ProductsMain price={price} setPrice={setPrice}  setGame={setGame} game={game} mock={mockGames} />
    
  </>
)
}
