import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { deleteOrders } from '../../../Redux/actions/utilityActions';
import { useDispatch } from 'react-redux';

import Button from '@restart/ui/esm/Button';

export default function UserOrders(){
    const products = useSelector(state => state.adminReducer.orders);
    const dispatch = useDispatch()
    
    const [ ids, setIds ] = useState([])
    const [checkedState, setCheckedState] = useState(
        new Array(ids.length).fill(false)
    );
    
   /*  const handleClick = () => {
        if(ids.length > 0){
            dispatch(deleteOrders(ids))
        } 
    }  */
   
    
    const handleClick = (position) => {
        let updatedCheckedState = checkedState.map((item, index) => index === position ? !item :item);
        setCheckedState(updatedCheckedState);
        console.log(checkedState)
    }
    /* const handleChange = (e) => {
        
        ids.push()
    } */
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
                            <Td><input value={e.id} type='checkbox' /* onChange={} */ onClick={handleClick} checked={checkedState[e.id-1]}/></Td>
                            </Tr>
                        )}
                        
                </Tbody>
                </Table>
                
                <button>Eliminar ordenes</button>
            </div>
        </>
    )
}