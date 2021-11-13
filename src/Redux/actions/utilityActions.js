import axios from 'axios';
export const LOGGER = 'LOGGER';

export default function logger (data){
    return async function(dispatch) {
    const result = axios.post("http://localhost:3001/users/login", data)
    .then(res => res.data)
    .then(r=>dispatch({
        type: LOGGER,
        payload: r
    }))
    };
};