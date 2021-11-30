import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { deleteOrders } from '../../../Redux/actions/utilityActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'


export default function UserOrders(){
    const products = useSelector(state => state.adminReducer.orders);
    const dispatch = useDispatch()
    
    /* const [ ids, setIds ] = useState([]) */
    
    
   
   /*  useEffect(() => {
       console.log(ids)
   }, [ids]) */ 
    
  
   /*  const handleChange = (e) => {
        const filter = ids.find(r => r === e.target?.value)
        console.log(filter)
        if(e.target.checked === true && !filter){
            setIds([...ids, e.target.value])
            console.log(ids)    
        } else if (e.target.checked === false){
            const discard = ids.filter(r => r !== e.target?.value)
            console.log(discard)
            setIds(discard)
            console.log(ids)
        }
    }  */

    return (
        <>
            <div>
                <Table>
                <Thead>
                    <Tr>
                        <Th>Email</Th>
                        <Th>Id de productos</Th>
                        <Th>Total pagado</Th>
                    </Tr>    
                </Thead>
                <Tbody>
                        {products.map(e => 
                            <Tr>
                            <Td>{e.userEmail}</Td>
                            <Td>{e.idProduct}</Td>
                            <Td>{e.price}</Td>
                            {/*  <Td><input value={e.id} type='checkbox' onChange={(e) => handleChange(e)}  checked={checkedState[e.id-1]/></Td>  */}
                            </Tr>
                        )}
                        
                </Tbody>
                </Table>
                
                <button /* onClick={() => handleClick()} */>Eliminar ordenes</button>
            </div>
        </>
    )
}