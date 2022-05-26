import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import './Furniture.css'

const Furniture = () => {
    const [furnitureProduct, setFurnitureProduct] = useState([]);
    const [displayFurniture, setDisplayFurniture] = useState([]);
    const [submit, setSubmit] = useState([]);
    const { furnitureId } = useParams();

    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setFurnitureProduct(data))
    }, []);

    useEffect(() => {
        const filterData = furnitureProduct?.filter((product) => product?.id == furnitureId);
        setDisplayFurniture(filterData);
    }, [furnitureProduct, furnitureId])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmit(e.target.value);
        setSubmit('')
    }
    console.log(submit);
    return (
        <>
            <div className="about-header-conter">
                <h1>{displayFurniture[0]?.name}</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>    PRODUCT</Link>  /
                    <Link to='/'>   {displayFurniture[0]?.name}</Link>
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
                                <h3>{displayFurniture[0]?.name}</h3>
                            </div>
                            <div className="price m-0 ">
                                <p className='d-flex'>Price :- <p className='text-secondary text-decoration-line-through mx-2'>{displayFurniture[0]?.beforePrice}</p> ${displayFurniture[0]?.price}</p>
                            </div>
                            <p className='furniture-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                            {/* matrial section  */}
                            {
                                displayFurniture && <div className="all-mertail py-3">
                                    <div className="matrial-section">
                                        <h6>Material</h6>
                                        <select name="" id="">
                                            <option value="">{displayFurniture[0]?.Material.slice(0, 5)}</option>
                                            <option value="">{displayFurniture[0]?.Material.slice(6, 12)}</option>
                                            <option value="">{displayFurniture[0]?.Material.slice(13, 21)}</option>
                                        </select>
                                    </div>
                                    {/* size section  */}
                                    <div className="size-section">
                                        <h6>Size</h6>
                                        <select name="" id="">
                                            <option value="">{displayFurniture[0]?.size.slice(0, 12)}</option>
                                            <option value="">{displayFurniture[0]?.size.slice(13, 20)}</option>
                                            <option value="">{displayFurniture[0]?.size.slice(21, 28)}</option>
                                        </select>
                                    </div>
                                    {/* color section  */}
                                    <div className="color-section">
                                        <h6>Color</h6>
                                        <select name="" id="">
                                            <option value="">{displayFurniture[0]?.color.slice(0, 4)}</option>
                                            <option value="">{displayFurniture[0]?.color.slice(5, 11)}</option>
                                            <option value="">{displayFurniture[0]?.color.slice(12, 22)}</option>
                                            <option value="">{displayFurniture[0]?.color.slice(23, 29)}</option>
                                        </select>
                                    </div>
                                </div>
                            }
                            {/* quantity section  */}
                            <div className="input-section">
                                <button>-</button>
                                <input type="text" value='0' />
                                <button>+</button>
                                <button className='shop-btn'>Add To Cart</button>
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
                </div>
            </div>
            <div className="furniture-tab">
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        <Tab>Additional Info</Tab>
                        <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="frist-tab">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia, velit, reiciendis delectus nihil impedit debitis provident consectetur adipisci quae aperiam laboriosam hic aliquid recusandae est ipsa tenetur ad neque nemo eaque perferendis corporis nesciunt? Sunt molestias aspernatur autem, porro dolor omnis? Odio explicabo accusantium autem maxime, repellat a possimus?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia, velit, reiciendis delectus nihil impedit debitis provident consectetur adipisci quae aperiam laboriosam hic aliquid recusandae est ipsa tenetur ad neque nemo eaque perferendis corporis nesciunt? Sunt molestias aspernatur autem, porro dolor omnis? Odio explicabo accusantium autem maxime, repellat a possimus?</p>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="second-tabs">
                            <h6>Matrial :- {displayFurniture[0]?.Material}</h6>
                            <h6 className='my-3'>Size :- {displayFurniture[0]?.size}</h6>
                            <h6>Color :- {displayFurniture[0]?.color}</h6>
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

export default Furniture;