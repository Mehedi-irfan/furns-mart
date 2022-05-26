import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const CategoryFurniture = () => {
    const { categoryFurnitureId } = useParams();
    const [furnitureProduct, setFurnitureProduct] = useState([]);
    const [displayFurniture, setDisplayFurniture] = useState([]);
    const [submit, setSubmit] = useState([]);

    useEffect(() => {
        fetch('/produtcs.JSON')
            .then(res => res.json())
            .then(data => setFurnitureProduct(data))
    }, []);

    useEffect(() => {
        const filterData = furnitureProduct?.filter((product) => product?.id == categoryFurnitureId);
        setDisplayFurniture(filterData);
    }, [furnitureProduct, categoryFurnitureId])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(e.target.value);
        setSubmit('')
    }
    console.log(displayFurniture);
    return (
        <>
            <div className="about-header-conter">
                <h1>{displayFurniture[0]?.title}</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   ABOUT</Link>  /
                    <Link to='/'>   {displayFurniture[0]?.title}</Link>
                </div>
            </div>

            <div className="funrniture-product">
                <div className="row g-5 w-100">
                    <div className="col-md-5 col-sm-6">
                        <div className="furniture-img">
                            <img src={displayFurniture[0]?.img} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-6">
                        <div className="furniture-content">
                            <div className="furniture-text">
                                <p>Stock :- {displayFurniture[0]?.stock}</p>
                                <p>Sale :- {displayFurniture[0]?.sale ? displayFurniture[0]?.sale : 520}</p>
                                <h3>{displayFurniture[0]?.title}</h3>
                            </div>
                            <div className="price m-0 ">
                                <p className='d-flex'>Price :- <p className='text-secondary text-decoration-line-through mx-2'>{displayFurniture[0]?.beforePrice}</p> ${displayFurniture[0]?.price}</p>
                            </div>
                            <p className='furniture-desc my-3'>{displayFurniture[0]?.desc}.</p>

                            {/* matrial section  */}

                            {/* quantity section  */}
                            <div className="input-section">
                                <button>-</button>
                                <input type="text" value='0' />
                                <button>+</button>
                                <button className='shop-btn'>Add To Cart</button>
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
                </div>
            </div>
            <div className="furniture-tab">
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="frist-tab">

                            <p>{displayFurniture[0]?.desc}</p>
                            <p>{displayFurniture[0]?.desc}</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="third-tabs">
                            <div className="row">

                                {/* review message section  */}
                                <div className="col-md-7 col-sm-6">
                                    <div className="review-message">
                                        <div className="review-img">
                                            <i class="fa-solid fa-user-tie user-icon"></i>
                                        </div>
                                        <div className="review-content">
                                            <h5>White Levis</h5>
                                            <ul className='ratings'>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio pariatur sit exercitationem facilis odit nesciunt</p>
                                        </div>
                                    </div>
                                </div>

                                {/* review section  */}
                                <div className="col-md-5 col-sm-6">
                                    <div className="review-section">
                                        <h3>Add Your Review</h3>
                                    </div>
                                    <form onClick={handleSubmit}>
                                        <div className="review-ratings">
                                            <h6>Your Ratings :- </h6>
                                            <Rating className='start-rating'
                                                emptySymbol="fa fa-star-o fa-2x startss"
                                                fullSymbol="fa fa-star fa-2x"
                                            />
                                        </div>
                                        <div className="text-area">
                                            <label htmlFor="">Message</label>
                                            <textarea name="" id="" cols="60" rows="5"></textarea>
                                        </div>

                                        <div className="review-name">
                                            <div className="name">
                                                <label htmlFor="">Name</label>
                                                <input type="text" />
                                            </div>

                                            <div className="email">
                                                <label htmlFor="">Email</label>
                                                <input type="text" />
                                            </div>

                                        </div>
                                        <button type='submit' className='submit-btn'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <RelatedProducts />
        </>
    );
};

export default CategoryFurniture;