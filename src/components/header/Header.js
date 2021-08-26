import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./Header.css";

const Header = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="header-container">
      <Slider {...settings}>
        <div>
          <div className="content">
            <span>{props.title}</span>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
            <button>{props.button}</button>
          </div>
        </div>
        <div>
          <div className="content">
            <h3>{props.title}</h3>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
          </div>
        </div>
        <div>
          <div className="content">
            <h3>{props.title}</h3>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
          </div>
        </div>
        <div>
          <div className="content">
            <h3>{props.title}</h3>
            <h1>{props.para}</h1>
            <p>{props.paragraph}</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
