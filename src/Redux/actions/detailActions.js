import axios from "axios";
export const GETDETAIL = "GET_DETAIL";


export function getDetail (id) {
  console.log(id)
   return async function (dispatch) {
    try {
      let resp = await axios.get("http://localhost:3001/products/" + id)
      return dispatch({
      type:GETDETAIL,
      payload:resp.data
      })
    } catch(error) {
        console.log(error);
    }
   }
}

export const reviewAction = (review, email) => {
     return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/opinions/" + email, review)
    } catch (error) {
        console.error(error.message)
    }
  }
}
  




