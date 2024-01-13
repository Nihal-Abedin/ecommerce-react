import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/auth/Dashboard';
import ResetPassword from './components/auth/ResetPassword';
import CreatePassword from './components/auth/CreatePassword';
import MainWrapper from './layout/MainWrapper';
import PrivateRoute from './layout/PrivateRoute';
import PrivateRoutesOnLoggedIn from './layout/PrivateRoutesOnLoggedIn';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Products from './components/products/Products';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: true,
        },
    },
});
const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <Routes>
                    <Route element={<PrivateRoutesOnLoggedIn />}>
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/reset-password' element={<ResetPassword />} />
                        <Route path='/create-password' element={<CreatePassword />} />
                    </Route>
                    <Route
                        element={
                            <PrivateRoute>
                                <MainWrapper />
                            </PrivateRoute>
                        }>
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/' element={<Products />} />
                    </Route>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
};

export default App;
