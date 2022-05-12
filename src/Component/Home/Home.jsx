import React from 'react';
import Navigation from '../../Sheard/Navigation/Navigation';
import Logos from '../Logos/Logos';
import OurProducts from '../OurProducts/OurProducts';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Slider />
            <Logos />
            <OurProducts />
        </div>
    );
};

export default Home;