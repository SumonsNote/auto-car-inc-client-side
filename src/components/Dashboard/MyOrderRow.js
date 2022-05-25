import React from 'react';
import { toast } from 'react-toastify';

const MyOrderRow = ({ order }) => {
    const {name, product, number, email} = order;
    const deleteOrder = (email) => {
        fetch(`http://localhost:5000/orders/${email}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    toast.success('Successfully Deleted')
                }
            })
    }
    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{product}</td>
            <td>{number}</td>
            <td><button onClick={() => deleteOrder(email)} class="btn btn-error">Delete</button>
            </td>
        </tr>

    );
};

export default MyOrderRow;