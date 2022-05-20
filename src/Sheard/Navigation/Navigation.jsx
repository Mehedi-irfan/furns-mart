import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asstes/images/logo.png';
import './Navigation.css';

const Navigation = ({ filterData }) => {
    const [showNavbar, setShowNavbar] = useState(false);

    return (
        <div>
            <div className='container mt-4'>
                <div className="main-nav">
                    <div className="logo">
                        <i onClick={() => setShowNavbar(!showNavbar)} class="fa-solid fa-bars"></i>
                        <img data-aos="fade-right"
                            data-aos-easing="ease-in"
                            data-aos-duration="1000" src={logo} alt="" />
                    </div>
                    <div className="nav-icon" data-aos="fade-left"
                        data-aos-easing="ease-in"
                        data-aos-duration="1000">
                        <i className="bi bi-search"></i>
                        <i className="bi bi-person"></i>
                        <i className="bi bi-bag"></i>
                    </div>
                </div>
            </div>
            <div className={showNavbar ? 'main-header menu-link' : 'main-header'}>
                <nav className="nav-section">
                    <ul className='menubar'>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li className='dropdwon-button'><Link to='/homeFurniture'>Home Furniture</Link>
                            <ul className='dropdown-menubar'>
                                <li><button onClick={() => filterData('bedroom')}>Bedroom</button></li>
                                <li><button onClick={() => filterData('dining')}>Dinig</button></li>
                                <li><button onClick={() => filterData('living')}>Living</button></li>
                            </ul>
                        </li>
                        <li className='dropdwon-button1'><Link to='/hospitalFurniture'>Hospital Furniture</Link>
                            <ul className='dropdown-menubar1'>
                                <li><Link to='/lounge'>Lounge</Link></li>
                                <li><Link to='/officeChair'>Office Chair</Link></li>
                                <li><Link to='/officeTabel'>Office Tabel</Link></li>
                            </ul>
                        </li>
                        <li className='dropdwon-button2'><Link to='/officeFurniture'>Office Furniture</Link>
                            <ul className='dropdown-menubar2'>
                                <li><Link to='/hospitalBed'>Hospital Bed</Link></li>
                                <li><Link to='/hospitalUtility'>Hospital Utility</Link></li>
                            </ul>
                        </li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
};

export default Navigation;