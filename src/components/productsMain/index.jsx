import axios from "axios"
import { useEffect, useState } from "react"
import  ProductCard  from "../productCard"


export default function ProductsMain (){

    const [mock,setMock] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:3001/products')
        .then(p => setMock(p.data) )

    }, [])



    return(
        <div>
            {mock.length > 0 ? mock.map(e=><ProductCard key={e.id} p={e}/>) : 'Not found'}
        </div>
    )
}