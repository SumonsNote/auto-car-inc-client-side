import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;