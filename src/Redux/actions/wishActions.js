import axios from "axios";
export const GET_WISHLIST = "GET_WISHLIST";

export function addWishList(mail, id) {
  return async function (dispatch) {
    try {
      await axios.post("/wishes/" + mail, id);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export function getWishlist(email) {
  return async function (dispatch) {
    try {
      const wish = await axios.get("/wishes/" + email);
      dispatch({ type: GET_WISHLIST, payload: wish.data });
    } catch (error) {
      throw new Error(error);
    }
  };
}
