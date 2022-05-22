import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams()

    const [purchase, Setpurchase] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${purchaseId}`)
            .then(res => res.json())
            .then(data => Setpurchase(data))
    }, [])
    return (
        <div className='px-16'>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary">Welcome to Purchase Page</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={purchase.img} alt="Album" /></figure>
                <div class="card-body w-52">
                    <h2 class="card-title">{purchase.name}</h2>
                    <p>{purchase.des}</p>
                    <p>Price: ${purchase.price}</p>
                    <p>Minimum Order Quantity: {purchase.minimumOrderQuantity}</p>
                    <p>Available Quantity: {purchase.availableQuantity}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;