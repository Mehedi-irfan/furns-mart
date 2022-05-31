import React from 'react';
import { useCart } from 'react-use-cart';

const SingleCategoryFurniture = ({ funs, handleAddToCart }) => {
    const { img, stock, sale, title, price, beforePrice, desc } = funs;

    return (
        <>
            <div className="col-md-5 col-sm-6">/
                <div className="furniture-img">
                    <img src={img} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-md-7 col-sm-6">
                <div className="furniture-content">
                    <div className="furniture-text">
                        <p>Stock :- {stock}</p>
                        <p>Sale :- {sale ? sale : 520}</p>
                        <h3>{title}</h3>
                    </div>
                    <div className="price m-0 ">
                        <p className='d-flex'>Price :- <p className='text-secondary text-decoration-line-through mx-2'>{beforePrice}</p> ${price}</p>
                    </div>
                    <p className='furniture-desc my-3'>{desc}.</p>

                    {/* matrial section  */}

                    {/* quantity section  */}
                    <div className="input-section">
                        <button
                            onClick={() => handleAddToCart(funs)}
                            className='shop-btn'>Add To Cart</button>
                    </div>
                    <div className="whistel-compare my-2">
                        <p><i class="bi bi-heart"></i>  Add to Whistlist</p>
                        <p><i class="bi bi-bezier2"></i> Add to Compare</p>
                    </div>
                    <div className="socail-media">
                        <h6>Shear :- </h6>
                        <ul>
                            <li><i class="bi bi-facebook"></i></li>
                            <li><i class="bi bi-twitter"></i></li>
                            <li><i class="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleCategoryFurniture;