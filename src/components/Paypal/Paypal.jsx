import React, { useEffect } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { productsBought } from '../../Redux/actions/utilityActions';
import Swal from 'sweetalert2';
import { checkValidateUser } from '../../Redux/actions/utilityActions';
import { Link } from 'react-router-dom'
import { deleteOrders } from '../../Redux/actions/utilityActions';
import { createOrderOnPayment } from '../../Redux/actions/utilityActions';

function Checkout() {
    const dispatch = useDispatch()
    const games = useSelector(state => state.rootReducer.orders)
    const userEmail = useSelector(state => state.rootReducer.user.email)
    const stock = useSelector(state => state.rootReducer.orders)
    const gamePrices = games.map(e => e.price)
    const gamesId = games.map(e => e.id)
    const Swal = require('sweetalert2')

    let acc = gamePrices.reduce((a, b) => a + b, 0).toFixed(2)
     
        const onSuccess = (payment) => {
            dispatch(productsBought(gamesId, userEmail))
            dispatch(deleteOrders())
            dispatch(createOrderOnPayment(userEmail, acc, gamesId))
            console.log(stock)
            Swal.fire({
                icon:'success',
                title: 'Thanks for your purchase!'
            })
        }
        const onCancel = (data) => {
            Swal.fire({icon: 'error',
            title: 'The payment was cancelled!',
            })
        }
        const onError = (err) => {
            
            Swal.fire({icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong'
            })
            
        }
 
        let env = 'sandbox'; 
        let currency = 'USD'; 
        let total = acc; 
        const client = {
            sandbox: 'AUanrWoBbrJWDjeZZK4q2CJZk5sR_1F2nLHqdIqT8jLxzQ-cggqjm7RtQanY-6ouYRaTVOKq9gdz4rKd',
            production: 'sb-mxmr28594976@business.example.com',
        }
        
        return (
            <>
            <Table>
                <Thead>
                <Tr>
                <Th>Products</Th>
                <Th>Price</Th>
                <Th>Total</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                {games.map(e =><Td> {e.name}</Td>)}
                {games.map(e => <Td> {e.price} </Td>)}
                <Td>{acc}</Td>
                </Tr>
                </Tbody>
                
            </Table>
            {userEmail ? 
            <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={total} 
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
                />: Swal.fire({
                    title: 'You must be logged in first',
                    icon: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Home!'
                  }).then(function() {
                    window.location.href = "http://localhost:3000";
                })}
            </>
        );
}

export default Checkout