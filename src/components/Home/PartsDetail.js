import React from 'react';
import { Link } from 'react-router-dom';

const PartsDetail = ({part}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={part.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-center font-bold text-2xl">{part.name}</h2>
                <p>Description: {part.des}</p>
                <p className='font-bold'>Minimum Order Quantity: {part.minimumOrderQuantity}</p>
                <p className='font-bold'>Available Quantity: {part.availableQuantity}</p>
                <p className='font-bold'>Price: {part.price}</p>
                <div class="card-actions justify-center">
                    <Link to='/purchase'><button class="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PartsDetail;