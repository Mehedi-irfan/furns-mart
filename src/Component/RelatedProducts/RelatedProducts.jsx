import React, { useState, useEffect } from 'react';
import './RelatedProducts.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';
const RelatedProducts = () => {
    const [slider, setSlider] = useState([]);
    useEffect(() => {
        fetch('/products.JSON')
            .then(res => res.json())
            .then(data => setSlider(data))
    }, [])
    console.log(slider[0]?.name);
    return (
        <>
            <div className="realated-product">
                <h2>Related Products</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                // modules={[Pagination]}
                // className="mySwiper"
                >
                    {
                        slider.map((slide) => {
                            return (<SwiperSlide>
                                <div className="arrivale-card mt-4">
                                    <div className="image">
                                        <img className='img-fluid rounded-3 ' src={slide.img} alt="" />
                                        <div className="stock-sale">
                                            <div>
                                                <p>{slide.sale}</p>
                                                <h6>{slide.stock}</h6>
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
                                            <Link to={`/furniture/${slide.id}`}>
                                                <button><i class="bi bi-info-circle-fill"></i> See More Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-content text-center mt-3">
                                        <h6>{slide.name}</h6>
                                        <h5 className='d-inline-flex'><p className='text-decoration-line-through fw-lighter text-secondary'>{slide.beforePrice}</p> <p className='price'>${slide.price}</p></h5>
                                    </div>
                                </div>
                            </SwiperSlide>)

                        })
                    }


                </Swiper>
            </div>
        </>
    );
};

export default RelatedProducts;