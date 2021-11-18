import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOrders } from "../../Redux/actions/adminActions.js";
import StyledAdminPanel from "../styles/styled_admin_panel/StyledAdminPanel.js"
import StyledButton from '../styles/styled_button/styledButton.js'
import LineChart from "./LineChart/index.jsx"




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
                            <StyledButton>Ventas mensuales</StyledButton>
                            <StyledButton>Liquidacion mensual</StyledButton>
                            <StyledButton>Panel principal 3</StyledButton>
                        </div>
                        <div className="display">
                            <LineChart state={state} />
                        </div>
                    </div>
                </div>
            </StyledAdminPanel>
        </Element>
    )
}