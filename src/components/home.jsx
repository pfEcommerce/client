import EmblaCarousel from './carousel/carousel.jsx';
import { useEffect, useState } from 'react';
import { getProducts} from "../Redux/actions/productsActions.js";
import { useDispatch , useSelector} from 'react-redux';
import ProductsMain from './productsMain/index.jsx';
import {logger} from '../Redux/actions/utilityActions.js';
import {dislogg} from '../Redux/actions/utilityActions.js';
import { useAuth0 } from '@auth0/auth0-react'
import { getCategories } from '../Redux/actions/categoriesActions.js';



export default function Prueba({game,setGame,setModalLogin,price,setPrice}) {

  const { user, isAuthenticated} = useAuth0();
  /* const [modalLogin, setModalLogin] = useState(false);
  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0) */
  const mockGames = useSelector((state) => state.rootReducer.games);
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.rootReducer.categories)
  const [ filterCategories, setFilterCategories ] = useState('all');
  const [ currentPage, setCurrentPage ] = useState(1);

  const currentPageByCategory = (e) => {
    setFilterCategories(e.target.value)
    setCurrentPage(1)
  }
   

    useEffect(() => {
      dispatch(getCategories())
    }, [])

    useEffect(() => {
      if (isAuthenticated) {
        dispatch(logger(user))
      }
      if (!isAuthenticated) {
        dispatch(dislogg())
      }
      
      dispatch(getProducts(filterCategories))
      
      
    }, [dispatch,isAuthenticated,user, filterCategories]);

return (
  <>
    {/* <ParticlesBackground/> */}
    <EmblaCarousel array={mockGames} />
    <ProductsMain currentPage= {currentPage} setCurrentPage={setCurrentPage} price={price} setPrice={setPrice}  setGame={setGame} game={game} mock={mockGames} />
    
    <select value={filterCategories} onChange={e => currentPageByCategory(e)}>
        <option value='all'>All Categories</option>
            {allCategories.map(m => (
              <option value={m.name}>{m.name}</option>
            ))}
      </select>
    
  </>
)
}
