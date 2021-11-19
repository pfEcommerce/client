import axios from 'axios';
export const LOGGER = 'LOGGER';

export function logger(data) {
    console.log(data)
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