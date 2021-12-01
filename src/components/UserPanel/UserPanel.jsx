import { useSelector } from "react-redux";
import { StyledUserPanel } from "../styles/styled_userPanel/styledUserPanel";
import StyledButton from "../styles/styled_button/styledButton";
import StyledOption from "../styles/styled_ProfileOptions/styledOption";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function UserPanel() {
    /* const products = useSelector(state => state.rootReducer.user.productsBought)
    const idProducts = products.map(e => e)
    const games = useSelector(state => state.rootReducer.games) */

    const userOrders= useSelector((state) => state.rootReducer.orders);
    const prodUser = {
        productos: userOrders.length > 0 && userOrders.map(e => (
            {
                id: e.id,
                price: e.price,
                productImage: e.image,
                productName: e.name,
                date: e.createdAt
            }
        ))
    }; 

    //let gamesId = []

   /*  for (let i = 0; i < games.length; i++) {
        idProducts.map(p => {
            if(p === games[i].id){
                gamesId.push([games[i].name, games[i].id], games[i].price)
            }
        }
        )
        
    } */
    /* console.log(gamesId) */

    let Scroll = require('react-scroll');
    let Element = Scroll.Element;
    let scroller = Scroll.scroller;

    useEffect(() => {
        scroller.scrollTo('scroll', {
            offset: -20,
            duration: 1000
        })
    }, [])

    return (
        <Element name="scroll">
        <StyledUserPanel>
            <div className="container">
                <div className="buttons">
                    <StyledButton>Editar usuario</StyledButton>
                    <StyledButton>Historial de compra</StyledButton>
                    <StyledButton>Ayuda</StyledButton>
                </div>
                <div className="container-option">

                    {userOrders.length > 0 ? prodUser.productos.map(e =>
                        <StyledOption>
                            <Link to={`/detail/${e.id}`} style={{textDecoration:'none'}}>
                                <div className="titleInfo">
                                    <h4>{e.productName}</h4>
                                    <div className="gameIMG">
                                        <img src={e.productImage} alt="gameImage" />
                                    </div>
                                </div>
                            </Link>


                            <div className="orderInfo">
                                <div>
                                    <h5>Order ID</h5>
                                </div>
                                <div>
                                    <h6>{e.id}</h6>
                                </div>
                            </div >

                            <div className="orderInfo">
                                <h4>Fecha de compra</h4>
                                <h4>{e.date.slice(0, -14).split('-').reverse().join('/')}</h4>
                            </div>

                            <div className="orderInfo">
                                <h4>Precio</h4>
                                <h4>{e.price}</h4>
                            </div>



                        </StyledOption>
                    ): <h4 style={{color:'white'}}>No hay ordenes para este usuario.</h4>}

                </div>
            </div>
        </StyledUserPanel>
        </Element>
    )
};