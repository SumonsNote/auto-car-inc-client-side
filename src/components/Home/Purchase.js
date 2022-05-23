import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const { purchaseId } = useParams()
    const [purchase, Setpurchase] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/parts/${purchaseId}`)
            .then(res => res.json())
            .then(data => Setpurchase(data))
    }, [])

    const handleOrder = event => {
        event.preventDefault();
        const product = event.target.product.value;
        const number = event.target.number.value;

        const data = {
            name: user.displayName,
            email: user.email,
            product: product,
            number: number
        }

        fetch('http://localhost:5000/orders', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

    }
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
                </div>
            </div>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl mx-auto my-10">
                <form onSubmit={handleOrder}>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='name' disabled value={user?.displayName || ''} type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input name='email' disabled value={user?.email || ''} type="email" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Number</span>
                            </label>
                            <input name='number' type="text" placeholder="Number" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Product</span>
                            </label>
                            <input name='product' value={purchase?.name || ''} type="text" placeholder="Product" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Order</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;