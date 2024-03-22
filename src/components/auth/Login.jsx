import { useState, useEffect } from 'react';
import { login } from '../../utils/auth';
// import { Button, Form, Input } from "antd";

import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { useLogin } from '../../queryHooks/auth/useAuth';
import Input from '../views/InputV2';
import Button from '../views/Button';
import { useToast } from '../../utils/hooks/UseToast';

const Login = () => {
    const navigate = useNavigate();
    const toast = useToast()
    const [email, setEmail] = useState('nihal@gmail.com');
    const [password, setPassword] = useState('testing1234');

    const { mutate, isPending } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();

        mutate(
            { email, password },
            {
                onSuccess: () => {
                    navigate('/', { replace: true });
                },
                onError: (err) => {
                    toast.fire({
                        icon:'error',
                        title:err.error,
                    })
                },
            }
        );
    };
    return (
        <div className='h-screen w-screen flex justify-center items-center shadow-lg '>
            <div className='shadow-black-300/100 m-1 w-96 bg-white px-10 py-6 shadow-lg rounded-lg'>

                <h3 className='my-5 text-center font-medium leading-5'>Ecommerece</h3>
                <form
                    onSubmit={handleLogin}
                    className='justify-center align-center mt-7 flex flex-col gap-3'>
                    <Input placeholder='Email' type='email' defaultValue={email} />
                    <Input placeholder='Password' type='password' defaultValue={password} />

                    <Button element='button'  varient='primary' type='submit' >Login</Button>
                </form>

                <hr className='border-t-1 text-neutral-500' />
                <p className='mt-5 cursor-pointer text-center text-blue-500 ' onClick={() => navigate('/register')}>
                    Sign up for an account
                </p>
            </div>
        </div>
    );
};

export default Login;
