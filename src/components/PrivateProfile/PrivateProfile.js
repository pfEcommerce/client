import React from 'react';
import { Navigate } from 'react-router-dom';
import Profile from '../Authentication/Profile';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

const PrivateProfile = () => {
    
    const { isAuthenticated} = useAuth0();

    if (isAuthenticated) {
        return <Profile />
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateProfile;