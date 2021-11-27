import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminWithEmail } from '../../Redux/actions/utilityActions';
import { useParams } from "react-router-dom";

export default function DetailAdmin () {
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(getAdminWithEmail(params.userEmail));
    }, [])
    const data = useSelector(state=>state.adminReducer.admin);
    const history = data.histories?.map(e=>(
        {
            id: e.id,
            description: e.description,
            product: e.productId || e.categoryId || e.opinionId,
            request: e.request
        }
    ))
    return (
        <div>
            Firstname:
            {data.firstName}
            LastName:
            {data.lastName}
            Email:
            {data.email}
            {history?.map(e=>
                <div>
                    ID: {e.id}
                    Request: {e.request}
                    Product: {e.product}
                    Description: {e.description}
                </div>
            )}
        </div>
    )
}; 