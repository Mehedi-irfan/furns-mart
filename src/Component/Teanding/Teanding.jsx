import React, { useEffect, useState } from 'react';
import TeandingProduct from '../TeandingProduct/TeandingProduct';

const Teanding = () => {
    const [teandingProduct, setTendingProduct] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setTendingProduct(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">

                {
                    teandingProduct ? teandingProduct.filter(pd => pd.price > 300).map(products => <TeandingProduct
                        key={products.id}
                        products={products}
                    ></TeandingProduct>) : <div class="spinner-border mx-auto" role="status">
                        <span class="visually-hidden ">Loading...</span>
                    </div>
                }

            </div>
        </div>
    );
};

export default Teanding;