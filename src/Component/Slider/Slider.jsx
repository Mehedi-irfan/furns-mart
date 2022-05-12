import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";
import './Slider.css'
import sliderImg1 from '../../asstes/images/slider-1.png';
import sliderImg2 from '../../asstes/images/slider-2.png';


const Slider = () => {
    return (
        <div>
            <div className="main-slider-sction">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="sliders">
                            <div className="slider1" data-aos="fade-right" data-aos-easing="ease-in"
                                data-aos-duration="1000">
                                <h3>New Products</h3>
                                <h1>Flexiable Chair</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus soluta voluptatibus quibusdam quam quia alias praesentium incidunt eveniet quisquam aperiam.</p>
                                <button>Shop Now</button>
                            </div>
                            <div className="sliderImg" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <img src={sliderImg1} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="sliders">
                            <div className="slider1" data-aos="fade-right" data-aos-easing="ease-in"
                                data-aos-duration="1000">
                                <h3>Best Seller</h3>
                                <h1>Creative Sopa</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus soluta voluptatibus quibusdam quam quia alias praesentium incidunt eveniet quisquam aperiam.</p>
                                <button>Shop Now</button>
                            </div>
                            <div className="sliderImg" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1000">
                                <img src={sliderImg2} alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;