import { useAuthStore } from '../store/auth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
    if (!isLoggedIn) {
        return <Navigate replace to={'/login'} />;
    }

    return children;
};

export default PrivateRoute;
