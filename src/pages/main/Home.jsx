import React from 'react';
import Banner from '../../components/main/home/Banner';
import FeaturedEvents from '../../components/main/home/FeaturedEvents';
import CategoriesSection from '../../components/main/home/CategoriesSection';
import Reviews from '../../components/main/home/Reviews';

const Home = () => {
    return (
        <main>
            <Banner/>
            <FeaturedEvents/>
            <CategoriesSection/>
            <Reviews/>
        </main>
    );
};

export default Home;