import React, { useEffect } from 'react';
import { getAdmins } from '../../Redux/actions/utilityActions';
import { useDispatch, useSelector } from "react-redux";


export default function SuperAdminPanel() {

    const state = useSelector(state => state.adminReducer.admins)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAdmins());
    }, [])

    return (
        <div>
            {state ?
            <div>
                <h3>Admins</h3>
                {state.map(e=>
                    <div>
                        <br/>
                        FirstName:
                        {e.firstName}
                        LastName:
                        {e.lastName}
                        <br/>
                    </div>
                    )}
            </div>
            :
            <div>
                Not Admins Yet
            </div>
            }
        </div>
    )
};