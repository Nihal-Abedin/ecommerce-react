import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/auth/Dashboard';
import ResetPassword from './components/auth/ResetPassword';
import CreatePassword from './components/auth/CreatePassword';
import MainWrapper from './layout/MainWrapper';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/reset-password' element={<ResetPassword />} />
                <Route path='/create-password' element={<CreatePassword />} />
                <Route element={<MainWrapper />}>
                    <Route path='/' element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
