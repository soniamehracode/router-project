// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Carosal.css";
const Carosal = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carosal-container">
      <Slider {...settings}>
        <div>
          <div className="contents">
            <span>{props.title}</span>
            <h1>personalized online training program</h1>
            <div className="paras">
              <p>{props.paragraph}</p>
              <button>{props.button}</button>
            </div>
          </div>
        </div>
        <div>
          <div className="contents">
            <span>{props.title}</span>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
          </div>
        </div>
        <div>
          <div className="contents">
            <span>{props.title}</span>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
          </div>
        </div>

        <div>
          <div className="contents">
            <span>{props.title}</span>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carosal;
