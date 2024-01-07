import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/auth/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={'Home'} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
