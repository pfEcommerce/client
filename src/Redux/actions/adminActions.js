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

export function getOrdersByEmail(email) {
    console.log(email)
    return async function (dispatch) {
      try {
        let resp = await axios.get(`/searchOrders?name=${email}`); 
        return dispatch({
          type: 'GET_ORDERS_BY_EMAIL',
          payload: resp.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

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


