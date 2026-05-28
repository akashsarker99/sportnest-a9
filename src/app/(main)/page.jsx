import Banner from '@/components/Banner';
import FeaturedFacilities from '@/components/FeaturedFacilities';
import Steps from '@/components/Steps';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFacilities></FeaturedFacilities>
            <Steps></Steps>
        </div>
    );
};

export default HomePage;