import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ setDeleteOrder, deleteOrder }) => {
    const { email } = deleteOrder;
    const handleDeleteOrder = () => {
        fetch(`https://tranquil-sands-66866.herokuapp.com/orders/${email}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Successfully Deleted')
                    setDeleteOrder(null)
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete?</h3>
                    <div class="modal-action">
                        <button onClick={() => handleDeleteOrder(email)} class="btn btn-error text-white">Delete</button>
                        <label for="delete-confirm-modal" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;