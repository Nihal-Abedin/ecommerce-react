import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useAuthStore } from '../../store/auth';
import { register } from '../../utils/auth';
import { useRegisTration } from '../../queryHooks/auth/useAuth';

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
        <main className='' style={{ marginBottom: 100, marginTop: 50 }}>
            <div className='container'>
                {/* Section: Login form */}
                <section className=''>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-xl-5 col-md-8'>
                            <div className='card rounded-5'>
                                <div className='card-body p-4'>
                                    <h3 className='text-center'>Register Account</h3>
                                    <br />

                                    <div className='tab-content'>
                                        <div
                                            className='tab-pane fade show active'
                                            id='pills-login'
                                            role='tabpanel'
                                            aria-labelledby='tab-login'>
                                            <form onSubmit={handleRegister}>
                                                <div className='form-outline mb-4'>
                                                    <label className='form-label' htmlFor='Full Name'>
                                                        Full Name
                                                    </label>
                                                    <input
                                                        type='text'
                                                        id='username'
                                                        placeholder='Full Name'
                                                        required
                                                        className='form-control'
                                                        onChange={(e) => setFull_name(e.currentTarget.value)}
                                                    />
                                                </div>
                                                <div className='form-outline mb-4'>
                                                    <label className='form-label' htmlFor='loginName'>
                                                        Email
                                                    </label>
                                                    <input
                                                        type='email'
                                                        id='email'
                                                        placeholder='Email Address'
                                                        required
                                                        className='form-control'
                                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                                    />
                                                </div>

                                                <div className='form-outline mb-4'>
                                                    <label className='form-label' htmlFor='loginName'>
                                                        Mobile Number
                                                    </label>
                                                    <input
                                                        type='text'
                                                        id='phone'
                                                        placeholder='Mobile Number'
                                                        required
                                                        className='form-control'
                                                        onChange={(e) => setPhone(e.currentTarget.value)}
                                                    />
                                                </div>
                                                <div className='form-outline mb-4'>
                                                    <label className='form-label' htmlFor='loginPassword'>
                                                        Password
                                                    </label>
                                                    <input
                                                        type='password'
                                                        id='password'
                                                        placeholder='Password'
                                                        className='form-control'
                                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                                    />
                                                </div>
                                                {/* Password input */}
                                                <div className='form-outline mb-4'>
                                                    <label className='form-label' htmlFor='loginPassword'>
                                                        Confirm Password
                                                    </label>
                                                    <input
                                                        type='password'
                                                        id='confirm_password'
                                                        placeholder='Confirm Password'
                                                        required
                                                        className='form-control'
                                                        onChange={(e) => setConfirm_password(e.currentTarget.value)}
                                                    />
                                                </div>
                                                {/* Password Check */}
                                                {/* <p className='fw-bold text-danger'>
                                                    {password2 !== password ? 'Passwords do not match' : ''}
                                                </p> */}

                                                <button
                                                    className='btn btn-primary w-100'
                                                    type='submit'
                                                    disabled={isPending}>
                                                    <span className='mr-2'>Sign Up</span>
                                                    <i className='fas fa-user-plus' />
                                                </button>

                                                <div className='text-center'>
                                                    <p className='mt-4'>
                                                        Already have an account? <Link to='/login/'>Login</Link>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Register;
