import axios from "axios";
export const GET_WISHLIST = "GET_WISHLIST"

export function getWishList (mail){

    return async function (dispatch){
        let wish = axios("/wishes", mail)
        return dispatch({
            type: GET_WISHLIST,
            payload: wish.data   
        })
    }

}