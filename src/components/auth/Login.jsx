import { useState, useEffect } from 'react';
import { login } from '../../utils/auth';
import { useNavigate, Link } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';
import { useLogin } from '../../queryHooks/auth/useAuth';

const Login = () => {
    const navigate = useNavigate();
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
                    console.log(err, 'ASDSA');
                    alert(err.error);
                },
            }
        );
    };
    return (
        <section>
            <main className='' style={{ marginBottom: 100, marginTop: 50 }}>
                <div className='container'>
                    {/* Section: Login form */}
                    <section className=''>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-5 col-md-8'>
                                <div className='card rounded-5'>
                                    <div className='card-body p-4'>
                                        <h3 className='text-center'>Login</h3>
                                        <br />

                                        <div className='tab-content'>
                                            <div
                                                className='tab-pane fade show active'
                                                id='pills-login'
                                                role='tabpanel'
                                                aria-labelledby='tab-login'>
                                                <form onSubmit={handleLogin}>
                                                    {/* Email input */}
                                                    <div className='form-outline mb-4'>
                                                        <label className='form-label' htmlFor='Full Name'>
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type='email'
                                                            id='username'
                                                            name='username'
                                                            value={email}
                                                            className='form-control'
                                                            onChange={(e) => setEmail(e.currentTarget.value)}
                                                        />
                                                    </div>

                                                    <div className='form-outline mb-4'>
                                                        <label className='form-label' htmlFor='loginPassword'>
                                                            Password
                                                        </label>
                                                        <input
                                                            type='password'
                                                            id='password'
                                                            name='password'
                                                            value={password}
                                                            className='form-control'
                                                            onChange={(e) => setPassword(e.currentTarget.value)}
                                                        />
                                                    </div>

                                                    <button
                                                        disabled={isPending}
                                                        className='btn btn-primary w-100'
                                                        type='submit'>
                                                        <span className='mr-2'>Sign In </span>
                                                        <i className='fas fa-sign-in-alt' />
                                                    </button>

                                                    <div className='text-center'>
                                                        <p className='mt-4'>
                                                            Don't have an account? <Link to='/register'>Register</Link>
                                                        </p>
                                                        <p className='mt-0'>
                                                            <Link to='/reset-password' className='text-danger'>
                                                                Forgot Password?
                                                            </Link>
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
        </section>
    );
};

export default Login;
