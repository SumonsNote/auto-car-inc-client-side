import React from 'react';

const AddReview = () => {
    const handleOrder = event => {
        event.preventDefault();
        const review = event.target.review.value;
        const rating = event.target.rating.value;
        const name = event.target.name.value;

        const data = {
            name: name,
            review: review,
            rating: rating,
        }

        fetch('http://localhost:5000/review', {
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
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary uppercase">Add Review</h1>
            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl mx-auto my-10">
                <form onSubmit={handleOrder}>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input name='name'  type="text" placeholder="Name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Description</span>
                            </label>
                            <textarea name='review'  type="text" placeholder="Description" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Rating</span>
                            </label>
                            <input name='rating' type="text" placeholder="Rating" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Add Review</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;