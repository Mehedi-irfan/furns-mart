import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Sheard/Navigation/Navigation';
import BedroomProduct from '../BedroomProduct/BedroomProduct';
import Footer from '../../Sheard/Footer/Footer'
import './Bedroom.css'

const Bedroom = () => {
    const [bedroomProduct, setBedroomProduct] = useState([]);

    useEffect(() => {
        fetch('/Produtcs.JSON')
            .then(res => res.json())
            .then(data => {
                setBedroomProduct(data)
            })
    }, []);

    const filterData = (cate) => {
        const filterProduct = bedroomProduct.filter((product) => product?.category === cate)
        setBedroomProduct(filterProduct);
    }

    return (
        <>
            <Navigation filterData={filterData} />
            <div className="about-header-conter">
                <h1>BEDROOM</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   COLLECTION</Link>   /
                    <Link to='/'>   BEDROOM</Link>
                </div>
            </div>
            <div className="bedroom-products">
                <div className="bedroom-filter-bar">
                    <h6>Showing {bedroomProduct.length} Products</h6>
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
                            bedroomProduct.map((productData) => <BedroomProduct
                                key={productData.id}
                                productData={productData}
                            ></BedroomProduct>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Bedroom;