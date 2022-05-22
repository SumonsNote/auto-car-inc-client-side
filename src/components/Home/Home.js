import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Footer from './Footer';
import MediaCenter from './MediaCenter';
import Parts from './Parts';
import Press from './Press';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <Press></Press>
            <MediaCenter></MediaCenter>
            <Footer></Footer>
        </div>
    );
};

export default Home;