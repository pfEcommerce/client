import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { productsBought } from '../../Redux/actions/utilityActions'
import Swal from 'sweetalert2'

function Checkout() {
    const dispatch = useDispatch()
    const games = useSelector(state => state.rootReducer.orders)
    const userEmail = useSelector(state => state.rootReducer.user.email)
    const gamePrices = games.map(e => e.price)
    const gamesId = games.map(e => e.id)
    const Swal = require('sweetalert2')
    console.log(gamesId)
    let acc = gamePrices.reduce((a, b) => a + b, 0).toFixed(2)
    console.log(acc)
    
        const onSuccess = (payment) => {
           
            dispatch(productsBought(gamesId, userEmail))
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
            
            <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={total} 
                onSuccess={onSuccess}
                onCancel={onCancel}
                onError={onError}
                />
            </>
        );
}

export default Checkout