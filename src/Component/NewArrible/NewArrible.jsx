import React, { useEffect, useState } from 'react';
import ArrivalProduct from '../ArrivaleProduct/ArrivalProduct';

const NewArrible = () => {
    const [arrivalProduct, setArrivalProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setArrivalProducts(data))
    }, [])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                {
                    !arrivalProduct ? <div class="spinner-border mx-auto" role="status">
                        <span class="visually-hidden ">Loading...</span>
                    </div> : arrivalProduct.slice(0, 8).map(products => <ArrivalProduct
                        key={products.id}
                        products={products}
                    ></ArrivalProduct>)
                }

            </div>
        </div >
    );
};

export default NewArrible;