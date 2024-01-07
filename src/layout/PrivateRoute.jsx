import { useAuthStore } from '../store/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    return isLoggedIn ? <>{children}</> : <Navigate to='/login' replace={true} />;
};

export default PrivateRoute;
