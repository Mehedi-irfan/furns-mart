import React from 'react';
import './Logos.css'
import bedroomLogo from '../../asstes/images/bedrom.png';
import livingLogo from '../../asstes/images/living.png';
import diningLogo from '../../asstes/images/dining.png';
import loungeLogo from '../../asstes/images/lounge.png';
import officeLogo from '../../asstes/images/office-chair.png';

const Logos = () => {
    return (
        <div>
            <div className="logos-section">
                <div className="logos" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img src={bedroomLogo} alt="" />
                    <p>Bedroom</p>
                </div>
                <div className="logos" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img src={livingLogo} alt="" />
                    <p>Living</p>
                </div>
                <div className="logos" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img src={diningLogo} alt="" />
                    <p>Dining</p>
                </div>
                <div className="logos" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img src={loungeLogo} alt="" />
                    <p>Lounge</p>
                </div>
                <div className="logos" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">
                    <img src={officeLogo} alt="" />
                    <p>Office Chair</p>
                </div>
            </div>
        </div>
    );
};


export default Logos;