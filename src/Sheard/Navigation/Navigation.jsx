import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asstes/images/logo.png';
import { useCart } from 'react-use-cart'
import './Navigation.css';

const Navigation = () => {
    const {
        totalUniqueItems
    } = useCart();

    const navRef = useRef();
    const search = useRef();

    const clearBar = () => {
        search.current.classList.toggle('clear-var')
    }

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive-nav')
    }

    return (
        <>
            <div ref={search}>
                <div className="top-nav-bar ">
                    <div className="row " id='top-navbar'>
                        <div className="col-md-6 ">
                            <div className="logo-img">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="top-navbar-icon">
                                <ul>
                                    <li><i onClick={clearBar} class="bi bi-search"></i></li>
                                    <li><i class="bi bi-person user-icon"></i></li>
                                    <li><i class="bi bi-bag-heart"></i>
                                        <span className='cart-number'>{totalUniqueItems}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* search bar  */}

                <div className="search-bar-section">
                    <div className="search-bar">
                        <input type="text" placeholder='Enter your Search Keyword.....' />
                        <i class="bi bi-search"></i>
                    </div>
                    <div className="claer-icon">
                        <i onClick={clearBar} class="fa-solid fa-xmark"></i>
                    </div>
                </div>
                {/* main nav bar  */}
            </div>

            <div className="main-navbar-section">
                <div className="hamburger-menu">
                    <i onClick={showNavBar} class="bi bi-list"></i>
                </div>

                <nav>
                    <ul ref={navRef} className='main-navbar'>
                        <div className="cross-bar">
                            <i onClick={showNavBar} class="bi bi-x"></i>
                        </div>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/'>Home Furniture <i class="bi bi-caret-down-fill"></i></Link>
                            <ul className='drop-down-menu' id='home-furniture-dropdown'>
                                <li><Link to='/category/bedroom'>Bedroom</Link></li>
                                <li><Link to='/category/dining'>Dining</Link></li>
                                <li><Link to='/category/living'>Living</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/'>Office Furniture <i class="bi bi-caret-down-fill"></i></Link>
                            <ul className='drop-down-menu' id='office-furniture-dropdown'>
                                <li><Link to='/category/lounge'>Lounge</Link></li>
                                <li><Link to='/category/officeChair'>Office Chair</Link></li>
                                <li><Link to='/category/officeTabel'>Office Table</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/'>Hospital Furniture <i class="bi bi-caret-down-fill"></i></Link>
                            <ul className='drop-down-menu' id='hospital-furniture-dropdown'>
                                <li><Link to='/category/hospitalBed'>Hospital Bed</Link></li>
                                <li><Link to='/category/hospitalUtility'>Hospital Utility</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </ >
    );
};

export default Navigation;