import React from 'react';
import mercadopago from 'mercadopago';
import useScript from './useScript.js'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formConfig } from './formConfig';


export default function payment() {
    const carrito = useSelector((state) => state.cartReducer.cartItems)
    
    const mp = new MercadoPago('TEST-97a54351-5d5d-4ce7-ab93-0efa46f0969f', {
        locale: 'es-AR'
    });
    let total = carrito.total
    
    useEffect(() => {
        if (mp) {
            const mp = new MercadoPago('TEST-97a54351-5d5d-4ce7-ab93-0efa46f0969f');
            const cardForm = mp.cardForm({
                amount: total.toString(),
                autoMount: true,
                form: formConfig,
                callbacks: {
                    onFormMounted: (error) => {
                        if (error)
                            return console.warn(
                                "Form Mounted handling error: ",
                                error
                            );
                    },

                    onSubmit: (event) => {
                        event.preventDefault();
                        const {
                            paymentMethodId: payment_method_id,
                            issuerId: issuer_id,
                            cardholderEmail: email,
                            token,
                            installments,
                            identificationNumber,
                            identificationType,
                        } = cardForm.getCardFormData();

                       
                        axios.post(`/payment/${userEmail}`, {
                            userEmail: 
                        })
                            .then((data) => setResultPayment(data))
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                },
            });
        }
    }, [mp]);

    return resultPayment;
} 