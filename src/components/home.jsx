import EmblaCarousel from "./carousel/carousel.jsx";
import { useEffect, useState } from "react";
import { getProducts } from "../Redux/actions/productsActions.js";
import { getCategories } from "../Redux/actions/categoriesActions.js";
import { useDispatch, useSelector } from "react-redux";
import ProductsMain from "./productsMain/index.jsx";
import { logger } from "../Redux/actions/utilityActions.js";
import { dislogg } from "../Redux/actions/utilityActions.js";
import { useAuth0 } from "@auth0/auth0-react";
import StyledGenres from "./styles/styled_genres/styledGenres.js";
import StyledButton from "./styles/styled_button/styledButton.js";

export default function Prueba({
  game,
  setGame,
  setModalLogin,
  price,
  setPrice,
}) {
  const { user, isAuthenticated } = useAuth0();
  /* const [modalLogin, setModalLogin] = useState(false);
  const [game, setGame] = useState([]);
  const [price, setPrice] = useState(0) */
  const mockGames = useSelector((state) => state.rootReducer.games);
  const allCategories = useSelector((state) => state.rootReducer.categories);
  const [filterCategories, setFilterCategories] = useState("All Categories");
  const [options, setOptions] = useState("All Categories")
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

useEffect(() => {
  if (isAuthenticated) {
    dispatch(logger(user))
  }
  if (!isAuthenticated) {
    dispatch(dislogg())
  }
   dispatch(getProducts(filterCategories))
}, [dispatch,isAuthenticated,user,filterCategories]);

console.log(user)
  const currentPageByCategory = (e) => {
    e.preventDefault()
    console.log(e.target.innerHTML)
    setFilterCategories(e.target.innerHTML);
    setOptions(e.target.innerHTML)
    setCurrentPage(1);
  };

  return (
    <>
      {/* <ParticlesBackground/> */}
      <EmblaCarousel array={mockGames} />
      <StyledGenres>
        <ProductsMain
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          price={price}
          setPrice={setPrice}
          setGame={setGame}
          game={game}
          mock={mockGames}
        />
        <div className="genres">
          <div>

          <h4>Categories:</h4>
          </div>
          <StyledButton onClick={(e) => currentPageByCategory(e)} value="all"><p>All Categories</p></StyledButton>
          {allCategories.map((m) => (
              <StyledButton onClick={(e) => currentPageByCategory(e)} value={m.name}>{m.name}</StyledButton>
          ))}
        </div>
      </StyledGenres>
    </>
  );
}
