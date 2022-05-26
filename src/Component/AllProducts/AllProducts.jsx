import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BedroomProduct from '../BedroomProduct/BedroomProduct';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('/Produtcs.JSON')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, []);

    return (
        <>
            <div className="about-header-conter">
                <h1>ALL PRODUCTS</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   SHOP</Link>
                </div>
            </div>
            <div className="bedroom-products">
                <div className="bedroom-filter-bar">
                    <h6>Showing {allProducts.length} Products</h6>
                    <div className='sort-by'>
                        <h6>Sort by</h6>
                        <select name="filter" id="">
                            <option value="Relavance">Relavance</option>
                            <option value="Price">Price (Low)</option>
                            <option value="Price">Price (High)</option>
                        </select>
                    </div>
                </div>
                <div className="bedroom-all-products">
                    <div className="row g-4">
                        {
                            allProducts.map((productData) => <BedroomProduct
                                key={productData.id}
                                productData={productData}
                            ></BedroomProduct>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProducts;