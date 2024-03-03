import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import { register } from '../../utils/auth';
import { useRegisTration } from '../../queryHooks/auth/useAuth';
import Input from '../views/InputV2';
import Button from '../views/Button';

const Register = () => {
    const navigate = useNavigate();

    const [full_name, setFull_name] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');
    const { mutate, isPending } = useRegisTration();
    const handleRegister = async (e) => {
        e.preventDefault();
        mutate(
            { full_name, email, phone, password, confirm_password },
            {
                onSuccess: () => {
                    console.log('Success');
                    navigate('/', { replace: true });
                },
                onError: (err) => {
                    console.log(err);
                    alert(err.error);
                },
            }
        );
    };
    return (
        <div className='h-screen w-screen flex justify-center items-center shadow-lg '>
            <div className='shadow-black-300/100 m-1 w-96 bg-white px-10 py-6 shadow-lg rounded-lg'>
                <h3 className='my-5 text-center font-medium leading-5'>Register</h3>

                <form onSubmit={handleRegister} className='justify-center align-center mt-7 flex flex-col gap-3'>
                    <Input
                        type='text'
                        id='username'
                        placeholder='Full Name'
                        required
                        className='form-control'
                        onChange={(e) => setFull_name(e.currentTarget.value)}
                    />
                    <Input
                        type='email'
                        id='email'
                        placeholder='Email Address'
                        required
                        className='form-control'
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <Input
                        type='text'
                        id='phone'
                        placeholder='Mobile Number'
                        required
                        className='form-control'
                        onChange={(e) => setPhone(e.currentTarget.value)}
                    />
                    <Input
                        type='password'
                        id='password'
                        placeholder='Password'
                        className='form-control'
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <Input
                        type='password'
                        id='confirm_password'
                        placeholder='Confirm Password'
                        required
                        className='form-control'
                        onChange={(e) => setConfirm_password(e.currentTarget.value)}
                    />
                    {/* Password Check */}
                    {/* <p className='fw-bold text-danger'>
                                                    {password2 !== password ? 'Passwords do not match' : ''}
                                                </p> */}
                    <Button element='button' type='submit' disabled={isPending}>
                        <span className='mr-2'>Sign Up</span>
                        <i className='fas fa-user-plus' />
                    </Button>
                    <Link to='/login/' className='mt-5 cursor-pointer text-center text-blue-500 '>
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
