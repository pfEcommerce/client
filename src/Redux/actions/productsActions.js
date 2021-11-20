import axios from "axios";
export const GETPRODUCTS = "GET_PRODUCTS";
//export const GETDETAILS = "GET_DETAILS";
//export const GETNAMEPRODUCTS = "GET_NAME_PRODUCTS";
//export const ADDPRODUCT = "ADD_PRODUCT,";


//funcion para traer todos los productos
export  function getProducts (category){
    return function(dispatch){
        axios.get("http://localhost:3001/products")//conexion entre front y back
        .then(res => res.data)
        .then(res => { 
            let result;

            if(category !== 'all'){
                result = res.filter(m => m.categories?.some(p => p.name === category))
                console.log(result)
            }    
            else if(category === 'all'){
                result = res
                console.log(result)
            }
            dispatch({
                type: GETPRODUCTS,
                payload:result
            });
            
        })    
    };
};


    // //function p traer un producto id
    // export function getDetail(id) {
    //     return async function (dispatch) {
    //         try {
    //            let resp = await axios.get(`http://localhost:3001/products/${id}`);
    //            return dispatch({
    //            type:'GETDETAILS',
    //            payload:resp.data
    //            })
    //         } catch(error){
    //             console.log(error);
    //         }
    //     } 
    //  }


 
    /* export function addProduct(payload) {//paso el payload pq esta accion no viene vacia
        return async function () {
        const data = await axios.post("http://localhost:3001/product",payload);//dispara una ruta de post pq quiero crear poke
      
        return {
            type:ADDPRODUCT,
            data
        }
        }
    }



     export function getProductsByName(name) {//name es lo q el usuario escribe/search
        return async function (dispatch) {
            try {
                let resp = await axios.get(`http://localhost:3001/products?name=${name}`);// la ruta del back + el name q le llega por payload 
                return dispatch({
                 type:GETNAMEPRODUCTS,
                 payload:resp.data
   
                }) 
               } catch (error) {
                   console.log(error)
               };
               };
            }; */