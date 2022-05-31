import React from 'react';
import { useCart } from 'react-use-cart';
import '../Furniture/Furniture.css'

const SingleFurniture = ({ furn }) => {
    const { img, stock, sale, name, price, beforePrice, Material, size, color } = furn;
    const { addItem } = useCart()
    return (
        <>
            <div className="col-md-5 col-sm-6">
                <div className="furniture-img">
                    <img src={img} className='img-fluid' alt="" />
                </div>
            </div>
            <div className="col-md-7 col-sm-6">
                <div className="furniture-content">
                    <div className="furniture-text">
                        <p>Stock :- {stock}</p>
                        <p>Sale :- {sale ? sale : 520}</p>
                        <h3>{name}</h3>
                    </div>
                    <div className="price m-0 ">
                        <p className='d-flex'>Price :- <p className='text-secondary text-decoration-line-through mx-2'>{beforePrice}</p> ${price}</p>
                    </div>
                    <p className='furniture-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    {/* matrial section  */}
                    {
                        furn && <div className="all-mertail py-3">
                            <div className="matrial-section">
                                <h6>Material</h6>
                                <select name="" id="">
                                    <option value="">{Material.slice(0, 5)}</option>
                                    <option value="">{Material.slice(6, 12)}</option>
                                    <option value="">{Material.slice(13, 21)}</option>
                                </select>
                            </div>
                            {/* size section  */}
                            <div className="size-section">
                                <h6>Size</h6>
                                <select name="" id="">
                                    <option value="">{size.slice(0, 12)}</option>
                                    <option value="">{size.slice(13, 20)}</option>
                                    <option value="">{size.slice(21, 28)}</option>
                                </select>
                            </div>
                            {/* color section  */}
                            <div className="color-section">
                                <h6>Color</h6>
                                <select name="" id="">
                                    <option value="">{color.slice(0, 4)}</option>
                                    <option value="">{color.slice(5, 11)}</option>
                                    <option value="">{color.slice(12, 22)}</option>
                                    <option value="">{color.slice(23, 29)}</option>
                                </select>
                            </div>
                        </div>
                    }
                    {/* quantity section  */}
                    <div className="input-section">
                        <button onClick={() => addItem(furn)} className='shop-btn'>Add To Cart</button>
                    </div>
                    <div className="whistel-compare">
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

export default SingleFurniture;