import { useState, useEffect } from 'react';
import { login } from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/', { replace: true });
        }
    }, []);
    console.log(email, password);
    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await login(email, password);

        if (error) {
            alert(error);
        } else {
            navigate('/', { replace: true });
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label for='email'>Email</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <label for='password'>Password</label>
                <input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Login;
