import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './OurProducts.css';

const OurProducts = () => {
    return (
        <div>
            <div className="products-section">
                <div className="prodcut-title">
                    <h2>Our Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dignissimos officia, esse voluptate quam libero aperiam cupiditate quo unde dolores, </p>
                </div>
                <div className="product-arrivale">
                    <ul>
                        <li><Link to='newArrible'>New Arrival</Link></li>
                        <li><Link to='featured'>Featured</Link></li>
                        <li><Link to='onSale'>On Sale</Link></li>
                        <li><Link to='tending'>Tending</Link></li>
                    </ul>

                </div>
                <div className="new-arrival-product">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default OurProducts;