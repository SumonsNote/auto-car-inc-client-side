import React, { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyOrderRow 
                            order={order}
                            setDeleteOrder={setDeleteOrder}
                            ></MyOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeleteModal
            deleteOrder={deleteOrder}
            setDeleteOrder={setDeleteOrder}
            ></DeleteModal>}
        </div>
    );
};

export default MyOrders;