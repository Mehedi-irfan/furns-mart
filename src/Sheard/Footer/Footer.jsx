import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-2">
                            <div className="frist-row">
                                <h3>ABOUT US</h3>
                                <p>Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                <ul>
                                    <li><Link to="/"><i class="bi bi-facebook"></i></Link></li>
                                    <li><Link to="/"><i class="bi bi-twitter"></i></Link></li>
                                    <li><Link to="/"><i class="bi bi-instagram"></i></Link></li>
                                    <li><Link to="/"><i class="bi bi-youtube"></i></Link></li>
                                    <li><Link to="/"><i class="bi bi-pinterest"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-2">
                            <div className="second-row">
                                <h4>INFORMATION</h4>
                                <ul>
                                    <li><Link to='/'>About us</Link></li>
                                    <li><Link to='/'>Manufactures</Link></li>
                                    <li><Link to='/'>Tracking Order</Link></li>
                                    <li><Link to='/'>Privacy & Policy</Link></li>
                                    <li><Link to='/'>Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-2">
                            <div className="second-row">
                                <h4>MY ACCOUNT</h4>
                                <ul>
                                    <li><Link to='/'>Login</Link></li>
                                    <li><Link to='/'>My Cart</Link></li>
                                    <li><Link to='/'>Wishlist</Link></li>
                                    <li><Link to='/'>Compare</Link></li>
                                    <li><Link to='/'>My Account</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-2">
                            <div className="fourth-row">
                                <h4>NEWALATER</h4>
                                <input type="text" placeholder='Enter E-mail address' />

                                <Link to='/'>
                                    <button><i class="bi bi-telegram"></i> Subscribe</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="second-footer">
                <p>Copyright@2022 By <span>Mehedi Irfan</span></p>
            </div>
        </>
    );
};

export default Footer;