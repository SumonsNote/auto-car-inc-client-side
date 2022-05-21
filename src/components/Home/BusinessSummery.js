import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe, faRectangleList, faUserGroup } from '@fortawesome/free-solid-svg-icons'

const BusinessSummery = () => {
    return (
        <div className='my-10'>
            <h1 class="text-4xl font-bold text-center my-10">World Wide Business</h1>
            <div className='flex justify-center gap-10'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <div class="card-actions text-4xl text-primary">
                            <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                        <span class="card-title text-4xl font-bold">100+</span>
                        <span class="card-title text-4xl font-bold">Customers</span>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center">
                        <div class="card-actions text-4xl text-primary">
                            <FontAwesomeIcon icon={faRectangleList} />
                        </div>
                        <span class="card-title text-4xl font-bold">150+</span>
                        <span class="card-title text-4xl font-bold">Projects</span>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
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