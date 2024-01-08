import { useState } from 'react';
import apiInstance from '../../utils/axios';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        try {
            apiInstance
                .get(`user/reset-password/${email}`)
                .then((res) => {
                    alert('An Email has been sent to your mail!');
                })
                .catch((err) => alert('No user Found!'));
        } catch (err) {
            alert('No user Found!');
        }
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
                                        <h3 className='text-center'>Forgot Password</h3>
                                        <br />

                                        <div className='tab-content'>
                                            <div
                                                className='tab-pane fade show active'
                                                id='pills-login'
                                                role='tabpanel'
                                                aria-labelledby='tab-login'>
                                                <div>
                                                    {/* Email input */}
                                                    <div className='form-outline mb-4'>
                                                        <label className='form-label' htmlFor='Full Name'>
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type='email'
                                                            id='email'
                                                            name='email'
                                                            className='form-control'
                                                            onChange={(e) => setEmail(e.currentTarget.value)}
                                                        />
                                                    </div>

                                                    <div className='text-center'>
                                                        <button className='btn btn-primary w-100'>
                                                            Reset Password
                                                        </button>
                                                    </div>
                                                </div>
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

export default ResetPassword;
