import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Home/Loading';
import google from '../../Images/google.png'

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {error.message}</p>
            </div>

    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }
    return (
        <div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary my-3 w-full'>
                    <img className='mx-2' style={{ width: '30px' }} src={google} alt="" />
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;