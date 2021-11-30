import axios from "axios";
export const GETPRODUCTS = "GET_PRODUCTS";
export const POSTPRODUCT = "POST_PRODUCT";
export const GETNAMEPRODUCTS = "GET_NAME_PRODUCTS";
export const EDITPRODUCT = "EDIT_PRODUCT";

//funcion para traer todos los productos
export function getProducts(category) {
  console.log(category);
  return function (dispatch) {
    axios
      .get("/products") //conexion entre front y back
      .then((res) => res.data)
      .then((res) => {
        let result;

        if (category !== "All Categories") {
          result = res.filter((m) =>
            m.categories?.some((p) => p.name === category)
          );
          console.log(result);
        } else if (category === "All Categories") {
          result = res;
          console.log(result);
        }
        dispatch({
          type: GETPRODUCTS,
          payload: result,
        });
      });
  };
}

export function getProductsByName(name) {
  //name es lo q el usuario escribe/search
  return async function (dispatch) {
    try {
      let resp = await axios.get(`/products?name=${name}`); // la ruta del back + el name q le llega por payload
      return dispatch({
        type: GETNAMEPRODUCTS,
        payload: resp.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function postProduct(payload) {
    return async function () {
        const data = await axios.post("/products/addProduct",payload)
        
        return {
        type: POSTPRODUCT,
         data
        }
        }
      } 
    



export function editProduct(payload, id) {
  return async function () {
      const data = await axios.post("/products/" + payload + id);
   
      return {
      type: EDITPRODUCT,
      data
      
      }
  }
}



