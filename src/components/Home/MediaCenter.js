import React from 'react';
import media from '../../Images/press.webp'

const MediaCenter = () => {
    return (
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary">Tour to Media Center</h1>
            <div className='text-center my-5'>
                <progress class="progress progress-info w-56" value="100" max="100"></progress>
            </div>
            <div class="hero my-10">
                <div class="hero-content flex-col lg:flex-row">
                    <img style={{ width: '500px' }} src={media} alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">Auto Car you’ll find the right vehicle for every requirement</h1>
                        <p class="py-6">Sporty, luxurious, or compact – at Audi you will find the right vehicle for every requirement. Discover and configure our series models now.</p>
                        <button class="btn btn-outline my-5">Discover Media Center</button>
                        <p>Audi Q4 Sportback e-tron: <br /> Power consumption, combined*: 17.9–15.6 kWh/100km (NEDC); 20.9–16.6 kWh/100km (WLTP)<br />
                            CO₂ emissions, combined*: 0 g/km</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaCenter;