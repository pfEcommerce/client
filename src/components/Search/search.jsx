import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameProducts} from "../../Redux/actions/searchActions.js"
import StyledButton from "../styles/styled_button/styledButton.js"
import StyledSearchbar from "../styles/styled_searchbar/styledSearchbar.js"



export default function SearchBar() {
    
   const dispatch = useDispatch(); 
   const [search,setSearch] = useState("");
    


   function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(getNameProducts(search)) 


        

    }
   
return (
       <div>
         <StyledSearchbar type = "text" placeholder = "Search.."  onChange = {e=>handleInputChange(e)} />

         <StyledButton type = "submit" onClick = {e =>handleSubmit(e)}/>

       </div>



)





}
