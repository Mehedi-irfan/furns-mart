import React from 'react';
import './CartButton.css';
import { useCart } from 'react-use-cart';

const CartButton = ({ cart }) => {
    const {
        item,
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();


    return (
        <div className='cart-button'>
            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-cart-check-fill"></i> <br /> <span className='text-white'>{totalItems} itmes</span> <br />
                <span className='itmes-cart'>${totalUniqueItems}</span>
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header" id='cart-header'>
                    <h5 id="offcanvasRightLabel" className='text-danger'>Cart :- {totalUniqueItems}</h5>
                    <button type="button" id='close-btn' className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        items.length === 0 ?
                            <div className="cart-icon">
                                <i class="bi bi-bag-heart"></i>
                                <p>There are no Products</p>
                            </div>
                            : (
                                items.map((item) => {
                                    return (
                                        <>
                                            <div className="row cart-bodys">
                                                <div className="col-md-5 cart-img">
                                                    <img className='img-fluid' src={item.img} alt="" />
                                                </div>
                                                <div className="col-md-7 cart-content">
                                                    <h6>{item.name.slice(0, 20)}</h6>
                                                    <p className='m-0'>Price : ${item.price}</p>
                                                    <p className='mb-2'>Quantity :- {item.quantity}</p>
                                                    <div className="cart-btn">
                                                        <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button> <br />
                                                        <i onClick={() => removeItem(item.id)} class="fa-solid fa-xmark close-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                item && <i onClick={() => emptyCart()} className='fa-solid fa-xmark empty-icon'></i>}
                                        </>
                                    )
                                })
                            )
                    }
                </div>

                <div className="cart-footer">
                    <p>Total Price</p>
                    <p>${cartTotal}</p>
                </div>
            </div>
        </div>
    );
};

export default CartButton;