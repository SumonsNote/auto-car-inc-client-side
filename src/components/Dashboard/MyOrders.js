import React, { useEffect, useState } from 'react';

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary uppercase">Order Page</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <th></th>
                                    <td>{order.name}</td>
                                    <td>{order.product}</td>
                                    <td>{order.number}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;