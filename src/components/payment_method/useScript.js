import React, { useEffect } from 'react';
import { useMercadopago } from 'react-sdk-mercadopago';
import { Link } from 'react-router-dom';
import { sendUserToPay, getPaymentId } from '../../Redux/actions/utilityActions';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../styles/styled_ordersList/styledOrdersList'

export default function Checkout() {
    const paymentId = useSelector((state) => state.rootReducer.paymentId)
    const userEmail = useSelector((state) => state.rootReducer.user.email)
    const finalId = useSelector((state) => state.rootReducer.paymentData.id)
    /* const userOrders = useSelector((state) => state.rootReducer.user.orders)
    console.log(userOrders)  */
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(sendUserToPay(userEmail))
       dispatch(getPaymentId(paymentId))
    }, [])

    let userOrders = [ {name:'gta', price: 15}, {name:'the witcher', price:10},{name:'tomb raider',price:17}]
    let total = 0
    
    userOrders.forEach((a) => {
        total += a.price;
    });
    /* for (let i = 0; i < userOrders.length; i++) {
        var total = 0;
        userOrders[i].price + total
        console.log(total)
    } */
    

   
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
        <Container>
            <h3>Review your order</h3>
            <ul>
                <h5 className='productName'>Product</h5>
                <div className='product'>
                {userOrders.map(e =><li>{e.name}</li>)}
                </div>
            </ul>
            <ul>
                <h5 className='priceName'>Price</h5>
                <div className='price'>
                    {userOrders.map(e => <li>{e.price}</li>)}
                </div>
            </ul>
            <ul>
                <h5 className='totalName'>Total</h5>
                <div className='total'>
                    {total}
                </div>
            </ul>
            <div class="cho-container"/>
            
        </Container>
    )
}