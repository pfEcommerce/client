import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { Link } from 'react-router-dom';
import { sendUserToPay, getPaymentId } from '../../Redux/actions/utilityActions';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import Container from '../styles/styled_ordersList/styledOrdersList'
import { generateOrders } from '../../Redux/actions/utilityActions';

export default function Payment() {
    const userEmail = useSelector((state) => state.rootReducer.user.email)
    const finalId = useSelector((state) => state.rootReducer.paymentData.id)
    const userOrders = useSelector((state) => state.rootReducer.orders) 
    const dispatch = useDispatch();
    const [ total, setTotal] = useState(0)
    

    const mp = useMercadopago.v2('TEST-97a54351-5d5d-4ce7-ab93-0efa46f0969f', {
        locale: 'en-US'
    })

     useEffect(() => {
        if(userOrders.length){
            setTotal(userOrders.map(e => e.price).reduce((a,b) => a + b).toFixed(2))
        }
    }, [total])
     
    console.log(mp)
    /*useEffect(() => {
        if (mp) {
            mp.checkout({
                preference: {
                    id: finalId
                },
                render: {
                    container: '.cho-container',
                    label: 'Payment',
                }
                
            })
        }
        
    }, [Payment])   */

    const mercadopago = mp.checkout({
        preference: {
            id: finalId
        }
    })

     useEffect(() => {
        dispatch(sendUserToPay(total))
        
    }, [userOrders]) 
    
    const handleClick = (name) => {
        const filtering = userOrders.filter(e => e.name !== name)
        dispatch(generateOrders(filtering))
        
    }
    
    const text = 'No orders found'
    
    return (
        <Container>
            {userOrders.length ?
            <>
            <h3>Review your order</h3>
            <table>
                <tr className='productName'>
                   <th> Product </th>
                   <th>Price</th>
                </tr>
                { userOrders.map(e => (
                    <tr>
                        <td>{e.name}</td>
                        <td>{'$' + e.price}</td>
                        <td><button onClick={() => handleClick(e.name)}> X </button></td>
                    </tr>
                ))}
               <tr>
                    <td>Total</td>
                    <td> ${total}</td>
               </tr>
               
            </table>
            <button onClick={mercadopago()}> </button> 
            </>: text
            }
            
        </Container>
    )
}