import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';
import Navigation from '../../Sheard/Navigation/Navigation';
import DiningProduct from '../DiningProduct/DiningProduct';

const Dining = () => {
    const [bedroomProduct, setBedroomProduct] = useState([]);
    // const [showProduct, setShowProduct] = useState([])
    useEffect(() => {
        fetch('./Produtcs.JSON')
            .then(res => res.json())
            .then(data => {
                setBedroomProduct(data)
                // setShowProduct(data)
            })
    }, []);

    const filterData = (cate) => {
        const filterProduct = bedroomProduct.filter((product) => product.category === cate)
        setBedroomProduct(filterProduct);
    }

    return (
        <>
            <Navigation filterData={filterData} />
            <div className="about-header-conter">
                <h1>Dining</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   COLLECTION</Link>   /
                    <Link to='/'>   DINING</Link>
                </div>
            </div>
            <div className="bedroom-products">
                <div className="bedroom-filter-bar">
                    <h6>Showing {bedroomProduct?.length} Products</h6>
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
                            bedroomProduct?.map((productData) => <DiningProduct
                                key={productData.id}
                                productData={productData}
                            ></DiningProduct>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dining;