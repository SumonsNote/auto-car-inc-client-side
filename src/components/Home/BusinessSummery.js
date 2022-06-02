import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faRectangleList, faUserGroup } from '@fortawesome/free-solid-svg-icons'

const BusinessSummery = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10'>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary">World Wide Business</h1>
            <p className='text-primary text-2xl text-center my-10 uppercase'>We are trying our products best quality</p>
            <div className='text-center my-5'>
                <progress class="progress progress-info w-56" value="100" max="100"></progress>
            </div>

            <div className=''>
                <div class="card lg:max-w-lg mb-2 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <div class="card-actions text-4xl text-primary">
                            <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                        <span class="card-title text-4xl font-bold">100+</span>
                        <span class="card-title text-4xl font-bold">Customers</span>
                    </div>
                </div>
                <div class="card lg:max-w-lg mb-2 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <div class="card-actions text-4xl text-primary">
                            <FontAwesomeIcon icon={faRectangleList} />
                        </div>
                        <span class="card-title text-4xl font-bold">150+</span>
                        <span class="card-title text-4xl font-bold">Projects</span>
                    </div>
                </div>
                <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <div class="card-actions text-4xl text-primary">
                            <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <span class="card-title text-4xl font-bold">99+</span>
                        <span class="card-title text-4xl font-bold">Countries</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;