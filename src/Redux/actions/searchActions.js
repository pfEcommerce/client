import axios from "axios";
export const GETNAMEPRODUCTS = "GET_NAME_PRODUCTS";


export function getNameProducts(name) {
return async function (dispatch) {
  try {
    let resp = await axios.get(`http://localhost:3001/products?name=${name}`)
    return dispatch({
    type:GETNAMEPRODUCTS,
    payload:resp.data
    })
  } catch (error) {
      console.log(error)
  };
};
};