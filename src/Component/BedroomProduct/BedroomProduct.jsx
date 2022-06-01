import React from 'react';
import { Link } from 'react-router-dom';

const BedroomProduct = ({ productData }) => {
    const { title, img, sale, stock, price, id } = productData;
    return (
        <>
            <div className="col-md-3 col-sm-6">
                <div className="arrivale-card w-100">
                    <div className="image">
                        <img className='img-fluid rounded-3 w-100' src={img} alt="" />
                        <div className="stock-sale">
                            <div>
                                <p>{sale}</p>
                                <h6>{stock}</h6>
                            </div>
                            <div className="love-icon">
                                <i class="fa-regular fa-heart" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left"></i>
                            </div>
                        </div>
                        <div className="card-desc">
                            <div className="icons">
                                <i class="bi bi-view-list"></i>
                                <i class="bi bi-disc"></i>
                            </div>
                            <Link to={`/furniture/${id}`}>
                                <button><i class="bi bi-info-circle-fill"></i> See More Details</button>
                            </Link>
                        </div>
                    </div>
                    <div className="card-content text-center mt-3">
                        <h6>{title?.slice(0, 20)}</h6>
                        <h5 className='d-inline-flex'><p className='text-decoration-line-through fw-lighter text-secondary'></p> <p className='price'>${price}</p></h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BedroomProduct;