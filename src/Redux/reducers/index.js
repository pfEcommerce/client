import  { GETPRODUCTS } from  "./actions/productsActions.js" 
import  { GETCATEGORIES } from  "./actions/categoriesActions.js" 



const initialState = {
    games: [],
    categories:[]
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
             














        default: return state
    }
}