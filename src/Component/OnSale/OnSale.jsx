import React, { useEffect, useState } from 'react';
import OnsaleProduct from '../OnsaleProduct/OnsaleProduct';

const OnSale = () => {
    const [onsaleProduct, setOnsaleProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setOnsaleProduct(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">

                {
                    !onsaleProduct ? <div class="spinner-border mx-auto" role="status">
                        <span class="visually-hidden ">Loading...</span>
                    </div> : onsaleProduct.slice(8, 14).map(products => <OnsaleProduct
                        key={products.id}
                        products={products}
                    ></OnsaleProduct>)
                }

            </div>
        </div>
    );
};

export default OnSale;