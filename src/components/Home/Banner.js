import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen" Style="background-image: url(https://i.ibb.co/k0cfYM5/car-banner.jpg);">
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Auto Car Inc</h1>
                    <p class="mb-5">Providing easy finance for pre-owned cars to gain more loyal customers regardless of bad credit or no credit score beside the most satisfying ownership experience in Middle Tennessee.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;