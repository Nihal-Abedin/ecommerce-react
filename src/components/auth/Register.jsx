import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import { register } from '../../utils/auth';

const Register = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isLoading, setIsLoading] = useState('');
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());
    console.log(isLoggedIn);
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/', { replace: true });
        }
    }, []);

    const handleRegister = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const { error } = await register(fullName, email, phone, password, confirmPass);

        if (error) {
            alert(error);
        } else {
            navigate('/', { replace: true });
        }
    };
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type='text'
                    name='full_name'
                    placeholder='Full Name'
                    onChange={(e) => setFullName(e.currentTarget.value)}
                />
                <br />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                <input
                    type='text'
                    name='phone'
                    placeholder='Phone Number'
                    onChange={(e) => setPhone(e.currentTarget.value)}
                />
                <br />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
                <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPass(e.currentTarget.value)}
                />
                <br />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;
