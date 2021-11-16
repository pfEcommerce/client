import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';

export default function Checkout() {
    const mercadopago = useMercadopago.v2('TEST-97a54351-5d5d-4ce7-ab93-0efa46f0969f', {
        locale: 'en-US'
    });

    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: 'checkout'
                },
                render: {
                    container: '.cho-container',
                    label: 'Payment',
                }
            })
        }
    }, [mercadopago])

    return (
        <div>
            <div class="cho-container"/>
                
            
        </div>
    )
}