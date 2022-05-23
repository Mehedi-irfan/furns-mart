import React from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import ContactMap from '../ContactMap/ContactMap';

import './Contact.css';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_mfa9eyk", "template_ypfv9na", e.target, "ilmTjBCKVfIBDrISU").then(res => console.log(res)).catch(err => console.log(err))

    }
    return (
        <>
            <div className="about-header-conter">
                <h1>Contact</h1>
                <div className="about-link">
                    <Link to='/'>HOME</Link>   /
                    <Link to='/'>   Contact</Link>
                </div>
            </div>
            <ContactMap />
            <div className="contact-section">
                <div className="row g-4 mt-5">
                    <div className="col-md-4 col-sm-12">
                        <div className="contect-desc">
                            <h2>Contact Info</h2>
                            {/* phone number */}
                            <div className="phone">
                                <p className='phone-phone'>Phone :-</p>
                                <div className='phone-number'>
                                    <p>+012 345 678 102</p>
                                    <p>+012 345 678 203</p>
                                </div>
                            </div>
                            {/* email address  */}
                            <div className="phone">
                                <p className='phone-phone'>Email :-</p>
                                <div className='phone-number'>
                                    <p>email@here.com</p>
                                    <p>your@email.here</p>
                                </div>
                            </div>
                            {/* address  */}
                            <div className="phone">
                                <p className='phone-phone'>Address :-</p>
                                <div className='phone-number'>
                                    <p>Address goes here,</p>
                                    <p>street, Crossroad 123.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <div className="email-container">
                            <h2>Get In Touch</h2>
                            <div className="email-section">
                                <form action="" onSubmit={sendEmail}>
                                    <div className='name-section row g-4 my-4'>
                                        <div className='col-md-6'>
                                            <label htmlFor="" className='mb-1 fw-medium'>First name</label>
                                            <input className='form-control' name='Fname' type="text" />
                                        </div>

                                        <div className='col-md-6'>
                                            <label htmlFor="" className='mb-1 fw-medium' name='name'>Last Name</label>
                                            <input className='form-control' name='name' type="text" />
                                        </div>
                                    </div>
                                    <label htmlFor="" className='mb-1 fw-medium'>Email</label>
                                    <input className='form-control mb-3' name='user_email' type="text" />

                                    <label htmlFor="" className='mb-1 fw-medium'>Subject</label>
                                    <input className='form-control' name='subject' type="text" />

                                    <label htmlFor="" className='mt-4 mb-1 fw-medium'>Message</label>
                                    <textarea className='form-control mb-4' name="message" id="" cols="30" rows="5"></textarea>
                                    <button type='submit' className='submit-btn'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;