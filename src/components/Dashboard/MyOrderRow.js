import React from 'react';

const MyOrderRow = ({ order, setDeleteOrder }) => {
    const { name, product, number } = order;

    return (
        <tr>
            <th></th>
            <td>{name}</td>
            <td>{product}</td>
            <td>{number}</td>
            <td>
                <label onClick={() => setDeleteOrder(order)} for="delete-confirm-modal" class="btn btn-error text-white">Delete</label>

            </td>
        </tr>

    );
};

export default MyOrderRow;