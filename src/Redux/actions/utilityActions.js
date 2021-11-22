import axios from 'axios';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
export const LOGGER = 'LOGGER';

export function logger(data) {
    return function (dispatch) {
        axios.post("/users/login", data)
            .then(res => res.data)
            .then(r => dispatch({
                type: LOGGER,
                payload: r
            }))
    };
}

export function dislogg () {
    return {
        type: 'DISLOGG',
    }
}

export function sendUserToPay(total){
    console.log(total)
    return function(dispatch) {
        axios.post('http://localhost:3001/payment', {
            data: total})
            .then(res => res.data)
            .then(r => dispatch({
                type: 'SENDUSERTOPAY',
                payload: r
            }))
    }
} 

/* export function getPaymentId(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/payment/${id}`)
        .then(res => res.data)
        .then(r => dispatch({
            type: 'PAYMENTID',
            payload: r
        }))
    }
} */

/* export function dataOrders(data){
    return function(dispatch){
        axios.post('http://localhost:3001/payment', data)
            .then(res => res.data)
            .then(r => dispatch({
                type: 'SENDUSERTOPAY',
                payload: r
            }))
    }
} */
export function generateOrders(orders){
    return async function(dispatch){
        /* let newOrders = [];
        
        for (let i = 0; i < orders.length; i++) {
            let result = await axios.post(`http://localhost:3001/orders/${email}`, orders[i])
            console.log(result.data)
            newOrders.push(result.data)
        } */
        
        return dispatch({
            type:'NEWORDERS',
            payload: orders
        })
    }
}
