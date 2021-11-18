import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOrders } from "../../Redux/actions/adminActions.js";




import StyledAdminPanel from "../styles/styled_admin_panel/StyledAdminPanel.js"
import StyledButton from '../styles/styled_button/styledButton.js'
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
            duration: 1000
        })
    }, [])

    useEffect(() => {
        dispatch(getOrders())
    }, [])


    const [selectedChart , setSelectedChart] = useState(<LineChart state={state} />)


    function selectChart (chart){
        switch (chart) {
            case 'line':{

                return setSelectedChart(<LineChart state={state} />)
            }
        
            case 'bar':
                return setSelectedChart(<BarChart state={state} />)

            case 'stock':
                return setSelectedChart(<StockChart state={state} />)
            default:
                break;
        }
    }



    return (
        <Element name="scroll">
            <StyledAdminPanel>
                <div className="container">
                    <div className="options">
                        <div>Panel principal</div>
                        <div>Control de videojuegos</div>
                        <div>Control de Stock</div>
                    </div>
                    <div className="selected">
                        <div className="options2">
                            <StyledButton onClick={()=>selectChart('line')}>Ventas mensuales</StyledButton>
                            <StyledButton onClick={()=>selectChart('bar')}>Liquidacion mensual</StyledButton>
                            <StyledButton onClick={()=>selectChart('stock')}>Stock de juegos</StyledButton>
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