import React from 'react';
import {useNavigate } from 'react-router-dom';

const PartsDetail = ({part}) => {
    const navigate = useNavigate()

    const autoCarInc = id => {
        navigate(`/purchase/${_id}`);
    }
    const {_id, img, des, minimumOrderQuantity, availableQuantity, price, name} = part;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-center font-bold text-2xl">{name}</h2>
                <p>Description: {des}</p>
                <p className='font-bold'>Minimum Order Quantity: {minimumOrderQuantity}</p>
                <p className='font-bold'>Available Quantity: {availableQuantity}</p>
                <p className='font-bold'>Price: {price}</p>
                <div class="card-actions justify-center">
                <button onClick={() => autoCarInc(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsDetail;