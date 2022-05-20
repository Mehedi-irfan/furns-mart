import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.css';
import aboutImg1 from '../../asstes/images/aboutIm1.jpg';
import aboutImg2 from '../../asstes/images/aboutIm2.jpg';

const AboutBanner = () => {
    return (
        <div>
            <div className="about-header-conter">
                <h1>About Us</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   ABOUT</Link>
                </div>
            </div>
            <div className="about-page-content">
                <h2>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.</h2>
            </div>
            <div className="about-page-image">
                <div className="row  g-4">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-img">
                            <img src={aboutImg1} alt="" />
                        </div>
                        <div className="about-image-content">
                            <h4>OUR STORES</h4>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-img">
                            <img src={aboutImg2} alt="" />
                        </div>
                        <div className="about-image-content">
                            <h4>OUR MISSION</h4>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutBanner;