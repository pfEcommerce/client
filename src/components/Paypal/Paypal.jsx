import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useSelector, useDispatch } from 'react-redux'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

function Checkout() {
    const dispatch = useDispatch()
    const games = useSelector(state => state.rootReducer.orders)

    const gamePrices = games.map(e => e.price)

    let acc = gamePrices.reduce((a, b) => a + b, 0).toFixed(2)
    console.log(acc)
    
        
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = acc; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
        const client = {
            sandbox: 'AUanrWoBbrJWDjeZZK4q2CJZk5sR_1F2nLHqdIqT8jLxzQ-cggqjm7RtQanY-6ouYRaTVOKq9gdz4rKd',
            production: 'sb-mxmr28594976@business.example.com',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
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
                {games.map(e => Td)}
                </Tr>
                </Tbody>
                
            </Table>
            
            <PaypalExpressBtn 
                env={env} 
                client={client} 
                currency={currency} 
                total={total} 
                />
            </>
        );
}

export default Checkout