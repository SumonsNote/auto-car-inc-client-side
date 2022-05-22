import React, { useEffect, useState } from 'react';

const Press = () => {
    const [press, setPress] = useState([])
    useEffect(() => {
        fetch('press.json')
            .then(res => res.json())
            .then(data => setPress(data))
    }, [])
    return (
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary">Press Release</h1>
            <div className='text-center my-5'>
                <progress class="progress progress-info w-56" value="100" max="100"></progress>
            </div>
            <div className='flex justify-center gap-10 '>

                {
                    press.map(press =>
                        <div>
                            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={press.img} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <h2 class="card-title">{press.date}</h2>
                                    <p>{press.press}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Press;