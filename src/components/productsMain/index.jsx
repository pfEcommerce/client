
import ProductCard from "../productCard"
import { useTransition, animated } from 'react-spring'
import { useSelector } from "react-redux";

export default function ProductsMain({ setGame, game,price,setPrice }) {

    const games = useSelector((state) => state.games);
    
    const transition = useTransition(true, {
        from: { opacity: 0, y: '-10px' },
        enter: { opacity: 1, y: '0px' },
        leave: { opacity: 0, y: '-10px' },
        delay: 400,
        config: { duration: 800 }
    })

    return (
        <div style={{ display: 'flex', 'flex-wrap': 'wrap', 'justify-content': 'space-evenly', width: '80%', margin: 'auto' }}>
            {/* <StyledButton onClick={()=>setEstado(!estado)}>ASD</StyledButton> */}
            {transition((style, item) => item ? games.length > 0 ? games.map(e => 
            <animated.div style={style}>
                <ProductCard price={price} setPrice={setPrice} game={game} setGame={setGame} key={e.id} p={e} />
            </animated.div>) 
                : 'Not found' : '')}
        </div>
        )
}