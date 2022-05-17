import React from 'react';
import './CartButton.css';

const CartButton = () => {
    return (
        <div className='cart-button'>
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-cart-check-fill"></i> <br /> <span className='text-white'>0 itmes</span> <br />
                <span className='itmes-cart'>$0</span>
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header" id='cart-header'>
                    <h5 id="offcanvasRightLabel">Cart</h5>
                    <button type="button" id='close-btn' className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="cart-icon">
                        <i class="bi bi-bag-heart"></i>
                        <p>There are no Products</p>
                    </div>
                </div>
                <div className="cart-footer">
                    <p>View Cart</p>
                    <p>$0.00</p>
                </div>
            </div>
        </div>
    );
};

export default CartButton;