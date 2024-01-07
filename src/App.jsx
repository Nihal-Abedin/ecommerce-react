import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={'Home'} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
