import axios from 'axios';
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

export function generateOrders(data){
    return function(dispatch){
        dispatch({
            type: 'NEWORDER',
            payload: data
        })
    }
}

export function productsBought(id, email){
    return function(dispatch){
        axios.post('/payment', {data:{
            id,
            email
        }})
        .then(res => res.data)
        .then(r => {
            dispatch({
                type: 'ProductsId',
                payload: id, email
            })
        })
     }
    }