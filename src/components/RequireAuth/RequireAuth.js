import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';

const auth = getAuth(app)
const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth)
    let location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children
};

export default RequireAuth;