import axios from "axios";
export const GETCATEGORIES = "GET_CATEGORIES";


//funcion para traer todos las categorias
export function getCategories (){
    return async function(dispatch) {
    var res = await axios.get("http://localhost:3001/categories")
    
     dispatch({
    type: GETCATEGORIES,
    payload:res.data
    });
    };
    };