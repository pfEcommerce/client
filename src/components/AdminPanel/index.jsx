import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOrders } from "../../Redux/actions/adminActions.js";




import StyledAdminPanel from "../styles/styled_admin_panel/StyledAdminPanel.js"
import BarChart from "./BarChart/index.js";
import LineChart from "./LineChart/index.jsx"
import StockChart from './StockChart'





export default function AdminPanel() {

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
                    </div>
                    <div className="selected">
                        <div className="options2">
                            <button className={actual === 'line' ? "selectedOp" : "btn-op"} onClick={() => selectChart('line')}>Ventas mensuales</button>
                            <button className={actual === 'bar' ? "selectedOp" : "btn-op"} onClick={() => selectChart('bar')}>Liquidacion mensual</button>
                            <button className={actual === 'stock' ? "selectedOp" : "btn-op"} onClick={() => selectChart('stock')}>Stock de juegos</button>
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