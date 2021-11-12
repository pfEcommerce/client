import axios from "axios"
import { useEffect, useState } from "react"
import  ProductCard  from "../productCard"


export default function ProductsMain ({mock}){


    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    

    return(
        <div style={{display: 'flex', 'flex-wrap':'wrap', 'justify-content':'space-evenly' , width : '80%' , margin: 'auto'}}>
            {mock.length > 0 ? mock.map(e=><ProductCard key={e.id} p={e}/>) : 'Not found'}
        </div>
    )
}