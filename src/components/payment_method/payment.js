import React from 'react';
import mercadopago from 'mercadopago';
import useScript from './useScript.js'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function payment() {
    const carrito = useSelector((state) => state.cartItems)

    const mp = new MercadoPago('PUBLIC_KEY', {
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

                        // fetch(
                        //     `/purchase/${correo}`,
                        //     {
                        //         // entry point backend
                        //         method: "POST",
                        //         headers: {
                        //             "Access-Control-Allow-Origin": "*",
                        //             "Access-Control-Request-Method":
                        //                 "GET, POST, DELETE, PUT, OPTIONS",
                        //             "Content-Type": "application/json",
                        //         },
                        // body: JSON.stringify({
                        //     token,
                        //     issuer_id,
                        //     orders,
                        //     payment_method_id,
                        //     transaction_amount: 1000,
                        //     installments: Number(installments),
                        //     description: "Descripción del producto",
                        //     payer: {
                        //         email:correo,
                        //         identification: {
                        //             type: identificationType,
                        //             number: identificationNumber,
                        //         },
                        //     },
                        // }),
                        //     }
                        // )
                        //     .then((res) => res.json())
                        axios.post(`/purchase/${correo}`, {
                            token,
                            payment_method_id,
                            issuer_id,
                            installments: Number(installments),
                            payer: {
                                email: correo,
                                identification: {
                                    type: identificationType,
                                    number: identificationNumber,
                                },
                            },
                            orders
                        })
                            .then((data) => setResultPayment(data))
                            .catch((err) => {
                                setResultPayment(err);
                            });
                    },
                },
            });
        }
    }, [MercadoPago]);

    return (
        <div>
            
        </div>
        
    )
} */