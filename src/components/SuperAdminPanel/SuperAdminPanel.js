import React, { useEffect } from 'react';
import { getAdmins } from '../../Redux/actions/utilityActions';
import { useDispatch, useSelector } from "react-redux";

import CardAdmin from '../CardAdmin/CardAdmin';

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
                {state.map(e=><CardAdmin props={e}/>)}
            </div>
            :
            <div>
                Not Admins Yet
            </div>
            }
        </div>
    )
};