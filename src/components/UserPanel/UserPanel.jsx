import { useSelector, useDispatch } from "react-redux";
import { StyledUserPanel } from "../styles/styled_userPanel/styledUserPanel";
import StyledButton from "../styles/styled_button/styledButton";
import StyledOption from "../styles/styled_ProfileOptions/styledOption";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getOrdersForUserPanel } from '../../Redux/actions/utilityActions'
export default function UserPanel() {
    const userProd = useSelector(state => state.rootReducer.user.email)
    const picture = useSelector(state => state.rootReducer.user.photo)
    const games = useSelector(state => state.rootReducer.games) 
    const purchased = useSelector (state => state.rootReducer.user.productsBought)
    console.log(purchased)
    console.log(games)
    const dispatch = useDispatch()
    const userOrders = useSelector((state) => state.rootReducer.orderSuccess);


    /* var userOrdersId = [{
        id:[],
        bought:[],
        price:[],
        name: [],
        image: []
    }]
    for (let i = 0; i < userOrders.length; i++) { 
        if(userOrders[i].userEmail === userProd){
            userOrdersId[0].id.push(
                userOrders[i].id 
            )
            userOrdersId[0].bought.push(
                userOrders[i].createdAt
            )
            userOrdersId[0].price.push(
                userOrders[i].price
            );  
            
        }
    } */
    
    let thisUserOrders = []
    userOrders.map(e => {
        if(e.userEmail === userProd){
            
            thisUserOrders.push(e)
        }
        
    })
    
    let thisUserGames = []
    purchased.map(p => {
        games.map(c => {
            if(p === c.id){
                thisUserGames.push({
                    name: c.name,
                    image: c.image
                })
                
            }
        })
    })
    console.log(thisUserGames)
    const prodUser = {
        
        productos: thisUserOrders.map(p => (
                {
                    id: p.id,
                    price: p.price,
                    date: p.createdAt,
                }

        ))
    }
   console.log(prodUser)
    
    /* const prodUser = {
        productos: userOrders.length > 0 && userOrders.map(e => (
            {
                id: e.id,
                price: e.price,
                productImage: e.image,
                productName: e.name,
                date: e.createdAt
            }
        ))
    };    */
    

        
    
    useEffect(() => {
        dispatch(getOrdersForUserPanel())
    }, [])


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

                    {thisUserOrders.length > 0 ? prodUser.productos.map(e =>
                        <StyledOption>
                                <div className="titleInfo">
                                    <h4>{userProd}</h4>
                                    {picture ?
                                    <div className="gameIMG">
                                        
                                        <img src={picture} alt="profile pic" />
                                        : 
                                    </div>
                                    : <></>}
                                </div>
                                                 

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