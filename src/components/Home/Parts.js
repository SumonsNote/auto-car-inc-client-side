import React, { useEffect, useState } from 'react';
import PartsDetail from './PartsDetail';

const Parts = () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
        fetch('Parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-20'>
            <h1 class="text-4xl font-bold text-center">Parts | Tools</h1>
            <div className='flex justify-center gap-20 my-10'>
                {
                    parts.map(part => <PartsDetail part={part}></PartsDetail>)
                }
            </div>
        </div>
    );
};

export default Parts;