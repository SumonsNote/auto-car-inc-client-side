import React from 'react';
import banner from '../../Images/car-banner.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <h1 class="text-5xl font-bold">Welcome to Auto Car INC</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <img src={banner}class="max-w-sm rounded-lg shadow-2xl" alt='' />
            </div>
        </div>
    );
};

export default Banner;