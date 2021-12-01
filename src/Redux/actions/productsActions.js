import axios from "axios";
export const GETPRODUCTS = "GET_PRODUCTS";
export const GETNAMEPRODUCTS = "GET_NAME_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT,";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const POSTPRODUCT = "POST_PRODUCT";
export const SETCATEGORYTOPRODUCT = "SETCATEGORYTOPRODUCT";
export const UNSETCATEGORYTOPRODUCT = "UNSETCATEGORYTOPRODUCT";
export const CREATEPRODUCT = "CREATEPRODUCT"
//funcion para traer todos los productos
export function getProducts(category) {
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
    const data = await axios.post("/products/addProduct", payload)

    return {
      type: POSTPRODUCT,
      data
    }
  }
}

const createProduct = (product) => {
  return {
    type: CREATEPRODUCT,
    product
  };
};
export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/products`, { ...newProduct });
      return dispatch(createProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
// export function putProduct(payload, id) {
//   return async function (dispatch) {
//     await axios.post("/products/" + id, payload);
//     return dispatch({
//       type: UPDATE_PRODUCTS,
//       payload,
//       id
//     });
//   };
// }

export function getProductDetail(id) {
  return function (dispatch) {
    fetch(`/products/` + id)
      .then((res) => res.json())
      .then((detail) =>
        dispatch({
          type: GET_PRODUCT_DETAIL,
          payload: detail,
        })
      );
  };
}
const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCTS,
    product
  };
};

export const editProduct = (id, updatedProduct) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/products/${id}`, { ...updatedProduct });
      return dispatch(updateProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const setCategoryToProduct = (product) => {
  return {
    type: SETCATEGORYTOPRODUCT,
    product
  };
};

export const addCategoryToProduct = (productId, categoryId) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`/products/${productId}/category/${categoryId}`);
      return dispatch(setCategoryToProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};

const unsetCategoryToProduct = (product) => {
  return {
    type: UNSETCATEGORYTOPRODUCT,
    product
  };
};
export const removeCategoryToProduct = (productId, categoryId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/products/${productId}/category/${categoryId}`);
      return dispatch(unsetCategoryToProduct(res.data));
    } catch (err) {
      console.log(err);
    }
  };
};



