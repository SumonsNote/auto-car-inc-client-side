import React from 'react';
import notFound from '../../Images/not-found.png'

const NotFound = () => {
    return (
        <div className='px-12'>
            <img style={{width: '100%', height: '700px'}} src={notFound} alt=""/>
        </div>
    );
};

export default NotFound;