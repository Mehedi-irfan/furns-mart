import React, { useEffect, useState } from 'react';
import ArrivalProduct from '../ArrivaleProduct/ArrivalProduct';
import './OurProducts.css';


const OurProducts = () => {
    const [arrivalProduct, setArrivalProducts] = useState([]);
    const [filterCategory, setFilterCategory] = useState([]);
    const [furnitureCategory, setFurnitureCayegory] = useState('feature');
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setArrivalProducts(data))
    }, []);

    useEffect(() => {
        const filterData = arrivalProduct.filter((ele) => ele.category == furnitureCategory)
        setFilterCategory(filterData);
    }, [furnitureCategory, arrivalProduct])

    return (
        <div>
            <div className="products-section">
                <div className="prodcut-title">
                    <h2>Our Products</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dignissimos officia, esse voluptate quam libero aperiam cupiditate quo unde dolores, </p>
                </div>
                <div className="product-arrivale">
                    <ul>
                        <li><button onClick={() => setFilterCategory(arrivalProduct)} >New Arrival</button></li>
                        <li><button onClick={() => setFurnitureCayegory('feature')} >Featured</button></li>
                        <li><button onClick={() => setFurnitureCayegory('onsale')} >On Sale</button></li>
                        <li><button onClick={() => setFurnitureCayegory('teding')}  >Tending</button></li>
                    </ul>

                </div>
                <div className="new-arrival-product">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                        {
                            !filterCategory ? <div class="spinner-border mx-auto" role="status">
                                <span class="visually-hidden ">Loading...</span>
                            </div> : filterCategory.map(products => <ArrivalProduct
                                key={products.id}
                                products={products}
                            ></ArrivalProduct>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;