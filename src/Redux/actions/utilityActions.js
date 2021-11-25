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

export function getAdmins () {
    return function (dispatch) {
        axios.get("/spAdmin")
            .then(res => res.data)
            .then(r => dispatch({
                type: 'GET_ADMINS',
                payload: r
            }))
    };
}
