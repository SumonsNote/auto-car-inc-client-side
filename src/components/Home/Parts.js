import React, { useEffect, useState } from 'react';
import PartsDetail from './PartsDetail';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('https://tranquil-sands-66866.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary">Parts | Tools</h1>
            <div className='text-center my-5'>
                <progress class="progress progress-info w-56" value="100" max="100"></progress>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    parts.map(part => <PartsDetail part={part}></PartsDetail>)
                }
            </div>
        </div>
    );
};

export default Parts;