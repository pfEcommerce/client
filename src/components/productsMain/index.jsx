//import axios from "axios"
//import { useEffect, useState } from "react"
import  ProductCard  from "../productCard"
import {useSelector } from "react-redux";

export default function ProductsMain (){

    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    const games = useSelector((state) => state.games);
    return(
        <div style={{display: 'flex', 'flex-wrap':'wrap', 'justify-content':'space-evenly' , width : '80%' , margin: 'auto'}}>
            {games.length > 0 ? games.map(e=><ProductCard key={e.id} p={e}/>) : 'Not found'}
        </div>
    )
}