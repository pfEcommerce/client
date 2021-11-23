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

export function paying(data){
    return function(dispatch){
        axios.post('/payment', data)
            .then(res => res.data)
            .then(r => dispatch({
                type: 'PAYING',
                payload: data
            }))
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