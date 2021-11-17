import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { Link } from 'react-router-dom';
import { sendProductToPay, getPaymentId } from '../../Redux/actions/utilityActions';
import { useSelector, useDispatch } from 'react-redux';

export default function Checkout() {
    const paymentId = useSelector((state) => state.rootReducer.paymentId)
    const userEmail = useSelector((state) => state.rootReducer.user.email)
    const finalId = useSelector((state) => state.rootReducer.paymentData.id)
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(sendProductToPay(userEmail))
       dispatch(getPaymentId(paymentId))
    }, [])



   
    const mercadopago = useMercadopago.v2('TEST-97a54351-5d5d-4ce7-ab93-0efa46f0969f', {
        locale: 'en-US'
    });
    
    useEffect(() => {
        if (mercadopago) {
            mercadopago.checkout({
                preference: {
                    id: finalId
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