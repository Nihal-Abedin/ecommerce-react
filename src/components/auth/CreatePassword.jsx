import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import apiInstance from '../../utils/axios';

const CreatePassword = () => {
    const navigate = useNavigate();
    const [newPassord, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [searchParams] = useSearchParams();

    const otp = searchParams.get('otp');
    const uuid = searchParams.get('id');

    const handleSetNewPass = async (e) => {
        e.preventDefault();

        if (newPassord === confirmPassword) {
            try {
                const formData = new FormData(e.currentTarget);
                const data = { ...Object.fromEntries(formData), otp, uuid };
                const { data: res, status } = await apiInstance.post('/user/set-password/', data);
                console.log(res.data, status);
                if (status === 201) {
                    console.log(res.data);
                } else {
                    alert('An errror occured while trying to change the password!');
                }
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <section>
            <main className='' style={{ marginBottom: 100, marginTop: 50 }}>
                <div className='container'>
                    <section className=''>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-xl-5 col-md-8'>
                                <div className='card rounded-5'>
                                    <div className='card-body p-4'>
                                        <h3 className='text-center'>Create New Password</h3>
                                        <br />

                                        <div className='tab-content'>
                                            <div
                                                className='tab-pane fade show active'
                                                id='pills-login'
                                                role='tabpanel'
                                                aria-labelledby='tab-login'>
                                                <form onSubmit={handleSetNewPass}>
                                                    {/* Email input */}
                                                    <div className='form-outline mb-4'>
                                                        <label className='form-label' htmlFor='Full Name'>
                                                            Enter New Password
                                                        </label>
                                                        <input
                                                            type='password'
                                                            id='email'
                                                            required
                                                            name='password'
                                                            className='form-control'
                                                            onChange={(e) => setNewPassword(e.currentTarget.value)}
                                                        />
                                                    </div>

                                                    <div className='form-outline mb-4'>
                                                        <label className='form-label' htmlFor='Full Name'>
                                                            Confirm New Password
                                                        </label>
                                                        <input
                                                            type='password'
                                                            id='email'
                                                            required
                                                            name='confirm_password'
                                                            className='form-control'
                                                            onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                                                        />
                                                        {/* {error !== null &&
                                                            <>
                                                                {error === true

                                                                    ? <p className='text-danger fw-bold mt-2'>Password Does Not Match</p>
                                                                    : <p className='text-success fw-bold mt-2'>Password Matched</p>
                                                                }
                                                            </>
                                                        } */}
                                                    </div>

                                                    <div className='text-center'>
                                                        <button type='submit' className='btn btn-primary w-100'>
                                                            Reset Password
                                                        </button>
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
export default CreatePassword;
