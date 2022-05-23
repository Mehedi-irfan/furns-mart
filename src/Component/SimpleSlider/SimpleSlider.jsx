
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styles.css";
import './SimpleSlider.css'
import sliderImg1 from '../../asstes/images/slider-1.png';
import sliderImg2 from '../../asstes/images/slider-2.png';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", backgroundColor: "rgba(255, 112, 4, 1)", position: 'absolute', right: '30px', padding: '22px', borderRadius: '50%', justifyContent: "center", alignItems: 'center' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", backgroundColor: "rgba(255, 112, 4, 1)", position: 'absolute', left: '30px', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider-section">
        <Slider {...settings}>

          {/* slider frist  */}
          <div >
            <div className="row g-4" id="silder-contect-section">
              <div className="col-md-6 col-sm-12">
                <div className="slider-contetn">
                  <h2>NEW PRODUCTS</h2>
                  <h1>Felxible Chair</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus enim iure molestiae harum ut ipsum rem suscipit delectus dolore sint?</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="slider-img">

                  <img src={sliderImg1} className='img-fluid' alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* slider second  */}
          <div >
            <div className="row g-4" id="silder-contect-section">
              <div className="col-md-6 col-sm-12">
                <div className="slider-contetn">
                  <h2>Best Seller</h2>
                  <h1>Creative Sofa</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus enim iure molestiae harum ut ipsum rem suscipit delectus dolore sint?</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="slider-img">

                  <img src={sliderImg2} className='img-fluid' alt="" />
                </div>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    );
  }
}