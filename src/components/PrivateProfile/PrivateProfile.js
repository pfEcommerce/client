import React from 'react';
import { Navigate } from 'react-router-dom';
import Profile from '../Authentication/Profile';
import { useSelector } from 'react-redux';

const PrivateProfile = () => {
    
    const user = useSelector(state=>state.rootReducer.user);

    if (user.length > 0) {
        return <Profile />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateProfile;