import axios from "axios";
export const EDITPRODUCT = "EDIT_PRODUCT";




export const editProduct = (payload) => {
	return function (dispatch) {
		return axios.put(`/products/${payload.id}`,payload)
			.then((product) => {
				dispatch(
					{
						type: EDITPRODUCT,
						payload: product.data
					}
				)
			})
			.catch() //check errors
	}
}