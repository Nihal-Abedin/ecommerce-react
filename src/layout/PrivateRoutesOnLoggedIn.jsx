import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const PrivateRoutesOnLoggedIn = () => {
    const location = useLocation();
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    if (isLoggedIn) {
        return <Navigate to='/' state={{ from: location }} />;
    }

    return <Outlet />;
};

export default PrivateRoutesOnLoggedIn;
