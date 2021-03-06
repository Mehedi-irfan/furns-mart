import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import './Furniture.css'
import SingleFurniture from '../SingleFurniture/SingleFurniture';

const Furniture = () => {
    const [furnitureProduct, setFurnitureProduct] = useState([]);
    const [displayFurniture, setDisplayFurniture] = useState([]);
    const [submit, setSubmit] = useState([]);
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [message, setMessage] = useState();
    const { furnitureId } = useParams();

    useEffect(() => {
        fetch('/Produtcs.JSON')
            .then(res => res.json())
            .then(data => setFurnitureProduct(data))
    }, []);

    useEffect(() => {
        const filterData = furnitureProduct?.filter((product) => product?.id == furnitureId);
        setDisplayFurniture(filterData);
    }, [furnitureProduct, furnitureId])

    const handleOnChange = (e) => {
        setEmail(e.target.value);
    }

    const handleOnChaneName = (e) => {
        setName(e.target.value)
    }

    const handleOnChangeMessage = e => {
        setMessage(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const fromData = {
            name: name,
            email: email,
            message: message
        }
        setSubmit(fromData);
    }

    return (
        <>
            <div className="about-header-conter">
                <h1>{displayFurniture[0]?.name ? displayFurniture[0]?.name : displayFurniture[0]?.title}</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>    PRODUCT</Link>  /
                    <Link to='/'>   {displayFurniture[0]?.name ? displayFurniture[0]?.name : displayFurniture[0]?.title}</Link>
                </div>
            </div>
            <div className="funrniture-product">
                <div className="row g-5 w-100">
                    {
                        displayFurniture.map((furn, index) => <SingleFurniture
                            key={index}
                            furn={furn}
                        ></SingleFurniture>)
                    }
                </div>
            </div>
            <div className="furniture-tab">
                <Tabs>
                    <TabList>
                        <Tab>Description</Tab>
                        {displayFurniture[0]?.Material && <Tab>Additional Info</Tab>}
                        <Tab>Reviews</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="frist-tab">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia, velit, reiciendis delectus nihil impedit debitis provident consectetur adipisci quae aperiam laboriosam hic aliquid recusandae est ipsa tenetur ad neque nemo eaque perferendis corporis nesciunt? Sunt molestias aspernatur autem, porro dolor omnis? Odio explicabo accusantium autem maxime, repellat a possimus?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia, velit, reiciendis delectus nihil impedit debitis provident consectetur adipisci quae aperiam laboriosam hic aliquid recusandae est ipsa tenetur ad neque nemo eaque perferendis corporis nesciunt? Sunt molestias aspernatur autem, porro dolor omnis? Odio explicabo accusantium autem maxime, repellat a possimus?</p>
                        </div>
                    </TabPanel>
                    {displayFurniture[0]?.Material && <TabPanel>
                        <div className="second-tabs">
                            <h6>Matrial :- {displayFurniture[0]?.Material}</h6>
                            <h6 className='my-3'>Size :- {displayFurniture[0]?.size}</h6>
                            <h6>Color :- {displayFurniture[0]?.color}</h6>
                        </div>
                    </TabPanel>}
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
                                    {submit.name && <div className="review-message mt-4">
                                        <div className="review-img">
                                            <i class="fa-solid fa-user-tie user-icon"></i>
                                        </div>
                                        <div className="review-content">
                                            <h5>{submit?.name}</h5>
                                            <ul className='ratings'>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                                <li><i class="bi bi-star-fill"></i></li>
                                            </ul>
                                            <p>{submit?.message}</p>
                                        </div>
                                    </div>}
                                </div>

                                {/* review section  */}
                                <div className="col-md-5 col-sm-6">
                                    <div className="review-section">
                                        <h3>Add Your Review</h3>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="review-ratings">
                                            <h6>Your Ratings :- </h6>
                                            <Rating className='start-rating'
                                                emptySymbol="fa fa-star-o fa-2x startss"
                                                fullSymbol="fa fa-star fa-2x"
                                            />
                                        </div>
                                        <div className="text-area">
                                            <label htmlFor="">Message</label>
                                            <textarea name="" id="" cols="60" rows="5" onChange={handleOnChangeMessage}></textarea>
                                        </div>

                                        <div className="review-name">
                                            <div className="name">
                                                <label htmlFor="">Name</label>
                                                <input type="text" onChange={handleOnChaneName} />
                                            </div>

                                            <div className="email">
                                                <label htmlFor="">Email</label>
                                                <input type="text" onChange={handleOnChange} />
                                            </div>

                                        </div>
                                        <button className='submit-btn'>Submit</button>
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