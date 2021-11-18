import axios from "axios";
export const POSTPRODUCT = "CREATE_PRODUCTO";


export function postProduct(payload) {
    return async function () {
        const data = await axios.post("http://localhost:3001/products",payload);

        return {
        type: POSTPRODUCT,
        data
        }
    }
}