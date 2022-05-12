import React, { useEffect, useState } from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

const Features = () => {
    const [featuredProduct, setFeaturedProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setFeaturedProduct(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">

                {!featuredProduct ? <div className="spinner-border mx-auto" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div> :
                    featuredProduct.slice(8, 12).map(products => <FeaturedProducts
                        key={products.id}
                        products={products}
                    ></FeaturedProducts>)
                }

            </div>
        </div >
    );
};

export default Features;