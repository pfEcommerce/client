import axios from 'axios';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
export const LOGGER = 'LOGGER';

export function logger(data) {
    return function (dispatch) {
        axios.post("http://localhost:3001/users/login", data)
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

export function sendProductToPay(userEmail){
    return function(dispatch) {
        axios.post(`http://localhost:3001/payment/${userEmail}`)
            .then(res => res.data)
            .then(r => dispatch({
                type: 'SENDPRODUCTOPAY',
                payload: r
            }))
    }
}

export function getPaymentId(id){
    return function(dispatch){
        axios.get(`http://localhost:3001/payment/${id}`)
        .then(res => res.data)
        .then(r => dispatch({
            type: 'PAYMENTID',
            payload: r
        }))
    }
}

export async function generateOrders(orders, email){
    return async function(dispatch){
        let newOrders = await orders.forEach(e => (axios.post(`http://localhost:3001/orders/${email}`, e)))
        return {
            type: 'NEWORDERS',
        }
    }
    
}