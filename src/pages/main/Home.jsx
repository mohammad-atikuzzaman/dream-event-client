import React from 'react';
import Banner from '../../components/main/home/Banner';
import FeaturedEvents from '../../components/main/home/FeaturedEvents';
import CategoriesSection from '../../components/main/home/CategoriesSection';

const Home = () => {
    return (
        <main>
            <Banner/>
            <FeaturedEvents/>
            <CategoriesSection/>
        </main>
    );
};

export default Home;