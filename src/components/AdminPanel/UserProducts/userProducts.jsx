import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import StyledSearchbar from '../../styles/styled_searchbar/styledSearchbar';
import StyledButton from '../../styles/styled_button/styledButton';
import { styledOrders } from '../../styles/styled_form_orders/styled_orders';

export default function UserOrders(){
    const products = useSelector(state => state.adminReducer.orders);
    const dispatch = useDispatch()
    const [ newValue, setNewValue ] = useState('')
    const [ finalProducts, setFinalProducts ] = useState(products.map(e => e))

    const handleClick = () => {
        if(newValue === ''){
            return finalProducts
        } else {
            setFinalProducts(products.filter(e => e.userEmail === newValue.toLowerCase()))
            console.log(finalProducts)
        }
    } 
    const resetClick = () => {
        setFinalProducts(products.map(e => e))
        
    }

    return (

        
            <styledOrders>
                <StyledSearchbar type='searchbar' placeholder='email...' onChange={(e) => setNewValue(e.target.value)}/>
                <StyledButton type='submit' onClick={() => handleClick()}>Search</StyledButton>
                <StyledButton onClick={() => resetClick()}>All orders</StyledButton>
        
                <Table>
                <Thead>
                    <Tr>
                        <Th>Email</Th>
                        <Th>Id de productos</Th>
                        <Th>Total pagado</Th>
                    </Tr>    
                </Thead>
                <Tbody>
                        {finalProducts && finalProducts.map(e => 
                            <Tr>
                            <Td>{e.userEmail}</Td>
                            <Td>{e.idProduct}</Td>
                            <Td>{e.price}</Td>
                            </Tr>
                        )}
                        
                </Tbody>
                </Table>     
        </styledOrders>
        
    )
}