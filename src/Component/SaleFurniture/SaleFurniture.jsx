import React from 'react';
import './SaleFurniture.css';
import featured1 from '../../asstes/images/fetured1.jpg';
import featured2 from '../../asstes/images/fetured2.jpg'

const SaleFurniture = () => {
    return (
        <div className=''>
            <div className="sale-furniture-main">
                <div className="row g-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="image">
                            <img className='img-fluid' src={featured1} alt="" />
                            <div className="image-info">
                                <h2>Sale Furniture <br /> For Summer</h2>
                                <p>Great Discount Here</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="image">
                            <img className='img-fluid' src={featured2} alt="" />
                            <div className="image-info1">
                                <h2>Office Chair <br /> For Best Offer</h2>
                                <p>Great Discounts Here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleFurniture;