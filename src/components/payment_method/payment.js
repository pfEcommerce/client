import React from 'react';
import mercadopago from 'mercadopago';
import useScript from './useScript.js'

export default function payment() {
    const mp = new MercadoPago('PUBLIC_KEY', {
        locale: 'es-AR'
    });

    return (
        <div>
            
        </div>
        
    )
}