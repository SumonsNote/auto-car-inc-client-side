import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary uppercase">Customer Reviews</h1>
            <div className='text-center my-5'>
                <progress class="progress progress-info w-56" value="100" max="100"></progress>
            </div>
            <div className='flex gap-10 px-12'>
                {
                    reviews.map(review =>
                        <div class="card w-96 bg-base-100 shadow-xl my-10">
                            <div class="card-body">
                                <h2 class="card-title">{review.name}</h2>
                                <p><span className='font-bold'>Rating:</span> {review.rating}</p>
                                <p><span className='font-bold'>Review:</span> {review.review}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Review;