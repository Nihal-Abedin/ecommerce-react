import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/auth/Dashboard';
import ResetPassword from './components/auth/ResetPassword';
import CreatePassword from './components/auth/CreatePassword';
import MainWrapper from './layout/MainWrapper';
import PrivateRoute from './layout/PrivateRoute';
import PrivateRoutesOnLoggedIn from './layout/PrivateRoutesOnLoggedIn';

const App = () => {
    return (
        <BrowserRouter>
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
                    <Route path='/' element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
