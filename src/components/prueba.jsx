import Navbar from './navbar/index.jsx';
import axios from 'axios';
import StCarousel from './carousel/carousel.jsx';
import { useState,useEffect} from 'react';import ProductsMain from './productsMain/index.jsx';
;

export default function () {
    
    return (
        <>  
            <Navbar/>
            {/* <StCarousel style={{height: '30rem'}} products={mock}/> */}
            <ProductsMain/>
        </>
    )
}