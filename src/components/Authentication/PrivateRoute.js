import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Home/Loading';
import auth from './../../Firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;