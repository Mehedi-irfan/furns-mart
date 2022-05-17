import React from 'react';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import CartButton from '../CartButton/CartButton';
import LatestNews from '../LatestNews/LatestNews';
import Logos from '../Logos/Logos';
import OurProducts from '../OurProducts/OurProducts';
import SaleFurniture from '../SaleFurniture/SaleFurniture';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Slider />
            <CartButton />
            <Logos />
            <OurProducts />
            <SaleFurniture />
            <LatestNews />
            <Footer />
        </div>
    );
};

export default Home;