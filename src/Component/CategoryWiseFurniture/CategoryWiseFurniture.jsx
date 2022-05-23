import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BedroomProduct from '../BedroomProduct/BedroomProduct';
import '../Bedroom/Bedroom.css';

const CategoryWiseFurniture = () => {
    const [productData, setProductData] = useState([]);
    const [categoryWiseProduct, setCategoryWiseProduct] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        fetch('/Produtcs.JSON')
            .then(res => res.json())
            .then(data => {
                setProductData(data)
            })
    }, []);

    useEffect(() => {
        const filterProduct = productData.filter((product) => product?.category === categoryId)
        setCategoryWiseProduct(filterProduct);
    }, [categoryId, productData])

    return (
        <>
            <div className="about-header-conter">
                <h1>{categoryWiseProduct[0]?.category}</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   COLLECTION</Link>   /
                    <Link to='/'>   {categoryWiseProduct[0]?.category}</Link>
                </div>
            </div>
            <div className="bedroom-products">
                <div className="bedroom-filter-bar">
                    <h6>Showing {categoryWiseProduct.length} Products</h6>
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
                            categoryWiseProduct.map((productData) => <BedroomProduct
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

export default CategoryWiseFurniture;