import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Register = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1 class="text-4xl font-bold text-center">Register now!</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover">Already have an Account?</a>
                            <Link to='/login' class="label-text-alt link link-hover">Login</Link>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Create Account</button>
                        <div class="divider">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;