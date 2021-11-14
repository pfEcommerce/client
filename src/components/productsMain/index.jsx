
import ProductCard from "../productCard"
import { useTransition, animated } from 'react-spring'
import { useState } from "react"
import { useSelector } from "react-redux";
import { MainCards } from "../styles/styled_productsMain/styledProductsMain";
import { PagingButton } from "../styles/styled_button_scrolling/styledButtonPages";
import Pages, { PageNumber } from "../styles/styled_page_number/styled_page_number";



export default function ProductsMain({ setGame, game }) {

    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    let Scroll   = require('react-scroll');
    let Element  = Scroll.Element;
    let scroller = Scroll.scroller;
    const [estado, setEstado] = useState(true)
    const games = useSelector((state) => state.games);
    const [ currentPage, setCurrentPage ] = useState(1);
    const gamesPerPage = 6;
    let finalGameIndex = currentPage * gamesPerPage;
    let indexOfFirst = finalGameIndex - gamesPerPage;
    const currentGames = games.slice(indexOfFirst, finalGameIndex);
    const maxPages = Math.ceil(games.length / gamesPerPage);
    const pages = [];
    for(let i = 1; i<= maxPages; i++){
        pages.push(i);
    }
    
    
    const transition = useTransition(estado, {
        from: { opacity: 0, y: '-10px' },
        enter: { opacity: 1, y: '0px' },
        leave: { opacity: 0, y: '-10px' },
        delay: 400,
        config: { duration: 800 }
    })

    const handleClick = (e) => {
        e.preventDefault()
        switch(e.target.name){
            case 'right':
                setCurrentPage(currentPage+1)
                break;
            case 'left':
                setCurrentPage(currentPage-1)
                break;
            default:
                return null;
        }
        scroller.scrollTo('scrollHere',{
            smooth: 'easeInOutQuint',
        })
        
    }

    const paginado = (pages) => {
        setCurrentPage(pages)
    }


    return (  
        <>
        
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Element name='scrollHere'>
        <MainCards>
            
            {/* <StyledButton onClick={()=>setEstado(!estado)}>ASD</StyledButton> */}
            {transition((style, item) => item ? currentGames.length > 0 ? currentGames.map(e => 
            <animated.div style={style}>
                <ProductCard game={game} setGame={setGame} key={e.id} p={e} />
            </animated.div>) 
                : 'Not found' : '')}  
                  
        </MainCards>
            </Element>   
        
        
        
        
        </div>

        { <PagingButton>

        {currentPage > 1 && <button className='leftButton' name='left'onClick={(e) => handleClick(e)}> ◄ </button>}

        <PageNumber>
            {pages && pages.map(e => (
                <div key={e}>
                    <button className='pages'onClick={() => paginado(e)}>{e}</button>
                </div>
            ))}  
        </PageNumber>

        {currentPage < maxPages && <button className='rightButton' name='right'onClick={(e) => handleClick(e)} > ► </button>}
        </PagingButton>}

        
        
        </>
    )
}