import React from 'react';
import { Navigate } from 'react-router-dom';
import UserPanel from '../UserPanel/UserPanel';
import { useSelector } from 'react-redux';

const PrivateUserPanel = () => {
    
    const user = useSelector(state=>state.rootReducer.user);

    if (user.length <= 0) {
        return <UserPanel />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateUserPanel;