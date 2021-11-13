import  { GETPRODUCTS } from  "../actions/productsActions.js" 
import  { GETCATEGORIES } from  "../actions/categoriesActions.js" 
import  { GETDETAIL } from  "../actions/detailActions.js"


const initialState = {
    games: [],
    categories:[],
    detailProduct:[]
}


export default function reducer(state = initialState, action){
    switch(action.type){
          case GETPRODUCTS:
              return {
              ...state,
              games: action.payload,
              }
          case GETCATEGORIES:
              return {
              ...state,
              categories:action.payload,
              }
          case GETDETAIL:
              return {
                  ...state,
                  detailProduct:action.payload
              }

          
            
             














        default: return state
    }
}