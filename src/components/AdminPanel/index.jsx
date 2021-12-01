import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOrders } from "../../Redux/actions/adminActions.js";
import { useAuth0 } from "@auth0/auth0-react";
import { clearProduct } from "../../Redux/actions/productsActions.js";
import { Link, NavLink } from "react-router-dom";

import { MdOutlineFavoriteBorder, MdOutlineFavorite, MdOutlineAdminPanelSettings } from "react-icons/md";




import StyledAdminPanel from "../styles/styled_admin_panel/StyledAdminPanel.js"
import BarChart from "./BarChart/index.js";
import LineChart from "./LineChart/index.jsx"
import StockChart from './StockChart'
import Products from './FormProduct'
import Categories from './FormCategories'
import Query from "./QueryProducts";






export default function AdminPanel() {
    const { isAuthenticated, user } = useAuth0();

    const userData = useSelector((state) => state.rootReducer.user);
    const state = useSelector(state => state.adminReducer.orders)
    const dispatch = useDispatch()

    let Scroll = require('react-scroll');
    let Element = Scroll.Element;
    let scroller = Scroll.scroller;

    useEffect(() => {
        scroller.scrollTo('scroll', {
            offset: -20,
            duration: 1000
        })
    }, [])

    useEffect(() => {
        dispatch(getOrders())
    }, [])


    const [selectedChart, setSelectedChart] = useState(<LineChart state={state} />)
    const [actual, setActual] = useState('line')


    function selectChart(chart) {
        switch (chart) {
            case 'line': {
                setActual(chart)
                return setSelectedChart(<LineChart state={state} />)
            }

            case 'bar': {
                setActual(chart)
                return setSelectedChart(<BarChart state={state} />)
            }

            case 'stock': {
                setActual(chart)
                return setSelectedChart(<StockChart state={state} />)
            }

            case 'product': {
                setActual(chart)
                return setSelectedChart(<Products state={state} />)
            }
            case 'category': {
                setActual(chart)
                return setSelectedChart(<Categories state={state} />)
            }
            case 'query': {
                setActual(chart)
                return setSelectedChart(<Query state={state} />)
            }
            default:
                break;
        }
    }

    return (
        <Element name="scroll">
            <StyledAdminPanel>
                <div className="container">
                    <h1>Panel de administrador</h1>
                    <div className="options">
                        <div>Panel principal</div>
                        <div>Control de videojuegos</div>
                        <div>Control de Stock</div>
                        {isAuthenticated && userData.superAdmin === true ?
                            <Link to='/spAdmin' className="link" style={{ textDecoration: 'none' }}>
                                <div>
                                    <MdOutlineAdminPanelSettings className="icon" />
                                    <span>Hero</span>
                                </div>
                            </Link>
                            :
                            ''}
                    </div>
                    <div className="selected">
                        <div className="options2">
                            <button className={actual === 'line' ? "selectedOp" : "btn-op"} onClick={() => selectChart('line')}>Ventas mensuales</button>
                            <button className={actual === 'bar' ? "selectedOp" : "btn-op"} onClick={() => selectChart('bar')}>Liquidacion mensual</button>
                            <button className={actual === 'stock' ? "selectedOp" : "btn-op"} onClick={() => selectChart('stock')}>Stock de juegos</button>
                            <button className={actual === 'product' ? "selectedOp" : "btn-op"} onClick={() => selectChart('product')}>Productos</button>
                            <button className={actual === 'category' ? "selectedOp" : "btn-op"} onClick={() => selectChart('category')}>Categorías</button>
                            <button className={actual === 'query' ? "selectedOp" : "btn-op"} onClick={() => selectChart('query')}>Consultar productos para editar</button>
                        </div>
                        <div className="display">
                            {selectedChart}
                        </div>
                    </div>
                </div>
            </StyledAdminPanel>
        </Element>
    )
}