import axios from "axios";
export const GETDETAIL = "GET_DETAIL";


export function getDetail (id) {
  console.log(id)
   return async function (dispatch) {
    try {
      let resp = await axios.get("/products/" + id)
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
      await axios.post("/opinions/" + email, review)
    } catch (error) {
        console.error(error.message)
    }
  }
}
  




