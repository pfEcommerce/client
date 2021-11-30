import axios from "axios";

export function getOrders() {
    return async function (dispatch) {
        const orders = await axios.get('http://localhost:3001/orders');
        dispatch({
            type: 'GET_ORDERS',
            payload: orders.data
        });
    };
};

export function deleteOrders(data){
    console.log(data)
    return async function(dispatch){
        axios.post('/orders/delete', data)
        .then(res => res.data)
        .then(r => dispatch({
            type: 'DELETE_ORDERS',
            payload: r
        }))
    }
}


