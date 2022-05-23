import React from 'react';
import LatestNews from '../LatestNews/LatestNews';
import Logos from '../Logos/Logos';
import OurProducts from '../OurProducts/OurProducts';
import SaleFurniture from '../SaleFurniture/SaleFurniture';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

const Home = () => {
    return (
        <div>
            <SimpleSlider />
            <Logos />
            <OurProducts />
            <SaleFurniture />
            <LatestNews />
        </div>
    );
};

export default Home;