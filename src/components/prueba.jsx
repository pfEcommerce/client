import Navbar from './navbar/index.jsx';
import axios from 'axios';
import EmblaCarousel from './carousel/carousel.jsx';
import { useState,useEffect} from 'react';
import ProductsMain from './productsMain/index.jsx';


export default function () {

    const [mock,setMock] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:3001/products')
        .then(p => setMock(p.data) )

    }, [])

    // console.log('mock',mock)
    
    return (
        <>  
            <Navbar/>
            <EmblaCarousel array={mock}/>
            <ProductsMain mock={mock}/>
        </>
    )
}